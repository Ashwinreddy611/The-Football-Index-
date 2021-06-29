function sendMail(contactForm) {
    emailjs.send("service_hnbzikx","template_7sdhtzf", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.formMessage.value
    })
    .then(function(response) {
        console.log("Working", response);
    })
    .catch(function(error){
        console.log("Error", error);
    });
    return false;
}