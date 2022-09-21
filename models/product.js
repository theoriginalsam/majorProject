const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  disease: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  diseases: {
    type: String,
    required: false,
  },
  image: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
      required: false,
    },
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

module.exports = mongoose.model("Product", productSchema);
