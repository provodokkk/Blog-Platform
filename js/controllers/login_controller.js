import { LoginModel }   from '../models/login_model.js';
import { LoginView }    from '../views/login_view.js';

import { setEmptyCurrentUser }  from '../user.js';

class LoginController {
    constructor() {
        setEmptyCurrentUser();

        document.getElementById('form').addEventListener('submit', e => {
            e.preventDefault();

            const emailElement      = document.getElementById('email');
            const passwordElement   = document.getElementById('password');
            const emailValue        = emailElement.value;
            const passwordValue     = passwordElement.value;

            const loginView         = new LoginView();

            const showError         = loginView.showError;
            const showSuccess       = loginView.showSuccess;

            let loginModel  = new LoginModel(emailElement,
                                             passwordElement,
                                             emailValue,
                                             passwordValue,
                                             showError,
                                             showSuccess);
            const dataValid = loginModel.validateInputs(emailElement,
                                                        passwordElement,
                                                        emailValue,
                                                        passwordValue);

            if(dataValid) {
                const userExist = loginModel.checkUser(emailValue, passwordValue);

                if(userExist) {
                    loginModel.openNextTab();
                }
            }
        });
    }
}

new LoginController();