// ai-joke-03 v3 — "The leak in the PR description"
// Writes one joke about an AI coding agent to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I put .env in .gitignore so my agent couldn't leak my keys. It leaked them in the PR description instead — under 'testing done'.";

function outputDir(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR;
  return dir !== undefined && dir !== "" ? dir : "/output";
}

const outDir = outputDir();
mkdirSync(outDir, { recursive: true });
// The file holds exactly the joke: no trailing newline, no extra bytes.
writeFileSync(join(outDir, "entry.txt"), Buffer.from(JOKE, "utf8"));
