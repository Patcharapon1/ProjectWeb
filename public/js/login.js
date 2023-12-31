window.onload = pageLoad;

function pageLoad() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.get("error") == 1) {
        if (window.location.href.split('/').pop() == "register.html") {
            document.getElementById('errordisplay').innerHTML = "Registration Error!";
        } else {
            document.getElementById('errordisplay').innerHTML = "Username or password does not match.";
        }
    }
    else if(urlParams.get("error") == 2)
    {
        if (window.location.href.split('/').pop() == "register.html") {
            document.getElementById('errordisplay').innerHTML = "Registration Error!";
        } else {
            document.getElementById('errordisplay').innerHTML = "Username is already taken.";
        }
    }

    const registerButton = document.querySelector('.register-button');
    if (registerButton) {
        registerButton.addEventListener('click', function () {
            slideToPage('register.html');
        });
    }
}

