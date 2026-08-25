/*
# Create contact_messages table for the contact form

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) — sender's name
  - `email` (text, not null) — sender's email address
  - `message` (text, not null) — the message body
  - `created_at` (timestamptz, defaults to now) — when the message was received

2. Security
- Enable RLS on `contact_messages`.
- This is a no-auth public contact form, so allow anon + authenticated to INSERT only.
- No SELECT/UPDATE/DELETE for anon or authenticated — only the service role (edge function) can read messages.
- This prevents anyone from reading or scraping submitted messages while still allowing the form to submit.

3. Notes
- The contact form edge function uses the service role key to insert, bypassing RLS.
- The anon-key frontend calls the edge function (not the table directly), so no direct table INSERT policy is strictly needed, but we add one as a fallback.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anon to insert (fallback if called directly)
DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages FOR INSERT
TO anon, authenticated WITH CHECK (true);

-- No SELECT/UPDATE/DELETE policies — only service role can read/manage messages
