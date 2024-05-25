require("dotenv").config();
const app = require("./src/app");
const mongoose = require("./src/config/db.js");
const port = process.env.PORT;

mongoose.connection.on("connected", function () {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});

mongoose.connection.on("error", function (err) {
  console.error("Mongoose connection error:", err);
  process.exit(1);
});
