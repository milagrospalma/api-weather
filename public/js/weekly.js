$(document).ready(function() {
  // declarando variables
  var btnHome = document.getElementById('home-btn');

  // llamando funciones
  findLocation();
  btnHome.addEventListener('click', function() {
    window.location.href = '../index.html';
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
        console.log(apiDarkSky);
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
    console.log(data.daily.data.length);
    for (i = 0; i < data.daily.data.length; i++) {
      console.log(data.daily.data[i]);
      
    }
  }
});