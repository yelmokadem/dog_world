const breedSelect = document.querySelector("#breeds");
const submitButton = document.getElementById("submitButton");
const btn = document.querySelector(".btn");
breedSelect.addEventListener("change", (event) => {
  const selectedBreed = event.target.value;
  fetch(`/api/world/${selectedBreed}`, {
    method: "POST",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
  window.location.href = selectedBreed;
});

// submitButton.addEventListener("click", () => {
//   //execute inc breed
//   const inputText = document.getElementById("breeds").value;
//   fetch(`/api/world/${inputText}`, {
//     method: "PATCH",
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
//   window.location.href = `/${inputText}`;
//   //use inputText to open breed slug
// });
btn.addEventListener("click", () => {
  const inputText = document.getElementById("breeds").value;
  fetch(`/api/world/${inputText}`, {
    method: "PATCH",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
});
// function redirectTo(url) {
//   window.location.href = url;
// }
