const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show input error message
function showError(input, message){
    const formControl = input.parentElement;  //gets .form-control which is the parent element
    formControl.className = 'form-control error';

    const small = formControl.querySelector('small');
    small.innerText = message; //message is being passed into the fn which is being passed in showError eventlistener
}

//Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;  //gets .form-control which is the parent element
    formControl.className = 'form-control success';
}

//Check if email is valid
function isValidEmail(email) { //js email regex
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim() === '') { //trims out whitespace
            showError(input)
        } 
    })
}




//Event Listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username, email, password, password2])
})








//Event Listeners checking line by line
// form.addEventListener('submit', function(e) {
//     e.preventDefault();

//     if(username.value == '') {
//         showError(username, 'Username is required!');
//     } else {
//         showSuccess(username);
//     }

//     if(email.value == '') {
//         showError(email, 'Email is required!');
//     } else if(!isValidEmail(email.value)){
//         showError(email, 'Email is not valid!');
//     } else {
//         showSuccess(email);
//     }

//     if(password.value == '') {
//         showError(password, 'A password is required!');
//     } else {
//         showSuccess(password);
//     }

//     if(password2.value == '') {
//         showError(password2, 'The passwords do not match!');
//     } else {
//         showSuccess(password2);
//     }
// })