$(document).ready(function() {
  // declarando variables
  var icon = document.getElementById('icon');
  var temperature = document.getElementById('temperature');
  var wind = document.getElementById('wind');
  var humidity = document.getElementById('humidity');
  var uv = document.getElementById('uv');
  var pressure = document.getElementById('pressure');
  var btnWeek = document.getElementById('week');

  // llamando funciones
  findLocation();
  btnWeek.addEventListener('click', function() {
    window.location.href = '../views/week.html';
  });
  

  // creando funciones
  function findLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        console.log(location.lat);
        console.log(location.lng);
        var proxy = 'https://cors-anywhere.herokuapp.com/';
        var apiDarkSky = `https://api.darksky.net/forecast/830e41c8feba04c962c6384dfe3958ec/${location.lat},${location.lng}`;
        // console.log(apiDarkSky);
        $.ajax({
          url: proxy + apiDarkSky,
          success: getWeather
        });
      });
    } else {
      console.log('something went wrong');
    }
  }

  function getWeather(data) {
    // console.log(data);
    // console.log(data.currently.windSpeed);
    var temperatureForecast = (data.currently.temperature).toFixed(2);
    var windForecast = (data.currently.windSpeed).toFixed(2);
    var humidityForecast = (data.currently.humidity * 100).toFixed(0);
    var uvForecast = data.currently.uvIndex;
    var pressureForecast = (data.currently.pressure / 100).toFixed(2);

    temperature.innerHTML = (`<p>${temperatureForecast}°</p>`);
    wind.innerHTML = (`<p>${windForecast} m/h</p>`);
    humidity.innerHTML = (`<p>${humidityForecast}%</p>`);
    uv.innerHTML = (`<p>${uvForecast}</p>`);
    pressure.innerHTML = (`<p>${pressureForecast}%</p>`);
  };
});

