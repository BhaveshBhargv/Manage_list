var error = 0;
function validateEmail(){
    var email = document.getElementById("email").value;
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(emailFormat)){
        document.getElementById("email").style.borderColor = '';
        document.getElementById("email_error").innerHTML = "";
        error = 0;
        return true;
    }else {
        document.getElementById("email").style.borderColor = 'red';
        document.getElementById("email_error").innerHTML = "Please enter valid email";
        error++
        return false;
    }
}  
function matchPassword(){
    var p1 = document.getElementById("password").value;
    var p2 = document.getElementById("rePassword").value;
    if (p1 == p2){
        document.getElementById('password').style.borderColor = '';
        document.getElementById('rePassword').style.borderColor = '';
        document.getElementById('not_match').innerHTML = "";
        error = 0;
        return true;
    }
    else{
        document.getElementById('password').style.borderColor = 'red';
        document.getElementById('rePassword').style.borderColor = 'red';
        document.getElementById('not_match').innerHTML = "Passsword do not match";
        error++;
        return false;
    }
} 
function register(){
    if (error == 0){
        var username = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        window.alert('Your name: '+username+'\n'+'Your Email: '+email);
        return true;
    }else {
        return false;
    }
}
