const list = JSON.parse(await Deno.readTextFile("kigyoka-koshien-2022-aicomment.json"));

const title = "起業家甲子園2022 ChatGPTくんによるアドバイス";

const doctype = `<!DOCTYPE html><html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width">`;
const footer = "<hr><a href=http://github.com/code4fukui/kigyoka-koshien-2022/>src on GitHub</a></body></html>";

const style = `<style>
body {
  font-family: sans-serif;
}
img {
  width: 100%;
}
.abstract, .aicomment {
  white-space: pre-wrap;
  margin-bottom: 1em;
}
</style>`;

const header = doctype + style;

const d2html = (d, head = "h1") => {
  const ss = [];
  ss.push(`<${head}>${d.title}</${head}>`);
  ss.push(`<img src=${d.img}><br>`);
  ss.push(`チーム: ${d.teamname} （${d.school} / ${d.areacontest} - ${d.area}）<br>`);
  ss.push(`ICTメンター: ${d.mentor}<br>`);
  ss.push(`<div class=abstract>`);
  ss.push(`概要:<br>${d.abstract}`);
  ss.push(`</div><div class=aicomment>`);
  ss.push(`ChatGPTくんによるアドバイス<br>${d.aicomment}`);
  ss.push(`</div>`);
  return ss.join("\n");
};

const ss = [];
ss.push(header);
ss.push(`<title>${title}</title></head><body><h1>${title}</h1>`);
ss.push(style);
for (const d of list) {
  ss.push(d2html(d, "h2"));
}
ss.push(footer);
await Deno.writeTextFile("all.html", ss.join("\n"));

await Deno.mkdir("docs", { recursive: true });
const html = [];
html.push(header);
html.push(`<title>${title}</title></head><body><h1>${title}</h1>`);
for (const d of list) {
  const ss = [];
  ss.push(header);
  ss.push(`<title>${d.title}</title></head><body>`);
  ss.push(d2html(d, "h1"));
  ss.push(footer);
  const name = d.img.substring(d.img.lastIndexOf("/") + 1, d.img.lastIndexOf(".")) + "html";
  await Deno.writeTextFile(`docs/${name}.html`, ss.join("\n"));
  html.push(`<a href=${name}.html>${d.title} - ${d.teamname}</a><br>`);
}
html.push(footer);
await Deno.writeTextFile("docs/index.html", html.join("\n"));
