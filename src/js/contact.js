let contactFormElem = document.querySelector('.contactform');

function validateEmail(email) {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email)
}

contactFormElem.addEventListener("submit", (e) => {
    e.preventDefault();
    let submit = true;
    contactFormElem.name.classList.remove("contactform-input--error");
    contactFormElem.email.classList.add("contactform-input--error");
    contactFormElem.subject.classList.remove("contactform-input--error");
    contactFormElem.message.classList.remove("contactform-input--error");
    let statusElem = contactFormElem.querySelector(".contactform-status")
    statusElem.innerHTML = "";


    if (contactFormElem.name.value.length < 2) {
        contactFormElem.name.classList.add("contactform-input--error");
        submit = false;
        statusElem.innerHTML += "Please enter a name of atleast 2 characters <br>";
    };
    
    if (!validateEmail(contactFormElem.email.value)) {
        submit = false;
        contactFormElem.email.classList.add("contactform-input--error");
        statusElem.innerHTML += "Please enter valid email <br>";
    };

    if (contactFormElem.subject.value.length < 2) {
        contactFormElem.subject.classList.add("contactform-input--error");
        submit = false;
        statusElem.innerHTML += "Please enter a subject of atleast 2 characters <br>";
    };
    if (contactFormElem.message.value.length < 2) {
        contactFormElem.message.classList.add("contactform-input--error");
        submit = false;
        statusElem.innerHTML += "Please enter a message of atleast 2 characters <br>";
    };

    if(submit){
        contactFormElem.submit();
        
    }
});