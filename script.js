"use strict";

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    // console.log(position.coords.latitude, position.coords.longitude);
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    // plug lat, lng into the weather api
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1424e32e84c17f8b0642cec2ee9cbf02`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  });
}
