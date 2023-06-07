import { ProfileModule } from '../models/profile_model.js';

import { isUserLogged } from '../index.js';

class ProfileController {
    constructor() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        const profileModule = new ProfileModule();

        profileModule.setUserData(currentUser);
    }
}

if(isUserLogged()) {
    new ProfileController();
}
