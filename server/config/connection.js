const mongoose = require("mongoose");
console.log(
  "mongo connection string",
  process.env.MONGODB_URI || "mongodb://localhost:27017/googlebooks"
);
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/googlebooks"
);

module.exports = mongoose.connection;
