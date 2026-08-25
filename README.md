# emot

[![Open in Bolt](https://bolt.new/static/open-in-bolt.svg)](https://bolt.new/~/sb1-merhv53a)

## EmailJS setup

Create a `.env` file in the project root and add the values from your EmailJS account:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

The EmailJS template should use `{{from_name}}`, `{{reply_to}}`, `{{message}}`, and `{{to_email}}` variables. Restart the Vite dev server after changing `.env`.
