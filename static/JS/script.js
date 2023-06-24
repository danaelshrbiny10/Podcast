'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar variables
 */

const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navToggleBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });

}



/**
 * header sticky
 */

const header = document.querySelector("[data-header]");

let lastScrollPosition = 0;

window.addEventListener("scroll", function () {

  let scrollPosition = window.pageYOffset;

  if (scrollPosition > lastScrollPosition) {
    header.classList.remove("active");
  } else {
    header.classList.add("active");
  }

  lastScrollPosition = scrollPosition <= 0 ? 0 : scrollPosition;

});



/**
 * form validation
 */

const input = document.querySelector("[data-input]");
const submitBtn = document.querySelector("[data-submit]");

input.addEventListener("input", function () {

  if (input.checkValidity()) {
    submitBtn.removeAttribute("disabled");
  } else {
    submitBtn.setAttribute("disabled", "");
  }

});



/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 200 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});
document.addEventListener("DOMContentLoaded",()=>{
  const login=document.querySelector("#login")
  const createaccoun=document.querySelector("#createaccount")

  login.addEventListener("submit", e => {
    e.preventDefault();

    // Perform your AJAX/Fetch login

    setFormMessage(login, "error", "Invalid username/password combination");
});

document.querySelectorAll(".form__input").forEach(inputElement => {
    inputElement.addEventListener("blur", e => {
        if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
            setInputError(inputElement, "Username must be at least 10 characters in length");
        }
    });

    inputElement.addEventListener("input", e => {
        clearInputError(inputElement);
    });
});
  document.querySelector("#linkCreateAccount").addEventListener("click",()=>{
    
  })
  
})
function setFormMessage(forElement ,type, message){
// function setFormMessage(forElement ,type, message){
  const messageElement = forElement.querySelector(".form__message")
  messageElement.textContent= message
  messageElement.classList.remove("form__message-success","form__message-error")
  messageElement.classList.add("form__message-${type}")

  // setFormMessage(login,"success",'you are logged in')

}
function setInputError(inputElement, message) {
  inputElement.classList.add("form__input--error");
  inputElement.parentElement.querySelector(".form__input-errormess").textContent = message;
}
function clearInputError(inputElement) {
  inputElement.classList.remove("form__input--error");
  inputElement.parentElement.querySelector(".form__input-errormess").textContent = "";
}