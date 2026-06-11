// const app = require("./src/app");
const connectToDB = require("./src/config/db");
connectToDB();
const express = require("express");
const app = express();
const shortid = require("shortid");
const cors = require("cors");
const dotenv = require("dotenv");
const shortUrlRouter = require("./src/routers/shortUrlRouter");
const shortUrlModel = require("./src/models/shortUrlModel");

dotenv.config();

app.use(cors({ origin: [process.env.NODE_FRONTEND_URL] }));

app.use(express.json());

app.get("/:shortcode", async (req, res) => {
  const url = await shortUrlModel.findOne({ shortLink: req.params.shortcode });
  if (!url) {
    res.status(404).send("URL not found");
  }
  res.redirect(url.fullLink);
});

app.use("/short-url", shortUrlRouter);

app.get("/", (req, res) => {
  res.send("<div><h1 style='text-align:center'>Backend of cut-it</h1></div>");
});

app.listen(3001, () => {
  console.log("Running");
});
