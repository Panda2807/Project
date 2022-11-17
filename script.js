//login pop up form 
var btn = document.querySelector('#log')
var btn2 = document.querySelector('#chat')
var LoginForm = document.querySelector(".modal");
var ChatForm = document.querySelector(".modal.chat");


//showing login form
btn.onclick = function () {
    LoginForm.classList.add('active')
}
btn2.onclick = function () {
    ChatForm.classList.add('active')
}
document.querySelector("#close1").onclick = () =>{
    LoginForm.classList.remove('active')
}
document.querySelector('#close2').onclick = () =>{
    ChatForm.classList.remove('active')
}


//hidding login form
LoginForm.addEventListener("mousedown", function(event) {
    if(!event.target.closest('.modal-window'))
        this.classList.remove('active');
}, false)

ChatForm.addEventListener("mousedown", function(event) {
    if(!event.target.closest('.modal-window.chat'))
        this.classList.remove('active');
}, false)