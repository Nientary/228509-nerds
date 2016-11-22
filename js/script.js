var button = document.querySelector(".contact-info .btn");
var popup = document.querySelector(".modal-content");
var overlay = document.querySelector(".overlay");
var close = popup.querySelector(".modal-content-close");
var username = popup.querySelector("input[name=name]");
var email = popup.querySelector("input[name=email]");
var textarea = popup.querySelector("textarea");
var form = popup.querySelector("form");
          
button.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    overlay.classList.add("overlay-show");
    username.focus();
});
          
close.addEventListener("click", function (event) {
    popup.classList.remove("modal-content-show");
    overlay.classList.remove("overlay-show");
    username.classList.remove("invalid");
    email.classList.remove("invalid");
    textarea.classList.remove("invalid");
});

overlay.addEventListener("click", function (event) {
    popup.classList.remove("modal-content-show");
    overlay.classList.remove("overlay-show");
    username.classList.remove("invalid");
    email.classList.remove("invalid");
    textarea.classList.remove("invalid");
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
            overlay.classList.remove("overlay-show");
            username.classList.remove("invalid");
            email.classList.remove("invalid");
            textarea.classList.remove("invalid");
        }
    }
});

form.addEventListener("submit", function(event) {
    if (!username.value || !email.value || !textarea.value) {
    event.preventDefault();
        if (!username.value) {
            username.classList.add("invalid");
            }
        if (!email.value) {
            email.classList.add("invalid");
        }
        if (!textarea.value) {
            textarea.classList.add("invalid");
        }
    }
});


username.addEventListener ("keydown", function(event) {
    if (username.value) {
        if (username.classList.contains("invalid")) {
            username.classList.remove("invalid");
        }
    }
});

email.addEventListener ("keydown", function(event) {
    if (email.value) {
        if (email.classList.contains("invalid")) {
            email.classList.remove("invalid");
        }
    }
});

textarea.addEventListener ("keydown", function(event) {
    if (textarea.value) {
        if (textarea.classList.contains("invalid")) {
            textarea.classList.remove("invalid");
        }
    }
});


function initialize() {
  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(59.9388329, 30.3235549),
    scrollwheel: false
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
