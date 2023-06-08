import { ProfileSettingsModel } from '../models/profile_settings_model.js';
import { ProfileSettingsView }  from '../views/profile_settings_view.js';

import { isUserLogged } from '../index.js';

class ProfileSettingsController {
    constructor() {
        const usersData             = JSON.parse(localStorage.getItem('users'));
        const currentUser           = JSON.parse(localStorage.getItem('currentUser'));

        const profileSettingsView   = new ProfileSettingsView();
        const setButtonView         = profileSettingsView.setButtonView;

        let profileSettingsModel    = new ProfileSettingsModel(setButtonView);
        profileSettingsModel.setDefaultData(currentUser);

        document.getElementById('saveProfile').addEventListener('click', function(ev) {
            profileSettingsModel.onClick(ev.target);
            profileSettingsModel.refreshData(usersData, currentUser);
        });

    }
}

if(isUserLogged()) {
    new ProfileSettingsController();
}
