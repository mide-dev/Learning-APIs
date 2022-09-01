"use strict";

const form = document.querySelector(".form");
const colorPicker = document.querySelector(".color-picker");
const colorMode = document.getElementById("mode");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorPicker.value.slice(
      1
    )}&mode=${colorMode.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < 5; i++) {
        document.getElementById(`color-${i}`).style.backgroundColor =
          data.colors[i].hex.value;

        document.getElementById(`hex-${i}`).innerHTML =
          data.colors[i].hex.value;

        document.getElementById(`hex-${i}`).style.color =
          data.colors[i].hex.value;
      }
    });
});
