window.addEventListener('load', function() {
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
      });
    } else {
      console.log('error');
    }
  }
});
