function initMap() {
  var point = {
    lat: -11.976176,
    lng: -77.083082
  };

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: point
  });

  var marker = new google.maps.Marker({
    position: point,
    map: map
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      marker.setPosition(pos);
      map.setCenter(pos);
      console.log(pos);
    }, function() {
      handleLocationError(true, marker, map.getCenter());
    });
  } else {
    handleLocationError(false, marker, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
};