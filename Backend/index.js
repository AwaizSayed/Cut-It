const express = require("express");
const app = express();
const shortid = require("shortid");
const cors = require("cors");
const mongoose = require("mongoose");
const Url = require("./config/server");
require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then((res) => console.log("database connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("<div><h1>Backend of cut-it</h1></div>");
});
app.post("/shortner", async (req, res) => {
  const { fullUrl } = req.body;
  let watch;
  await Url.findOne({ fullLink: fullUrl }).then((res) => {
    watch = res;
  });
  if (watch) {
    console.log(watch);
    return res.json(watch.shortLink);
  }
  const shortCode = shortid.generate().slice(0, 5);
  await Url.create({ fullLink: fullUrl, shortLink: shortCode }).then((res) =>
    console.log(res),
  );
  res.json(shortCode);
});

app.get("/fulldata", async (req, res) => {
  await Url.find()
    .sort({ _id: -1 })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
  // console.log(data);
});

app.get("/:shortcode", async (req, res) => {
  const url = await Url.findOne({ shortLink: req.params.shortcode });
  if (!url) {
    res.status(404).send("URL not found");
  }
  res.redirect(url.fullLink);
});

app.delete("/delete/:id", async (req, res) => {
  console.log(req.params.id);
  Url.findByIdAndDelete(req.params.id)
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

app.listen(3001, () => {
  console.log("Running");
});
