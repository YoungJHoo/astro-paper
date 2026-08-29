// Cross-platform replacement for `cp -r dist/pagefind public/`.
// pagefind --site dist writes its search index into dist/pagefind;
// this copies it into public/ so it is served at /pagefind/.
// Works on Windows (cmd/PowerShell) and Unix shells alike.
import { cpSync, rmSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "dist", "pagefind");
const dest = join(root, "public", "pagefind");

if (!existsSync(src)) {
  console.error(`[copy-pagefind] Source not found: ${src}`);
  process.exit(1);
}

rmSync(dest, { recursive: true, force: true });
cpSync(src, dest, { recursive: true });
console.log(`[copy-pagefind] Copied ${src} -> ${dest}`);
