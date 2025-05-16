
document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const sexInputs = document.querySelectorAll('input[name="sex"]');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const supportReasonInput = document.getElementById('supportReason');
    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const sexError = document.getElementById('sexError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const supportReasonError = document.getElementById('supportReasonError');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;

        if (firstNameInput.value.trim() === '') {
            firstNameError.textContent = 'required';
            isValid = false;
        } else {
            firstNameError.textContent = '';
        }

        if (lastNameInput.value.trim() === '') {
            lastNameError.textContent = 'required';
            isValid = false;
        } else {
            lastNameError.textContent = '';
        }

        let sexSelected = false;
        for (const radio of sexInputs) {
            if (radio.checked) {
                sexSelected = true;
                break;
            }
        }
        if (!sexSelected) {
            sexError.textContent = 'required';
            isValid = false;
        } else {
            sexError.textContent = '';
        }

        if (emailInput.value.trim() === '') {
            emailError.textContent = 'required';
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            emailError.textContent = 'Invalid email format';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        if (passwordInput.value.trim() === '') {
            passwordError.textContent = 'required';
            isValid = false;
        } else {
            passwordError.textContent = '';
        }

        if (supportReasonInput.value.trim() === '') {
            supportReasonError.textContent = 'required';
            isValid = false;
        } else {
            supportReasonError.textContent = '';
        }

        if (isValid) {
            localStorage.setItem('firstName', firstNameInput.value.trim());
            localStorage.setItem('lastName', lastNameInput.value.trim());
            let selectedSex;
            for (const radio of sexInputs) {
                if (radio.checked) {
                    selectedSex = radio.value;
                    break;
                }
            }
            localStorage.setItem('sex', selectedSex);
            localStorage.setItem('email', emailInput.value.trim());
            localStorage.setItem('supportReason', supportReasonInput.value.trim());

            window.location.href = 'proj_profile_lastname.html';
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
