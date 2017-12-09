var mapLink = document.querySelector(".contacts__map");
var mapPopup = document.querySelector(".popup-map");
var mapClose = document.querySelector(".popup-map__close");
var feedbackLink = document.querySelector(".contacts__btn");
var feedbackPopup = document.querySelector(".popup-feedback");
var feedbackClose = document.querySelector(".popup-feedback__close");

var feedbackForm = feedbackPopup.querySelector(".popup-feedback__form");
var userName = feedbackPopup.querySelector("[name=username]");
var email = feedbackPopup.querySelector("[name=useremail]");


mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("popup-map--show");
});

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("popup-map--show");
});


feedbackLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("popup-feedback--show");
});

feedbackClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("popup-feedback--show");
  feedbackPopup.classList.remove("popup-feedback--error");
});

feedbackForm.addEventListener("submit", function(evt) {
  if (!userName.value || !email.value) {
    evt.preventDefault();
        feedbackPopup.classList.add("popup-feedback--error");
  }
});
