
export class NewUser {
    constructor() {
        this.username       = document.getElementById('username');
        this.date           = document.getElementById('date');
        this.email          = document.getElementById('email');
        this.password1      = document.getElementById('password1');
        this.password2      = document.getElementById('password2');

        this.usernameValue  = this.username.value.trim();
        this.dateValue      = this.date.value.trim();
        this.emailValue     = this.email.value.trim();
        this.password1Value = this.password1.value.trim();
        this.password2Value = this.password2.value.trim();
    }
}

export class User {
    constructor(NewUser) {
        this.username       = NewUser.usernameValue;
        this.date           = NewUser.dateValue;
        this.email          = NewUser.emailValue;

        this.name           = '';
        this.surname        = '';
        this.mobileNumber   = '';
        this.country        = '';
        this.address        = '';
        this.website        = '';
        this.education      = '';
    }
}

export function setEmptyCurrentUser() {
    const emptyUser = {
        username:       '',
        date:           '',
        email:          '',

        name:           '',
        surname:        '',
        mobileNumber:   '',
        countr:         '',
        address:        '',
        website:        '',
        education:      '',
    };
    
    localStorage.setItem('currentUser', JSON.stringify(emptyUser));
}
