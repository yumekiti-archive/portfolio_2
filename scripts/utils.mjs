import { createWriteStream } from "node:fs";
import { join } from "node:path";
import { readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { readFile, writeFile } from "node:fs/promises";

export const baseDataPath = join(fileURLToPath(import.meta.url), "../../data");
export const generatedDataPath = join(
  fileURLToPath(import.meta.url),
  "../../generated"
);
export const baseImageOutputPath = join(
  fileURLToPath(import.meta.url),
  "../../public/images/external"
);
export const blogPath = join(
  fileURLToPath(import.meta.url),
  "../../src/content/blog"
);

export async function readData(filename, original = true) {
  const data = await readFile(
    join(original ? baseDataPath : generatedDataPath, `${filename}.json`),
    "utf-8"
  );

  return JSON.parse(data);
}

export async function generateData(filename, data) {
  await writeFile(
    join(generatedDataPath, `${filename}.json`),
    JSON.stringify(data, null, 2),
    "utf-8"
  );
}

export function sortItems(items) {
  return items.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export async function downloadImage(url) {
  if (!url) {
    return "";
  }

  const ext = url.includes(".jpg")
    ? ".jpg"
    : url.includes(".jpeg")
    ? ".jpg"
    : url.includes(".png")
    ? ".png"
    : url.includes(".webp")
    ? ".webp"
    : url.includes(".gif")
    ? ".gif"
    : ".png";
  const filename = `${Buffer.from(url.replace(/https?:\/\//, ""))
    .toString("base64")
    .replace("/", "_")
    .slice(0, 90)}${ext}`;
  const fullPath = `/images/external/${filename}`;
  const assets = await readdir(baseImageOutputPath);

  if (assets.includes(filename)) {
    return fullPath;
  }

  const response = await fetch(url);
  const blob = await response.blob();
  const arrayBuffer = await blob.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  createWriteStream(join(baseImageOutputPath, filename)).write(buffer);

  return fullPath;
}
