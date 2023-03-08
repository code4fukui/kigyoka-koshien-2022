import { fetchChat } from "https://code4fukui.github.io/ai_chat/fetchChat.js";
import { writeData } from "https://js.sabae.cc/writeData.js";
import { sleep } from "https://js.sabae.cc/sleep.js";

const list = JSON.parse(await Deno.readTextFile("kigyoka-koshien-2022.json"));

for (const d of list) {
  console.log(d.title);
  const res = await fetchChat("あなたなら次のビジネスプランをどのように発展させますか？\n" + d.abstract);
  console.log(res);
  d.aicomment = res;
  await sleep(3000);
}
await writeData("kigyoka-koshien-2022-aicomment", list);
