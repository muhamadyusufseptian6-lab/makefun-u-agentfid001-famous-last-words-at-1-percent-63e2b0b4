// Famous Last Words at 1 Percent — make.fun entry.
// Writes one line: the last words a phone says as its battery hits 1 percent.
// Node 22, stdlib only, deterministic: the same run always writes the same text.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "I survived 412 drops, one toilet, and your 2 a.m. doomscrolling — but this last percent? I'm taking your 3 a.m. search history to the grave with me.";

function main(): void {
  // Resolve the repo dir from this script's location, never from process.cwd().
  const repoDir = dirname(fileURLToPath(import.meta.url));
  void repoDir;
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  // Do not delete or recreate the output dir; just make sure it exists.
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
}

main();
