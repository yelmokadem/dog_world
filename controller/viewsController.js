const DogWorld = require("../models/worldModel");
const catchAsync = require("../utils/catchAsync");

exports.getOverview = catchAsync(async (req, res, next) => {
  //getting breeds from api into list
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();
  const list = data.message;
  const breedArr = Object.keys(list).map((key) => String(key));
  res.status(200).render("overview", {
    myArray: breedArr,
    // breeds,
  });
});

exports.getBreed = catchAsync(async (req, res) => {
  let breed = await DogWorld.findOne({ breed: req.params.breed });
  const dogsOrdered = await DogWorld.find({ count: { $gte: 1 } })
    .sort({ count: "desc" })
    .select("breed");
  const searchTerm = req.params.breed;
  let index = dogsOrdered.findIndex((obj) => obj.breed === searchTerm);
  index = index + 1;
  const response = await fetch(
    `https://dog.ceo/api/breed/${req.params.breed}/images/random`
  );
  const data = await response.json();
  let imageUrl = data.message;
  if (!breed) {
    breed = new DogWorld({
      breed: req.params.breed,
      count: 0,
    });
    index = 0;
  }
  res.status(200).render("breed", {
    breed,
    index,
    imageUrl,
  });
});

exports.getLeaderboard = catchAsync(async (req, res) => {
  const dogsOrdered = await DogWorld.find({ count: { $gte: 1 } }).sort({
    count: "desc",
  });
  const dogsOrder = dogsOrdered.map((obj, index) => ({
    ...obj,
    breed: obj.breed,
    position: index + 1,
    count: obj.count,
  }));
  console.log(dogsOrder);
  res.status(200).render("leaderboard", {
    dogsOrder,
  });
});
