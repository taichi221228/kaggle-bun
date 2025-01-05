import { writeFileSync } from "node:fs";

console.log("Hello via Bun!");

const response = await fetch(
	"https://www.kaggle.com/api/v1/datasets/download/saurabhshahane/fake-news-classification",
	{
		headers: { "Content-Type": "application/json" },
	},
);

const buffer = await response.arrayBuffer();
const data = new Uint8Array(buffer);

writeFileSync("fake-news-classification.zip", data);
console.log("ZIP file saved!");
