document.addEventListener('DOMContentLoaded', () => {
    let cookieConsentElem = document.querySelector(".cookieconcent");
    let cookieAcceptElem = cookieConsentElem.querySelector(".cookieconcent-button--accept");
    let cookieRejectElem = cookieConsentElem.querySelector(".cookieconcent-button--reject");

    /* Disable google analytics by till consent is given */

    if(localStorage.getItem("consent") == null){
        cookieConsentElem.classList.add("cookieconsent--show")
    }else if (localStorage.getItem("consent") != "given") {
        window['ga-disable-UA-159376558-1'] = true;
    } else {
        window['ga-disable-UA-159376558-1'] = false;
        addGoogleCookies()
    }
    /*----------------------------------------------------------*/


    cookieAcceptElem.addEventListener("click", () => {
        window['ga-disable-UA-159376558-1'] = false;
        localStorage.setItem("consent", "given")
        cookieConsentElem.classList.remove("cookieconsent--show")
        addGoogleCookies();
    })

    cookieRejectElem.addEventListener("click", () => {
        window['ga-disable-UA-159376558-1'] = true;
        localStorage.setItem("consent", "rejected")
        cookieConsentElem.classList.remove("cookieconsent--show")
    })



    function addGoogleCookies() {
        /* Only activates if  window['ga-disable-UA-159376558-1'] = false */
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'UA-159376558-1');
    }
});