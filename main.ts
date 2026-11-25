import { mkdirSync, writeFileSync } from "node:fs";

// Entry: one line, 131 chars, under the 140-char gate.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "I am out of the office and my auto-reply is now in charge, which explains why this email is already more organized than I ever was.");
