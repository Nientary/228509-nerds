var button = document.querySelector(".contact-info .btn");
var popup = document.querySelector(".modal-content");
var overlay = document.querySelector(".overlay");
var close = popup.querySelector(".modal-content-close");
var username = popup.querySelector("input[name=name]");
          
button.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    overlay.classList.add("overlay-show");
    username.focus();
});
          
close.addEventListener("click", function (event) {
    popup.classList.remove("modal-content-show");
    overlay.classList.remove("overlay-show");
});

overlay.addEventListener("click", function (event) {
    popup.classList.remove("modal-content-show");
    overlay.classList.remove("overlay-show");
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
            overlay.classList.remove("overlay-show");
        }
    }
});

function initialize() {
  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(59.9388329, 30.3235549)
  }
  var map = new google.maps.Map(document.getElementById("map-canvas"),
                                mapOptions);
  var image = "../img/map-marker.png";
  var myLatLng = new google.maps.LatLng(59.9387129, 30.3235549);
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}

google.maps.event.addDomListener(window, "load", initialize);