export class FieldsValidation {
    constructor(showError, showSuccess) {
        this.showError = showError
        this.showSuccess = showSuccess
    }

    validateDefaultField(element, value, errorText) {
        if(!value) {
            return this.setError(element, errorText);
        }
    
        return this.setSuccess(element);
    }

    validateComplexField(element, value, complexCheck, errorText, complexErrorText) {
        if(!value) {
            return this.setError(element, errorText);
        } else if(!complexCheck) {
            return this.setError(element, complexErrorText);
        }
    
        return this.setSuccess(element);
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

    emailCheckCondition(email) {
        return this.isValidEmail(email);
    }
    
    passwordCheckCondition(password) {
        return !(password.length < 8);
    }
    
    confirmPasswordCheckCondition(password, confirmPassword) {
        return !(confirmPassword !== password);
    }
    
    isValidEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
}
