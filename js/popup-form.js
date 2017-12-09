var link = document.querySelector(".contacts__btn");
var mapLink = document.querySelector(".contacts__map");
var popup = document.querySelector(".feedback");
var mapPopup = document.querySelector(".map");
var close = document.querySelector(".feedback__close");
var mapClose = document.querySelector(".map__close");
var form = popup.querySelector(".feedback__form");
var userName = popup.querySelector("[name=username]");
var email = popup.querySelector("[name=useremail]");
var storage = localStorage.getItem("userName");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("feedback--show");
  if (storage) {
    userName.value = storage;
    email.focus();
    } else {
    userName.focus();
  }
});

mapLink.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.add("map--show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
    popup.classList.remove("feedback--show");
    popup.classList.remove("feedback--error");
});

mapClose.addEventListener("click", function(event) {
  event.preventDefault();
    mapPopup.classList.remove("map--show");
});

form.addEventListener("submit", function(event) {
  if (!userName.value || !email.value) {
    event.preventDefault();
    popup.classList.remove("feedback--error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("feedback--error");
  } else {
    localStorage.setItem("username", userName.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("feedback--show")) {
      popup.classList.remove("feedback--show");
      popup.classList.remove("feedback--error");
    }
    if (mapPopup.classList.contains("map--show")) {
        mapPopup.classList.remove("map--show");
    }
  }
});
