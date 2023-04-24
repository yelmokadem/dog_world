const { count } = require("./../models/worldModel");
const WorldDog = require("./../models/worldModel");
const catchAsync = require("./../utils/catchAsync");
async function asyncCall() {
  let fetch = await import("node-fetch");
}
asyncCall();
exports.getRank = catchAsync(async (req, res) => {
  const breed_name = req.params.breed;
  const list = await WorldDog.find({ count: { $gte: 1 } })
    .sort({ count: "desc" })
    .select("breed");
  const searchTerm = breed_name;
  let index = list.findIndex((obj) => obj.breed === searchTerm);
  if (index !== -1) {
    index = index + 1;
  } else {
    console.log(
      `The object with name '${searchTerm}' was not found in the list.`
    );
  }
  res.status(200).json({
    status: "success",
    data: index,
  });
});

exports.getBreed = catchAsync(async (req, res) => {
  const breed_name = req.params.breed;
  const breed = await WorldDog.findOne({ breed: breed_name });
  if (!breed) {
    {
      return res
        .status(400)
        .json({ message: `${breed_name} doesn't exist in breed list` });
    }
  }
  res.status(200).json({
    status: "success",
    data: {
      breed,
      count,
    },
  });
});

exports.incBreed = catchAsync(async (req, res) => {
  const breed_name = req.params.breed;
  const breed = await WorldDog.findOne({ breed: breed_name });
  if (!breed) {
    {
      return res
        .status(400)
        .json({ message: `${breed_name} doesn't exist in breed list` });
    }
  }
  dog = await WorldDog.updateOne({ breed: breed_name }, { $inc: { count: 1 } });
  res.status(200).json({
    status: "success",
  });
});

exports.addBreed = catchAsync(async (req, res) => {
  const breed_name = req.params.breed;
  const existingObject = await WorldDog.findOne({ breed: breed_name });
  if (existingObject) return; //null;
  const newBreed = new WorldDog({
    breed: breed_name,
    count: 0,
  });
  const savedBreed = await newBreed.save();
  res.status(201).json(savedBreed);
});
exports.topDog = catchAsync(async (req, res) => {
  const list = await WorldDog.find({ count: { $gte: 1 } })
    .sort({ count: "desc" })
    .select("breed");
  const topDog = list[0];
  res.status(200).json({
    status: "success",
    data: topDog,
  });
});

exports.fiveDog = catchAsync(async (req, res) => {
  const list = await WorldDog.find({ count: { $gte: 1 } })
    .sort({ count: "desc" })
    .select("breed");
  const fiveDog = list[9];
  res.status(200).json({
    status: "success",
    data: fiveDog,
  });
});
