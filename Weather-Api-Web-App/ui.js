class UI {
  constructor() {
    this.uiContainer = document.getElementById("content");
    this.city;
    this.defaultCity = "Ontario";
  }
  populateUI(data) {
    this.uiContainer.innerHTML = `
      <div class="card mx-auto mt-5" style="width: 50rem;">
      <div class="card-body justify-content-center">
      <h5 class="card-title">${data.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Accurate temperature:
      ${data.main.temp.toFixed(2)}°C
      & Feels like ${data.main.feels_like.toFixed(2)}°C</h6>
      <p class="card-text ">Weather conditions: ${data.weather[0].description
      } </p>
      <p class="card-text ">Atmospheric pressure: ${data.main.pressure} hPa</p>
      <p class="card-text ">Humidity: ${data.main.humidity.toFixed(1)}%</p>
      <p>
      Max Temp of ${data.main.temp_max.toFixed(2)}°C </p>
      <p> Lowest Temp of ${data.main.temp_max.toFixed(2)}°C</p>
      <p> To check the accuracy of the data. Please check it <a href="https://www.accuweather.com/" a target="_blank">here</a>
      </div>
      </div>

`;
  }

  clearUI() {
    uiContainer.innerHTML = "";
  }

  saveToLS(data) {
    localStorage.setItem("city", JSON.stringify(data));
  }

  getFromLS() {
    if (localStorage.getItem("city" == null)) {
      return this.defaultCity;
    } else {
      this.city = JSON.parse(localStorage.getItem("city"));
    }

    return this.city;
  }

  clearLS() {
    localStorage.clear();
  }
}
