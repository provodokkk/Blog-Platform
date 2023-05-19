
export class LoginModel {
    constructor(email, password, emailValue, passwordValue, showError, showSuccess) {
        this.email          = email;
        this.password       = password;

        this.emailValue     = emailValue;
        this.passwordValue  = passwordValue;

        this.showError      = showError;
        this.showSuccess    = showSuccess;
    }

    validateInputs(email, password, emailValue, passwordValue) {
        var emailValid      = 0;
        var passwordValid   = 0;
        
        if(emailValue === '') {
            this.setError(email, 'Email is required');
        } else if(!this.isValidEmail(emailValue)) {
            this.setError(email, 'Provide a valid email');
        } else {
            emailValid = this.setSuccess(email);
        }
        
        if(passwordValue === '') {
            this.setError(password, 'Email is required');
        } else if(passwordValue.length < 8) {
            this.setError(password, 'Password must be at least 8 character');
        } else {
            passwordValid = this.setSuccess(password);
        }

        if(emailValid && passwordValid) {
            return 1;
        }

        return 0;
    }
    
    checkUser(emailValue, passwordValue) {
        var emailValid      = 0;
        var passwordValid   = 0;

        var usersVerification = JSON.parse(localStorage.getItem('usersVerification'));
        if(usersVerification == null) {
            alert('First you have to register');
            return 0;
        }
        
        usersVerification.every((user) => {
            emailValid      += this.checkData(emailValue, user.emailValue);  // when the email is found in the database, the variable will increase
            passwordValid   = this.checkData(passwordValue, user.password1Value);
            
            if(emailValid && passwordValid) {               // if email and password match
                this.setCurrentUser(user.usernameValue);    // set this user as the current user
                return false;                               // exit from loop
            }
                
            return true;
        });

        if(!emailValid) {                           // if the email was not found in the database
            this.setError(email, 'Wrong email');
        } else if(emailValid && !passwordValid) {   // if the email was found but the password is incorrect
            this.setError(password, 'Wrong password');
        }

        if(emailValid && passwordValid) {
            return 1;
        }

        return 0;
    }

    checkData(data, validData) {
        if(data === validData) {
            return 1;
        }

        return 0;
    }

    setCurrentUser(username) {
        var usersData = JSON.parse(localStorage.getItem('usersData'));

        const noUser = usersData.every((user) => {
            if(user.username === username) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                
                return false;
            }
                
            return true;
        });

        if(Boolean(noUser)) {
            alert("The user doesn't exist in the database");
        }

        return 0;
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
        window.location.href = 'index.html';
    }
}
