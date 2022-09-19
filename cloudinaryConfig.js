require("dotenv").config();

const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "db4c4bbfx",
  api_key: "576345853224928",
  api_secret: "bZDfi2NjQGdgWkClSmSB3Qi_1L0",
});

module.exports = cloudinary;
