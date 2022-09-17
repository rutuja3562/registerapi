const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    brand: { type: String, required: true },
    type: { type: String, required: true },
    year: { type: String, required: true },
    kms: { type: String, required: true },
    description: { type: String, required: true },
    Price: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Item = mongoose.model("item", itemSchema);

module.exports = Item;
