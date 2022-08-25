function loginMethod(): void {
    const switchAuthorization = document.querySelectorAll('.switch-authorization');
    console.log(switchAuthorization);
    switchAuthorization.forEach((el: Element) => {
        el.addEventListener('click', () => {
            const login = <HTMLElement>document.getElementById('login');
            const signin = <HTMLElement>document.getElementById('signin');
            if (el.classList.contains('swith-to-signin')) {
                console.log(login);
                login.classList.add('reg-none');
                signin.classList.remove('reg-none');
            } else if (el.classList.contains('swith-to-login')) {
                console.log(signin);
                login.classList.remove('reg-none');
                signin.classList.add('reg-none');
            }
        });
    });
}

loginMethod();
