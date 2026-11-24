import { mkdirSync, writeFileSync } from "node:fs";

const a = "Tip: if the bar stalls at 99%, don't touch anything — your agent is re-reading your prompt for the fifth time, ";
const b = "hoping it means something else.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", a + b);
