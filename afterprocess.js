import { writeData } from "https://js.sabae.cc/writeData.js";

const list = JSON.parse(await Deno.readTextFile("kigyoka-koshien-2022-aicomment.json"));

for (const d of list) {
  d.aicomment = d.aicomment.replace("\n\nの利益の取得。", "").trim();
}
await writeData("kigyoka-koshien-2022-aicomment", list);
