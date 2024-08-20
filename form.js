
    const form = document.getElementById('myForm')
    form.addEventListener('submit', (event) => {
    event.preventDefault();
    const firstName = document.querySelector('#fname').value;
    const lastName = document.querySelector('#lname').value;
    const email = document.querySelector('#email').value;
    const radioBtn = document.querySelectorAll("#radio");
    const message = document.querySelector("#message").value;
    const checkboxBtn = document.querySelector("#checkbox");
    const errorMessage = document.querySelector(".errorMessage");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // error Messages Id
    const lastnameError = document.getElementById('lastname-error');
    const firstnameError = document.getElementById('firstname-error');
    const emailError = document.getElementById('email-error');
    const radioError = document.getElementById('query-error');
    const massageError = document.getElementById('message-error');
    const checkerror = document.getElementById('check-error');
    const Success_massage = document.getElementById("submission-message")
    
    let isValid = true;
    if(firstName.trim() === '') {
        firstnameError.style.display = 'block'
        isValid = false
    } else {
        firstnameError.style.display = 'none'
    }
    if(lastName.trim() === '') {
       
        lastnameError.style.display = 'block'
        isValid = false
    } else{
        lastnameError.style.display = 'none'
        
    }

    if (!emailRegex.test(email)) {
        emailError.style.display = 'block';
        isValid = false
    } else {
         emailError.style.display = 'none'
         
    }
    radioBtn.forEach(function(radio) {
        radio.addEventListener('click', function() {
            // Hide the error message when a radio button is clicked
            radioError.style.display = 'none';
        });
    });
    let isSelected = false
    for(let i = 0; i < radioBtn.length; i++) {
        if(radioBtn[i].checked) {
            isSelected = true
            break;
        }
    }
    if(!isSelected) {
        radioError.style.display =  "block"
    } else {
        radioError.style.display =  "none"
    }
    // Message js
    if(message.trim() === '') {
        massageError.style.display = 'block'
        isValid = false
    } else {
        massageError.style.display = 'none'
    }

    if(!checkboxBtn.checked) {
        checkerror.style.display = "block"
    } else{
        checkerror.style.display  = 'none'
    }
    
    if(firstName === '' || lastName === "" || email === "" || !isSelected || message === '' || !checkboxBtn.checked) {
        Success_massage.style.display = 'none';
    } else {
        Success_massage.style.display = 'block';

        // Optionally clear the form fields after submission
        this.reset();
    }
})