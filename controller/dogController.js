async function asyncCall() {
  let fetch = await import("node-fetch");
}
asyncCall();

//random image from any breed
exports.getRandom = async (req, res) => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  const imageUrl = data.message;
  res.send(imageUrl);
};

//fetches list of images for a given breed
exports.getBreed = async (req, res) => {
  const breed = req.params.breed;
  const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
  const data = await response.json();
  const images = data.message;
  res.send(images);
};
