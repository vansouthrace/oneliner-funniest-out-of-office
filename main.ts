import fs from 'node:fs';
import path from 'node:path';
const entry = 'I\'m out of the office until Monday. My inbox is a haunted house right now, and I refuse to go back in there.';
const outDir = '/output';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), entry, 'utf8');
