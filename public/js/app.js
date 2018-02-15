window.addEventListener('load', function () {
  var icon = document.getElementById('icon');
  var temperature = document.getElementById('temperature');
  var wind = document.getElementById('wind');
  var humidity = document.getElementById('humidity');
  var uv = document.getElementById('uv');
  var pressure = document.getElementById('pressure');
  var btnWeek = document.getElementById('week');

  findLocation();

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

        //   $.ajax({
        //     url: proxy + apiLinkDS,
        //     success: function(data) { // -> llamar a la función showWeather
        //       console.log('hola'); 
        //     }
        //   });
      });
    } else {
      console.log('error');
    }
  }

  function showWeather(data) {
    // trabajar la data
  }

  btnWeek.addEventListener('click', function() {
    window.location.href = 'views/week.html';
  });
});