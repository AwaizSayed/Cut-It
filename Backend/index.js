const app = require("./src/app");
const connectToDB = require("./src/config/db");

connectToDB();

app.listen(3001, () => {
  console.log("Running");
});
