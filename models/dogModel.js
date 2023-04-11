const mongoose = require("mongoose");

const dogSchema = new mongoose.Schema({
  breed: { type: String, required: [true, "need breed name"] },
  count: { type: Number, default: 0 },
  ownerId: { type: Number, required: [true, "need owner"] },
});
const Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog;
