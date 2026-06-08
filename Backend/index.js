const app = require("./src/app");
const connectToDB = require("./src/config/db");

connectToDB();

app.get("/", (req, res) => {
  res.send("<div><h1 style='text-align:center'>Backend of cut-it</h1></div>");
});

app.listen(3001, () => {
  console.log("Running");
});
