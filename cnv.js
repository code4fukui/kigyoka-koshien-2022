import { writeData } from "https://js.sabae.cc/writeData.js";

const text = await Deno.readTextFile("src/text.txt");
const list = [];
const ss = text.split("\n");
for (let i = 0; i < ss.length; i += 8) {
  /*
  医療診断装置への応用を目指したTlBr放射線センサー
  Human Site
  北海道大学大学院
  テキスト-F920BE16BB2B-1.txt
  北海道
  北海道起業家甲子園2022
  田中
  */
  const names = ["title", "teamname", "school", "content", "area", "areacontest", "mentor"];
  const obj = {};
  for (let j = 0; j < names.length; j++) {
    obj[names[j]] = ss[i + j];
  }
  obj.abstract = (await Deno.readTextFile("src/" + obj.content)).substring(3);
  delete obj.content;
  list.push(obj);  
}
await writeData("kigyoka-koshien-2022", list);

