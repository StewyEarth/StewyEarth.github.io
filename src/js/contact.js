let contactFormElem = document.querySelector('.contactform');


contactFormElem.addEventListener("submit", (e) => {
    e.preventDefault();
    let submit = true;
    contactFormElem.name.classList.remove("contactform-input--error");
    contactFormElem.subject.classList.remove("contactform-input--error");
    contactFormElem.message.classList.remove("contactform-input--error");


    if (contactFormElem.name.value.length < 2) {
        contactFormElem.name.classList.add("contactform-input--error");
        submit = false;
    };

    if (contactFormElem.subject.value.length < 2) {
        contactFormElem.subject.classList.add("contactform-input--error");
        submit = false;
    };
    if (contactFormElem.message.value.length < 2) {
        contactFormElem.message.classList.add("contactform-input--error");
        submit = false;
    };

    if(submit){
        contactFormElem.submit();
    }
});