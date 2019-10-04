function register() {
    var error = 0;
    var a = document.register_form.name.value;
    if ( a == "") {
        error++;
        document.getElementById('name_error').innerHTML = 'Please enter your name';
        document.getElementById('name').style.borderColor = 'red';
    }
    var b = document.register_form.email.value;
    if ( b == "") {
        error++;
        document.getElementById('email_error').innerHTML = 'Please enter your email';
        document.getElementById('email').style.borderColor = 'red';
    }
    var c = document.register_form.password.value;
    if ( c == "") {
        error++;
        document.getElementById('password_error').innerHTML = 'Please enter your password';
        document.getElementById('password').style.borderColor = 'red';
    }
    var d = document.register_form.rePassword.value;
    if ( d == "") {
        error++;
        document.getElementById('repassword_error').innerHTML = 'Please re-enter your password';
        document.getElementById('rePassword').style.borderColor = 'red';
    }
    if (d != c){
        error++;
        document.getElementById('repassword_error').innerHTML = 'Password do not match';
        document.getElementById('password').style.borderColor = 'yellow';
        document.getElementById('rePassword').style.borderColor = 'yellow';
    }
    if(error>0) {
        return false;
    }
    window.alert('Your name: '+a+'\n'+'Your Email: '+b)
}

function login(){
    var error = 0;
    var e = document.login_form.username.value;
    if ( e == "") {
        error++;
        document.getElementById('username_error').innerHTML = 'Please enter your username';
        document.getElementById('username').style.borderColor = 'red';
    }
    var f = document.login_form.login_password.value;
    if ( f == "") {
        error++;
        document.getElementById('login_password_error').innerHTML = 'Please re-enter your password';
        document.getElementById('login_password').style.borderColor = 'red';
    }
    if(error>0) {
        return false;
    }
}