const breedSelect = document.querySelector("#breeds");
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
