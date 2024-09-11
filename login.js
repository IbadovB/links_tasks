const form = document.querySelector('#regisForm')
form.addEventListener("submit", function (event) {
    event.preventDefault();
    isValid = true

    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;


    if (username === localStorage.getItem("userName") && password === localStorage.getItem("passwordName")) {
         window.location.href = "login-success.html"

    } else {
        isValid = false
        alert('Username or password incorrect. Please try again.');
    }
})

function remember () {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
}

