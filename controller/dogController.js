// const jwt = require("jsonwebtoken");
// const User = require("./../models/userModel");
// const Dog = require("./../models/dogModel");

// async function asyncCall() {
//   let fetch = await import("node-fetch");
// }
// asyncCall();

// //random image from any breed
// exports.getRandom = async (req, res) => {
//   const response = await fetch("https://dog.ceo/api/breeds/image/random");
//   const data = await response.json();
//   const imageUrl = data.message;
//   res.send(imageUrl);
// };

// //fetches list of images for a given breed
// exports.getBreed = async (req, res) => {
//   const breed = req.params.breed;
//   const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
//   const data = await response.json();
//   const images = data.message;
//   res.send(images);
// };

//create dog and link to owner

// exports.createDog = async (req, res) => {
// let token;
// token = req.headers.authorization.split(" ")[1];
// const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
// const freshUser = await User.findById(decoded.id);
// const breed_name = req.params.breed;
//   const newBreed = new Dog{
//     breed: breed_name,
//     count: 0,
//     ownerId: decoded.id,
//   };
// };
