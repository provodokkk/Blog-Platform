import {NewUser, User} from '../user.js';

export class RegistrationModel {
    constructor(showError, showSuccess) {
        this.newUser        = new NewUser();

        this.showError      = showError
        this.showSuccess    = showSuccess

        const dataIsValid   = this.validateInputs(this.newUser);

        if(dataIsValid) {
            this.setOnLocalStorage();
            this.openNextTab();
        }
    }

    validateInputs(newUser) {
        let dataIsValid = 0;

        dataIsValid += this.validateDefaultField(newUser.username, newUser.usernameValue, 'Name is required');
        dataIsValid += this.validateDefaultField(newUser.date, newUser.dateValue, 'Date is required');
        
        const complexEmailCheck = !this.isValidEmail(newUser.emailValue);
        dataIsValid += this.validateComplexField(newUser.email, newUser.emailValue, complexEmailCheck, 'Email is required', 'Provide a valid email');
        
        const complexPassword1Check = (newUser.password1Value.length < 8);
        dataIsValid += this.validateComplexField(newUser.password1, newUser.password1Value, complexPassword1Check, 'Password is required', 'Password must be at least 8 character');
        
        const complexPassword2Check = (newUser.password2Value !== newUser.password1Value);
        dataIsValid += this.validateComplexField(newUser.password2, newUser.password2Value, complexPassword2Check, 'Please confirm your password', "Passwords doesn't match");
        
        dataIsValid += this.uniquenessCheck(newUser)

        if(dataIsValid === 6) {
            return 1;
        }
    };

    validateDefaultField(element, value, errorText) {
        if(value === '') {
            return this.setError(element, errorText);
        } else {
            return this.setSuccess(element);
        }
    }

    validateComplexField(element, value, complexCheck, errorText, complexErrorText) {
        if(value === '') {
            return this.setError(element, errorText);
        } else if(complexCheck) {
            return this.setError(element, complexErrorText);
        } else {
            return this.setSuccess(element);
        }
    }

    uniquenessCheck(newUser) {
        let unique = 1;

        const usersVerification = JSON.parse(localStorage.getItem('usersVerification'));

        if(usersVerification == null) {
            if(newUser.username.length) {
                this.setSuccess(newUser.username);
            }

            if(newUser.email.length) {
                this.setSuccess(newUser.email);
            }

            return 1
        }

        usersVerification.forEach((user) => {
            if(newUser.usernameValue === user.usernameValue) {
                this.setError(newUser.username, 'This username is already in use');
                unique = 0;
            } else if(newUser.emailValue === user.emailValue) {
                 this.setError(newUser.email, 'This email is already in use');
                 unique = 0;
            }
        });

        if(unique) {
            if(newUser.username.length) {
                this.setSuccess(newUser.username);
            }

            if(newUser.email.length) {
                this.setSuccess(newUser.email);
            }

            return 1;
        } else {
            return 0;
        }
    }

    

    setOnLocalStorage() {
        const currentUser = new User(this.newUser);

        this.addToLocalstorageArray('usersVerification', this.newUser)
        this.addToLocalstorageArray('usersData', currentUser)
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }

    addToLocalstorageArray(arrayName, entry) {
        let existingEntries = JSON.parse(localStorage.getItem(arrayName));

        if(existingEntries == null) {
            existingEntries = [];
        }

        existingEntries.push(entry);
        localStorage.setItem(arrayName, JSON.stringify(existingEntries));
    }

    setError(element, message) {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        this.showError(errorDisplay, inputControl, message);

        return 0;
    }
    
    setSuccess(element) {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        this.showSuccess(errorDisplay, inputControl);

        return 1;
    }
    
    isValidEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    openNextTab() {
        window.location.href = 'profile_settings.html';
    }
}
