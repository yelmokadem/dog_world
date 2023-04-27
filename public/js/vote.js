const submitButton = document.getElementById("submitButton");
const btn = document.querySelector(".btn");
let myHeading = document.getElementById("head");
let pic = document.getElementById("pic");

async function fetchData(req, res) {
  console.log("trying to fetch");
  //patch breed
  let pathname = window.location.pathname;
  pathname = pathname.slice(1);
  await fetch(`/api/world/${pathname}`, {
    method: "PATCH",
  });

  //get breed
  const neechy = await fetch(`/api/world/${pathname}`, {
    method: "GET",
  });
  const noochy = await neechy.json();
  let breed = noochy.data.breed;

  // get index
  // const x = await fetch(`/api/world/rank/${pathname}`, {
  //   method: "GET",
  // });
  // const y = await x.json();
  // let index = y.data;

  //get imageURL
  const response = await fetch(
    `https://dog.ceo/api/breed/${pathname}/images/random`
  );
  const data = await response.json();
  let imageUrl = data.message;

  //manipulate DOM
  myHeading.textContent = `${breed.breed} has ${breed.count} votes!`;
  pic.src = imageUrl;
}

btn.addEventListener("click", fetchData);
