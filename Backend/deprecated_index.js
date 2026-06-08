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

app.post("/short-url/short-it", async (req, res) => {
  const { fullUrl } = req.body;
  try {
    const urlExist = await Url.find({ fullLink: fullUrl });
    if (urlExist.length > 0) {
      // console.log("find:", urlExist);
      return res.json({ message: "link already exist", data: urlExist[0] });
    }

    const shortCode = await shortid.generate().slice(0, 5);
    const addLink = await Url.create({
      fullLink: fullUrl,
      shortLink: shortCode,
    });
    if (addLink) {
      // console.log(addLink);
      res.json({ message: "Data Added Successfully", data: shortCode });
    }
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

app.get("/short-url/all-url", async (req, res) => {
  try {
    const data = await Url.find().sort({ _id: -1 });
    res.json(data);
    // console.log(data);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

app.delete("/short-url/delete-url/:id", async (req, res) => {
  const linkId = req.params.id;
  try {
    const data = await Url.findOneAndDelete({ _id: req.params.id });
    if (data) {
      res.json(data);
    } else {
      res.json({ message: "data not found" });
    }
  } catch (error) {
    res.json(error);
  }
});

app.listen(3001, () => {
  console.log("Running");
});

///---Bin---
// let watch;
//   await Url.findOne({ fullLink: fullUrl }).then((res) => {
//     watch = res;
//   });
//   if (watch) {
//     console.log(watch);
//     return res.json(watch.shortLink);
//   }
/* 


app.get("/:shortcode", async (req, res) => {
  const url = await Url.findOne({ shortLink: req.params.shortcode });
  if (!url) {
    res.status(404).send("URL not found");
  }
  res.redirect(url.fullLink);
});

*/
