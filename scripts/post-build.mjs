// Post-build steps that run after `astro build` + `pagefind`.
//
// 1. Copy pagefind search index from dist/pagefind -> public/pagefind
//    (cross-platform replacement for `cp -r dist/pagefind public/`).
// 2. Copy _redirects from project root -> dist/_redirects.
//    The file lives at the repo root (NOT in public/) because Astro 7 +
//    Rolldown tries to parse extensionless files in public/ as JS and
//    crashes with [PARSE_ERROR] Invalid Character.
import { cpSync, rmSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
let failed = false;

// --- 1. pagefind ---
const pagefindSrc = join(root, "dist", "pagefind");
const pagefindDest = join(root, "public", "pagefind");

if (existsSync(pagefindSrc)) {
  rmSync(pagefindDest, { recursive: true, force: true });
  cpSync(pagefindSrc, pagefindDest, { recursive: true });
  console.log(`[post-build] Copied pagefind -> public/pagefind`);
} else {
  console.error(`[post-build] pagefind source not found: ${pagefindSrc}`);
  failed = true;
}

// --- 2. _redirects ---
const redirectsSrc = join(root, "_redirects");
const redirectsDest = join(root, "dist", "_redirects");

if (existsSync(redirectsSrc)) {
  cpSync(redirectsSrc, redirectsDest);
  console.log(`[post-build] Copied _redirects -> dist/_redirects`);
} else {
  console.warn(`[post-build] _redirects not found at ${redirectsSrc}, skipping`);
}

if (failed) process.exit(1);
