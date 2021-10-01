import express = require("express");
const app = express();
import Gtts = require("../lib/gTTS");

app.get("/hear", function (req, res) {
  const text = String(req.query.text);
  const lang = String(req.query.lang);

  const gtts = new Gtts(text, lang);
  gtts.stream().pipe(res);
});

app.listen(3000, function () {
  console.log(
    "Open url to hear Hallelujah http://localhost:3000/hear?lang=en&text=Hallelujah"
  );
});
