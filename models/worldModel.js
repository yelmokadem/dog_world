const mongoose = require("mongoose");
const slugify = require("slugify");

const worldSchema = new mongoose.Schema({
  breed: {
    type: String,
    required: [true, "need breed name"],
    unique: [true, "Breed already exists"],
  },
  count: { type: Number, default: 0 },
  // slug: String,
});

// worldSchema.pre("save", function (next) {
//   this.slug = slugify(this.breed, { lower: true });
//   next();
// });

// worldSchema.pre("/^find/", function (next) {
//   worldSchema
//     .find({ count: { $gte: 1 } })
//     .sort({ count: "desc" })
//     .select("breed");
// });

const WorldDog = mongoose.model("Dog", worldSchema);

module.exports = WorldDog;
