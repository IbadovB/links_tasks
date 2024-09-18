const form = document.querySelector('#regisForm')
form.addEventListener("submit", function (event) {
    event.preventDefault();
    isValid = true

    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const formAlert = document.querySelector(".form-alert")


    if (username === localStorage.getItem("userName") && password === localStorage.getItem("passwordName")) {
        window.location.href = "dashboard.html"
    }


    if (username !== localStorage.getItem("userName")) {
      
        document.querySelector('#username + .form-alert').style.display = 'block'
        document.querySelector('#username').style.border = '1px solid red'
    } else {
        document.querySelector('#username + .form-alert').style.display = 'none'
        document.querySelector('#username').style.border = '1px solid green'
    }

    if (password !== localStorage.getItem("passwordName")) {
      
        document.querySelector('#password + .form-alert').style.display = 'block'
        document.querySelector('#password').style.border = '1px solid red'
    } else {
        document.querySelector('#password + .form-alert').style.display = 'none'
        document.querySelector('#password').style.border = '1px solid green'
    }

})

function remember() {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
}

