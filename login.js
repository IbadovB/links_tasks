/*const form = document.querySelector('#regisForm')


form.addEventListener("submit", (e) => {
    e.preventDefault()
    const userName = document.querySelector('#userName').value.trim()
    const password = document.querySelector('#password').value.trim()
    const formAlert = document.querySelectorAll('.form-alert')
    isValid = true


    if (document.querySelector("#userName") === localStorage.getItem("userName")) {
        isValid = true
        document.querySelector('#userName + .form-alert').style.display = 'none'
        document.querySelector('#userName').style.border = '1px solid green'
    } else {
        document.querySelector('#userName + .form-alert').style.display = 'block'
        document.querySelector('#userName').style.border = '1px solid red'
    }


    if (document.querySelector("#password") === localStorage.getItem("password")) {
        document.querySelector('#password + .form-alert').style.display = 'none'
        document.querySelector('#password').style.border = '1px solid green'
    } else {
        document.querySelector('#password + .form-alert').style.display = 'block'
        document.querySelector('#password').style.border = '1px solid red'
    }

    if (isValid = true) {
        window.location.href = "login-success.html";
    }
})*/

/* const userName = document.querySelector('#userName').value
const password = document.querySelector('#password').value
const formAlert = document.querySelectorAll('.form-alert')*/

const form = document.querySelector('#regisForm')
form.addEventListener("submit", function(event) {
    event.preventDefault();

    // validate username and password
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    if ('username = localStorage.getItem("userName")' &&  'password = localStorage.getItem("confirmPassword")') {
        isValid=true
        window.location.href = "login-success.html";    
    } else {
        isValid=false 
        alert('Username or password incorrect. Please try again.');
    }
});
/*function submit (){

    if((document.querySelector("#userName") === localStorage.getItem("userName")) && (document.querySelector("#password") === localStorage.getItem("password")) ) {
        window.location.href = "login-success.html";    
    }

}*/