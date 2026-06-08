const shortUrlModel = require("../models/shortUrlModel");
const shortid = require("shortid");

async function shortUrl(req, res) {
  const { fullUrl } = req.body;
  try {
    const urlExist = await shortUrlModel.find({ fullLink: fullUrl });
    if (urlExist.length > 0) {
      // console.log("find:", urlExist);
      return res.json({ message: "link already exist", data: urlExist[0] });
    }

    const shortCode = await shortid.generate().slice(0, 5);
    const addLink = await shortUrlModel.create({
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
}

async function allUrl(req, res) {
  try {
    const data = await shortUrlModel.find().sort({ _id: -1 });
    res.json(data);
    // console.log(data);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
}

async function deleteUrl(req, res) {
  const linkId = req.params.id;
  try {
    const data = await shortUrlModel.findOneAndDelete({ _id: req.params.id });
    if (data) {
      res.json({ message: "Data Deleted Successfully", data: data });
    } else {
      res.json({ message: "data not found" });
    }
  } catch (error) {
    res.json(error);
  }
}

module.exports = { shortUrl, allUrl, deleteUrl };
