const express = require("express");
const app = express();
const port = 3000;
const got = require("got");
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(express.json())

app.get("/", (req, res) => {

  res.json("ok");
  return

});
app.get("*", async (req, res) => {
  console.log(req.originalUrl);

  const { body } = await got.get(
    "https://www.swiggy.com/dapi" + `${req.originalUrl}`,
    {
      headers: {
        __fetch_req__: "true",
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9,gu;q=0.8,ta;q=0.7",
        "content-type": "application/json",
        "user-agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
      },

      referrer: "https://www.swiggy.com/",
      referrerPolicy: "strict-origin-when-cross-origin",
      mode: "cors",
      responseType: "json",
    }
  );
  // console.log(body);
  res.json(body);
  return
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
