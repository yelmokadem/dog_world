const submitButton = document.getElementById("submitButton");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const pathname = window.location.pathname;
  const newPathname = pathname.slice(1);
  fetch(`/api/world/${pathname}`, {
    method: "PATCH",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });

  window.location.href = newPathname;
});
