import { writeData } from "https://js.sabae.cc/writeData.js";

const list = JSON.parse(await Deno.readTextFile("kigyoka-koshien-2022-ai.json"));
const list0 = JSON.parse(await Deno.readTextFile("kigyoka-koshien-2022.json"));

for (const d of list) {
  d.aicomment = d.aicomment.replace("\n\nの利益の取得。", "").trim();
  const d0 = list0.find(d0 => d0.title == d.title);
  d.img = "https://code4fukui.github.io/kigyoka-koshien-2022/img/" + d0.img;
}
await writeData("kigyoka-koshien-2022-aicomment", list);
