import { readData, generateData } from "./utils.mjs";

const data = await readData("works");

await generateData("works", data);