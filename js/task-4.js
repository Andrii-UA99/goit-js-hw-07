const formLogin = document.querySelector('.login-form');
const inputEmail = document.querySelector('input[name="email"]');
const inputPassword = document.querySelector('input[name="password"]');

formLogin.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailValues = inputEmail.value.trim();
    const passwordValues = inputPassword.value.trim();

    if (!emailValues || !passwordValues) {
        alert('All form fields must be filled in');
        return;
    }

    const dataForm = {
        email: emailValues,
        password: passwordValues,
    };
    console.log(dataForm);
    
    formLogin.requestFullscreen();
});