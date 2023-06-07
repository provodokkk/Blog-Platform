
export class ProfileModule {
    constructor() { }

    setUserData(currentUser) {
        document.getElementById("profile-nickname-ref").textContent = currentUser.username;

        document.getElementById("nickname").textContent     = currentUser.username;
        document.getElementById("name").textContent         = currentUser.name;
        document.getElementById("surname").textContent      = currentUser.surname;

        document.getElementById("mobileNumber").textContent = currentUser.mobileNumber;
        document.getElementById("country").textContent      = currentUser.country;
        document.getElementById("address").textContent      = currentUser.address;
        document.getElementById("email").textContent        = currentUser.email;
        document.getElementById("website").textContent      = currentUser.website;
        document.getElementById("education").textContent    = currentUser.education;
    }
}

let profileModule = new ProfileModule();