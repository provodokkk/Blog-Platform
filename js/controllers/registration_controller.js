import { RegistrationModel } from '../models/registration_model.js'
import { RegistrationView } from '../views/registration_view.js'

class RegistrationController {
    constructor() {
        document.getElementById('form').addEventListener('submit', e => {
            e.preventDefault();

            const registrationView  = new RegistrationView();

            const showError         = registrationView.showError;
            const showSuccess       = registrationView.showSuccess;
            
            new RegistrationModel(showError, showSuccess);
        });
    }
}

new RegistrationController();