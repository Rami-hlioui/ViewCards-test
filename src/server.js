const app = require("./app");
const mongoose = require("mongoose");
const port = 8000;
const cors = "cors";
mongoose
  .connect("mongodb://localhost:27017/ramibd")
  .then(() => console.log("DB connected"));

app.listen(port, () => {
  console.log(`App running on ${port}...`);
});
