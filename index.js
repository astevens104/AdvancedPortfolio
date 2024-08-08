// template_d0yyov9
// service_u7j72lr
// F2RTnso70QpihR1dI

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible"
    emailjs
        .sendForm(
            'service_u7j72lr',
            'template_d0yyov9',
            event.target,
            'F2RTnso70QpihR1dI'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible")
            success.classList += ' modal__overlay--visible'
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible")
            alert(
                "The email service is temporarily unavailable. Please contact me directly at agstevens104@gmail.com"
            );
        })
}

let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}