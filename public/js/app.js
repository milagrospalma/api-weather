$(document).ready(function() {
  /* Animación splash de intro */
  $(function() {
    setTimeout(function() {
      $('#intro').fadeOut(3000);
    });
    $(location).attr('href', 'views/day.html');
  });
});