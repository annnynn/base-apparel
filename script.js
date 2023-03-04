const form = document.getElementById("form");
const email = document.getElementById("email");
const error = document.getElementById("error");
const submit = document.getElementById("submitArrow");


document.getElementById("submitArrow").addEventListener('click', validation);
document.getElementById("email").addEventListener('click', isEmpty);

function validation() {
    let regx = /^([a-z 0-9\.-]+)@([a-z0-9]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
   
    if (regx.test(email.value)) {
        document.getElementById("error").style.visibility = "hidden";
        document.getElementById("email").style.border = "1px solid #CE9898";
        document.getElementById("email").style.backgroundImage = "none";
    } else{
        document.getElementById("error").style.visibility = "visible";
        document.getElementById("error").innerText = "Please provide a valid email"
        document.getElementById("error").style.color = "#F96464";
        document.getElementById("email").style.border = "1px solid #F96464";
        document.getElementById("email").style.backgroundImage = "url(/images/icon-error.svg)";
    }
}

function isEmpty() {
    if (email.value == "") {
        document.getElementById("email").style.backgroundImage = "none";
        document.getElementById("email").style.border = "1px solid #CE9898";
        document.getElementById("error").style.visibility = "hidden";
    }
}