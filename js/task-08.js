const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    console.dir(event.currentTarget.elements);

    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;

    if(mail === '' || password === '') {
        return alert('Всі поля мають бути заповнені!');
    }
}
