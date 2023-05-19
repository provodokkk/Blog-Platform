
export function isUserLogged() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if(!currentUser || !currentUser.username) {
        window.location.href = 'login.html';
        return 0;
    }

    return 1;
}

isUserLogged();
