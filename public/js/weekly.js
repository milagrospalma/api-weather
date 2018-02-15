$(document).ready(function() {
  // declarando variables
  var btnHome = document.getElementById('home-btn');
  var monday = document.getElementById('monday');
  var tuesday = document.getElementById('tuesday');
  var wednesday = document.getElementById('wednesday');
  var thursday = document.getElementById('thursday');
  var friday = document.getElementById('friday');
  var saturday = document.getElementById('saturday');
  var sunday = document.getElementById('sunday');

  // llamando funciones
  findLocation();
  btnHome.addEventListener('click', function() {
    window.location.href = '../views/day.html';
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
        var apiDarkSky = `https://api.darksky.net/forecast/830e41c8feba04c962c6384dfe3958ec/${location.lat},${location.lng}?exclude=currently,hourly,flags`;
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
    var week = [monday, tuesday, wednesday, thursday, friday];
    // console.log(data);
    // console.log(data.daily.data.length);
    for (i = 0; i < data.daily.data.length; i++) {
      console.log(data.daily.data[i]);
      var dayObj = data.daily.data;
      // console.log(dayObj.temperatureMax);
      // console.log(dayObj.temperatureMin);
      maxTemp = dayObj.temperatureMax;
      minTemo = dayObj.temperatureMin;

      monday.innerHTML = (`<p class"d-inline>Min Temp: ${dayObj[0].temperatureMin}°</p><p class"d-inline">Max Temp: ${dayObj[0].temperatureMax}°</p>`);
      tuesday.innerHTML = (`<p class"d-inline-block">Min Temp: ${dayObj[1].temperatureMin}°</p><p class"d-inline-block">Max Temp: ${dayObj[1].temperatureMax}°</p>`);
      wednesday.innerHTML = (`<p class"d-inline-block">Min Temp: ${dayObj[2].temperatureMin}°</p><p class"d-inline-block">Max Temp: ${dayObj[2].temperatureMax}°</p>`);
      thursday.innerHTML = (`<p class"d-inline-block">Min Temp: ${dayObj[3].temperatureMin}°</p><p class"d-inline-block">Max Temp: ${dayObj[3].temperatureMax}°</p>`);
      friday.innerHTML = (`<p class"d-inline-block">Min Temp: ${dayObj[4].temperatureMin}°</p><p class"d-inline-block">Max Temp: ${dayObj[4].temperatureMax}°</p>`);
      saturday.innerHTML = (`<p class"d-inline>Min Temp: ${dayObj[5].temperatureMin}°</p><p class"d-inline">Max Temp: ${dayObj[0].temperatureMax}°</p>`);
      sunday.innerHTML = (`<p class"d-inline>Min Temp: ${dayObj[6].temperatureMin}°</p><p class"d-inline">Max Temp: ${dayObj[0].temperatureMax}°</p>`);
    }
  }
});