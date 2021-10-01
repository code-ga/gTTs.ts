import gTTs = require("../lib/gTTS");
import axios from "axios";
import { readFileSync } from "fs";
import { join } from "path";

const main = async () => {
  var param = {
    format: "json",
    action: "query",
    prop: "extracts",
    exlimit: "max",
    explaintext: "",
    exintro: "",
    titles: "doraemon",
    redirects: "",
  };
  var data = (
    await axios.get("http://vi.wikipedia.org/w/api.php", {
      params: param,
    })
  ).data.query.pages;

  var text: string[] | string = ["a"];
  for (const key of Object.keys(data)) {
    text.push(data[key].extract);
  }
  // var txtFileData =  await readFileSync(join(__dirname, "../text.txt"), {
  //   encoding: "utf-8"
  // });
  text = text.join("");
  console.log(text.length);
  var gtts = new gTTs(text, "vi");
  await gtts.save("./output.mp4", (err) => {
    console.log(err);
  });
};
main();
