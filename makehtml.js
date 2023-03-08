const list = JSON.parse(await Deno.readTextFile("kigyoka-koshien-2022-aicomment.json"));

const title = "起業家甲子園2022 ChatGPTくんによるアドバイス";

const ss = [];
ss.push(`<!DOCTYPE html><html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width">`);
ss.push(`<title>${title}</title></head><body><h1>${title}</h1>`);
ss.push(`<style>
body {
  font-family: sans-serif;
}
img {
  width: 100%;
}
.abstract, .aicomment {
  white-space: pre-wrap;
}
</style>`);
for (const d of list) {
  ss.push(`<h2>${d.title}</h2>`);
  ss.push(`<img src=${d.img}><br>チーム: ${d.teamname} （${d.school} / ${d.areacontest} - ${d.area}）`);
  ss.push(`<div class=abstract>`);
  ss.push(`概要:<br>${d.abstract}`);
  ss.push(`</div><div class=aicomment>`);
  ss.push(`ChatGPTくんによるアドバイス<br>${d.aicomment}`);
  ss.push(`</div>`);
}
ss.push("<hr><a href=http://github.com/code4fukui/kigyoka-koshien-2022/>src on GitHub</a>")
ss.push("</body></html>");
await Deno.writeTextFile("index.html", ss.join("\n"));
