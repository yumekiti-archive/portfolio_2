import { readData, generateData } from "./utils.mjs";

const data = await readData("skills");

await generateData("skills", data);