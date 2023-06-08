
export class NewUser {
    constructor() {
        this.username           = this.getElementById('username').value.trim();
        this.date               = this.getElementById('date').value.trim();
        this.email              = this.getElementById('email').value.trim();
        this.password           = this.getElementById('password1').value.trim();
        this.confirmPassword    = this.getElementById('password2').value.trim();
        this.name               = '';
        this.surname            = '';
        this.mobileNumber       = '';
        this.country            = '';
        this.address            = '';
        this.website            = '';
        this.education          = '';
    }

    getElementById(elementId) {
        return document.getElementById(elementId);
    }
}

export function setEmptyCurrentUser() {
    const emptyUser = {
        username:           '',
        date:               '',
        email:              '',
        password:           '',
        confirmPassword:    '',
        name:               '',
        surname:            '',
        mobileNumber:       '',
        country:            '',
        address:            '',
        website:            '',
        education:          '',
    };
    
    localStorage.setItem('currentUser', JSON.stringify(emptyUser));
}
