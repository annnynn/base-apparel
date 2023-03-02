const form = document.getElementById("form");
const email = document.getElementById("email");
const error = document.getElementById("error");
const submit = document.getElementById("submit");



function validateFunction(){

    
document.getElementById('email').addEventListener('click', validateFunction);

    let regx = /^([a-z 0-9\.-]+)@([a-z0-9]+).([a-z]{2,8})(.[a-z]{2,8})?$/;

    if(regx.test(email.value)){


    }
    

    document.getElementById("email").addEventListener("click", isEmpty);
    function isEmpty(){
        if(email.value == ""){
            document.getElementById("error").style.visibility = "visible";
            document.getElementById("error").style.color="red";
        }
    }
}

