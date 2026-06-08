const app = require("./app");
const connectToDB = require("./config/db");

connectToDB();

app.listen(3001, () => {
  console.log("Running");
});
