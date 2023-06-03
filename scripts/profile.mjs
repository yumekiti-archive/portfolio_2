import { readData, generateData } from "./utils.mjs";

const data = await readData("profile");

await generateData("profile", data);