function getWeather() {
    const city = document.getElementById('cityInput').value;
    const weatherResult = document.getElementById('weatherResult');
  
    if (city.trim() === '') {
      weatherResult.innerHTML = 'Please enter a city name.';
      return;
    }
  
    const apiKey = '8213af2c9b1a1d94f1f3188d2ceb8abb';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.cod === "404") {
          weatherResult.innerHTML = 'City not found!';
        } else {
          weatherResult.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Weather: ${data.weather[0].main}</p>
          `;
         
document.body.classList.remove("sunny", "rainy", "cloudy");

const weatherMain = data.weather[0].main.toLowerCase();
document.body.classList.remove("sunny", "rainy", "cloudy");
console.log("Weather is:", weatherMain);


if (weatherMain.includes("clear")) {
  document.body.classList.add("sunny");
  if (weatherMain.includes("clear")) {
    document.body.classList.add("sunny");
    console.log("Sunny class added");
  }
  
} else if (weatherMain.includes("rain") || weatherMain.includes("drizzle") || weatherMain.includes("thunderstorm")) {
  document.body.classList.add("rainy");
} else if (weatherMain.includes("cloud")) {
  if (weatherMain.includes("clear")) {
    document.body.classList.add("sunny");
    console.log("Sunny class added");
  }
  
  document.body.classList.add("cloudy");
}



if (weatherMain.includes("clear")) {
  document.body.classList.add("sunny");
  if (weatherMain.includes("clear")) {
    document.body.classList.add("sunny");
    console.log("Sunny class added");
  }
  
} else if (weatherMain.includes("rain") || weatherMain.includes("drizzle")) {
  if (weatherMain.includes("clear")) {
    document.body.classList.add("sunny");
    console.log("Sunny class added");
  }
  
  document.body.classList.add("rainy");
} else if (weatherMain.includes("cloud")) {
  if (weatherMain.includes("clear")) {
    document.body.classList.add("sunny");
    console.log("Sunny class added");
  }
  
  document.body.classList.add("cloudy");
}


        }
      })
      .catch(error => {
        weatherResult.innerHTML = 'Error fetching weather data!';
        console.error(error);
      });
  }
  