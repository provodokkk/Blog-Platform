
export class ProfileSettingsModel {
    constructor(setButtonView) {
        this.setButtonView = setButtonView;
    }

    setDefaultData(currentUser) {
        document.getElementById('nickname').value       = currentUser.username;
        document.getElementById('name').value           = currentUser.name;
        document.getElementById('surname').value        = currentUser.surname;

        document.getElementById('mobileNumber').value   = currentUser.mobileNumber;
        document.getElementById('country').value        = currentUser.country;
        document.getElementById('address').value        = currentUser.address;
        document.getElementById('email').value          = currentUser.email;
        document.getElementById('website').value        = currentUser.website;
        document.getElementById('education').value      = currentUser.education;
    }

    onClick(element) {
        const color = element.style.background;

        this.setButtonView(element, 'Saved', 'green');
        setTimeout(() => {
            this.setButtonView(element, 'Save Profile', color);
        }, 1000);
    }

    refreshData(usersData, currentUser) {
        this.setCurrentUserData(currentUser);
        this.refreshUsersArray(usersData, currentUser) 

        this.setOnLocalStorage(usersData, currentUser);
    }

    setCurrentUserData(currentUser) {
        currentUser.name            = document.getElementById("name").value;
        currentUser.surname         = document.getElementById("surname").value;
        currentUser.mobileNumber    = document.getElementById("mobileNumber").value;
        currentUser.country         = document.getElementById("country").value;
        currentUser.address         = document.getElementById("address").value;
        currentUser.website         = document.getElementById("website").value;
        currentUser.education       = document.getElementById("education").value;
    }

    refreshUsersArray(array, refreshedUser) {
        array.forEach((user) => {
            if(user.username === refreshedUser.username) {
                const index = array.indexOf(user);
                array.splice(index, 1);
            }
        });

        array.push(refreshedUser)
    }

    setOnLocalStorage(usersData, currentUser) {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        localStorage.setItem('usersData', JSON.stringify(usersData));
    }
}
