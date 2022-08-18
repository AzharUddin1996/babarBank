// step-1: add click event handlaer with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    //    step-2: get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('email-filed');
    const email = emailField.value;

    // password
    const passwordField = document.getElementById('password');
    const password = passwordField.value;
    console.log(email, password);
    if (email === 'a.uddin4321@gmail.com' && 'azhar4321.') {
        window.location.href = 'bank.html'
    }
    else {
        alert('invalid text pleas corect keyword!!');
    }
});