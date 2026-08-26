import { mkdir, writeFile } from "node:fs/promises";

const version = process.env.VERCEL_GIT_COMMIT_SHA || new Date().toISOString();

await mkdir("public", { recursive: true });
await writeFile(
  "public/version.json",
  `${JSON.stringify({ version })}\n`,
  "utf8",
);
