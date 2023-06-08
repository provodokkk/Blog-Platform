import { errorMessages } from '../validation_constants.js';
import { getLocalStorageObject, setObjectToLocalStorage } from '../localstorage_operations.js';
import { FieldsValidation } from '../fields_validation.js';

export class LoginModel {
    constructor(emailElement, passwordElement, emailValue, passwordValue, showError, showSuccess) {
        this.emailElement       = emailElement;
        this.passwordElement    = passwordElement;

        this.emailValue         = emailValue;
        this.passwordValue      = passwordValue;

        this.fieldsValidation   = new FieldsValidation(showError, showSuccess);
    }

    validateInputs(emailElement, passwordElement, emailValue, passwordValue) {
        const emailValid    = this.fieldsValidation.validateComplexField(emailElement,
                                                                         emailValue,
                                                                         this.fieldsValidation.emailCheckCondition(emailValue),
                                                                         errorMessages.emptyEmail,
                                                                         errorMessages.invalidEmail);
        const passwordValid = this.fieldsValidation.validateComplexField(passwordElement,
                                                                         passwordValue,
                                                                         this.fieldsValidation.passwordCheckCondition(passwordValue),
                                                                         errorMessages.emptyPassword,
                                                                         errorMessages.invalidPassword);

        return emailValid && passwordValid;
    }
    
    checkUser(emailValue, passwordValue) {
        let users = getLocalStorageObject('users');
        if(users == null) {
            alert(errorMessages.noUser);
            return 0;
        }

        let emailValid      = 0;
        let passwordValid   = 0;

        users.every((user) => {
            emailValid      += emailValue === user.email;  // when the email is found in the database, the letiable will increase
            passwordValid   = passwordValue === user.password;
            
            if(emailValid && passwordValid) {       // if email and password match
                this.setCurrentUser(user.email);    // set this user as the current user
                return false;                       // exit from loop
            }
                
            return true;
        });

        if(!emailValid) {                           // if the email was not found in the database
            return this.fieldsValidation.setError(email, errorMessages.wrongEmail);
        } else if(emailValid && !passwordValid) {   // if the email was found but the password is incorrect
            return this.fieldsValidation.setError(password, errorMessages.wrongPassword);
        }

        return 1;
    }

    setCurrentUser(email) {
        let users = getLocalStorageObject('users');
        const noUser = users.every((user) => {
            if(user.email === email) {
                setObjectToLocalStorage('currentUser', user)
                return false;
            }
                
            return true;
        });

        if(Boolean(noUser)) {
            alert(errorMessages.noUser);
        }
    }

    openNextTab() {
        window.location.href = 'index.html';
    }
}
