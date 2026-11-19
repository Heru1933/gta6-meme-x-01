// Entry for make.fun's gta6-meme-x-01 ("Post a GTA 6 meme on X").
// This program copies POST.json — the address of the X post that is the entry —
// from the repository to /output/POST.json, where the gate reads it.
// The post itself (meme image + text) is the entry; nothing this program writes
// about the post is judged. Node 22, standard library only.
//
// Run locally:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
