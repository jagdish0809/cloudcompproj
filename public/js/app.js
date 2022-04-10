const contactForm = document.querySelector('.contact-form');
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let companyName = document.getElementById('companyName');
let nature = document.getElementById('nature');
let email = document.getElementById('email');
let contactNumber = document.getElementById('contactNumber');
let message = document.getElementById('message');


contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    let formData = {
        firstName: firstName.value,
        lastName: lastName.value,
        companyName: companyName.value,
        nature: nature.value,
        email: email.value,
        contactNumber: contactNumber.value,
        message: message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Email sent');
            firstName.value = '';
            lastName.value = '';
            companyName.value = '';
            nature.value = '';
            email.value = '';
            contactNumber.value = '';
            message.value = '';
        }else{
            alert('something went wrong')
        }
    };

    xhr.send(JSON.stringify(formData));
})
