const zegar = document.getElementById("zegar");

setInterval(function() {
  var data = new Date();
  var czas = data.toLocaleTimeString();
  zegar.innerHTML = czas;
}, 100)