function validateEmail(){
    var email = document.getElementById("email").value;
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(emailFormat)){
        document.getElementById("email").style.borderColor = '';
        document.getElementById("email_error").innerHTML = "";
        return true;
    }else {
        document.getElementById("email").style.borderColor = 'red';
        document.getElementById("email_error").innerHTML = "Please enter valid email";
        return false;
    }
}  
function matchPassword(){
    var p1 = document.getElementById("password").value;
    var p2 = document.getElementById("rePassword").value;
    if (p1 == p2){
        document.getElementById('password').style.borderColor = '';
        document.getElementById('rePassword').style.borderColor = '';
        document.getElementById('not_match').innerHTML = ""
        return true;
    }
    else{
        document.getElementById('password').style.borderColor = 'red';
        document.getElementById('rePassword').style.borderColor = 'red';
        document.getElementById('not_match').innerHTML = "Passsword do not match"
        return false;
    }
} 
function register(){
    var username = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    window.alert('Your name: '+username+'\n'+'Your Email: '+email);
}
