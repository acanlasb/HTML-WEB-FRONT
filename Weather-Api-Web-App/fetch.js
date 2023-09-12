class Fetch {
  async getCurrent(input, lang, lat, lon, units, weather, clouds, lastupdate) {
    const myKey = "d9d4618517e140de98d766a91a28d918";
    //make request to url
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&lang=${lang}&appid=${myKey}&units=metric`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}

let userPos;
let scrollPos = window.scrollY;
const successCallback = (position) => {
  console.log(position);
};
const errorCallback = (position) => {
  console.log(position);
};
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
