const DogWorld = require("../models/worldModel");
const catchAsync = require("../utils/catchAsync");

exports.getOverview = catchAsync(async (req, res, next) => {
  const breeds = await DogWorld.find({ count: { $gte: 1 } }).sort({
    count: "desc",
  });
  //getting breeds from api into list
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();
  const list = data.message;
  const breedArr = Object.keys(list).map((key) => String(key));
  //breedArr.unshift("select breed");
  res.status(200).render("overview", {
    myArray: breedArr,
    breeds,
  });
});

exports.getBreed = async (req, res) => {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();
  const list = data.message;
  const breedArr = Object.keys(list).map((key) => String(key));
  const breed = await DogWorld.findOne({ breed: req.params.breed });
  const dogsOrdered = await DogWorld.find({ count: { $gte: 1 } })
    .sort({ count: "desc" })
    .select("breed");
  const searchTerm = req.params.breed;
  let index = dogsOrdered.findIndex((obj) => obj.breed === searchTerm);
  index = index + 1;

  //breedArr.unshift("select breed");
  res.status(200).render("breed", {
    //title: "DogNeech",
    myArray: breedArr,
    breed,
    index,
  });
};
