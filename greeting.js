/*
const loginForm = document.getElementById("login-form")
const loginInput = loginForm.querySelector("input"); // we don't need search from document
const loginButton = loginForm.querySelector("button");
loginButton.addEventListener("click", handleButtonClick);   

function handleLinkClick(event) {
    event.preventDefault();
    alert("clicked!");
}
link.addEventListener("click", handleLinkClick);
<a href="https://nomadcoder.co">Go to courses</a>

*/

const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
//const loginButton = document.querySelector("#login-form button");  
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(evnet) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(username);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username); 
    /*
    if (username === "") {
        alert("Please write your name!");
    } else if(username.length > 15) {
        alert("your name is too long");
    } 
    */
    
}

function paintGreetings(username) {
    greeting.innerText = "Hello, " + username; // `hello ${username}`; 
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);

}




