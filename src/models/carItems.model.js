const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    brand: { type: String },
    type: { type: String },
    year: { type: String },
    kms: { type: String },
    description: { type: String },
    Price: { type: Number },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Item = mongoose.model("item", itemSchema);

module.exports = Item;
