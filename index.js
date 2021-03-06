const express = require("express");
const got = require("got");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/api", (req, res) => {
  res.send("ok");
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
});

// TO DO have to do post put delete patch etc....


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
