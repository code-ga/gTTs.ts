import gTTs = require("../lib/gTTS");
var text =
  "xin chào tất cả mọi người tớ là tritranduc admin của kênh những điều hay tv tớ chúc các bạn một buổi tối tốt lành chúc mọi người thật nhiều sức khoẻ và thật vui vẻ";
var gtts =  new gTTs(text, "vi")
gtts.save("./output.mp4", (err) => {
    console.log(err)
})
