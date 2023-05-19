import { ProfileSettingsModel } from './profile_settings_model.js';
import { ProfileSettingsView }  from './profile_settings_view.js';

import { isUserLogged } from './index.js';

class ProfileSettingsController {
    constructor() {
        const usersData             = JSON.parse(localStorage.getItem('usersData'));
        const currentUser           = JSON.parse(localStorage.getItem('currentUser'));

        const profileSettingsView   = new ProfileSettingsView();
        const setButtonView         = profileSettingsView.setButtonView;

        var profileSettingsModel    = new ProfileSettingsModel(setButtonView);
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
