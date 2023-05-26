import { readData, generateData } from "./utils.mjs";

const data = await readData("jobs");

await generateData("jobs", data);