import { NewUser } from '../user.js';
import { errorMessages } from '../validation_constants.js';
import { FieldsValidation } from '../fields_validation.js';
import { getLocalStorageObject, setObjectToLocalStorage, addArrayToLocalstorage } from '../localstorage_operations.js'

export class RegistrationModel {
    constructor(showError, showSuccess) {
        this.newUser            = new NewUser();
        this.fieldsValidation   = new FieldsValidation(showError, showSuccess);

        const dataIsValid = this.validateInputs(this.newUser);
        if(dataIsValid) {
            this.setOnLocalStorage();
            this.openNextTab();
        }
    }

    validateInputs(newUser) {
        const   FULLY_VALID_DATA = 6;
        let     dataIsValid = 0;

        dataIsValid += this.fieldsValidation.validateDefaultField(newUser.getElementById('username'),
                                                                  newUser.username,
                                                                  errorMessages.emptyName);
        dataIsValid += this.fieldsValidation.validateDefaultField(newUser.getElementById('date'),
                                                                  newUser.date,
                                                                  errorMessages.emptyDate);
        dataIsValid += this.fieldsValidation.validateComplexField(newUser.getElementById('email'),
                                                                  newUser.email,
                                                                  this.fieldsValidation.emailCheckCondition(newUser.email),
                                                                  errorMessages.emptyEmail,
                                                                  errorMessages.invalidEmail);
        dataIsValid += this.fieldsValidation.validateComplexField(newUser.getElementById('password1'),
                                                                  newUser.password,
                                                                  this.fieldsValidation.passwordCheckCondition(newUser.password),
                                                                  errorMessages.emptyPassword,
                                                                  errorMessages.invalidPassword);
        dataIsValid += this.fieldsValidation.validateComplexField(newUser.getElementById('password2'),
                                                                  newUser.confirmPassword,
                                                                  this.fieldsValidation.confirmPasswordCheckCondition(newUser.password, newUser.confirmPassword),
                                                                  errorMessages.emptyPasswordConfirmation,
                                                                  errorMessages.invalidPasswordConfirmation);
        dataIsValid += this.uniquenessCheck(newUser)

        if(dataIsValid === FULLY_VALID_DATA) {
            return 1;
        }
    };

    uniquenessCheck(newUser) {
        let unique = 1;

        const users = getLocalStorageObject('users');

        if(users == null) {
            return unique;
        }

        users.forEach((user) => {
            if(newUser.username === user.username) {
                unique = this.fieldsValidation.setError(newUser.getElementById('username'), errorMessages.notUniqueUsername);
                return;
            } else if(newUser.email === user.email) {
                unique = this.fieldsValidation.setError(newUser.getElementById('email'), errorMessages.notUniqueEmail);
                return;
            }
        });

        return unique;
    }

    setOnLocalStorage() {
        addArrayToLocalstorage('users', this.newUser);
        setObjectToLocalStorage('currentUser', this.newUser);
    }

    openNextTab() {
        window.location.href = 'profile_settings.html';
    }
}
