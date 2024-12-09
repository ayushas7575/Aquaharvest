const pageFunction = (i) => {
    let eye = document.getElementsByClassName('viewPass')[i];
    let password = document.getElementsByClassName('password')[i];
    eye.addEventListener('click', () => {
        if (eye.classList.contains('uil-eye-slash')) {
            eye.classList.remove('uil-eye-slash');
            eye.classList.add('uil-eye');
            password.setAttribute('type', 'text');
        }
        else {
            password.setAttribute('type', 'password');
            eye.classList.remove('uil-eye');
            eye.classList.add('uil-eye-slash');
        }
    })
}

pageFunction(0);
pageFunction(1);

let LogInPage = document.querySelector('.loginArea')
let SignUpPage = document.querySelector('.signinArea')

let toSignUP = document.getElementById('SwitchToSignUp');
toSignUP.addEventListener('click', () => {
    LogInPage.classList.add('UserInActive');
    SignUpPage.classList.remove('UserInActive');
})

let toLogIN = document.getElementById('SwitchToLogIn');
toLogIN.addEventListener('click', () => {
    LogInPage.classList.remove('UserInActive');
    SignUpPage.classList.add('UserInActive');
})

let myLogin = document.getElementById('Login');
let ShowLogin = document.getElementsByClassName('register')[0];
let ShowLogin2 = document.getElementsByClassName('register')[1];
ShowLogin.addEventListener('click', ()=>{
    myLogin.classList.toggle('ActiveLogin');
})
ShowLogin2.addEventListener('click', ()=>{
    myLogin.classList.toggle('ActiveLogin');
})
let closeArea = document.getElementById('loginCloseArea');
closeArea.addEventListener('click', ()=>{
    myLogin.classList.remove('ActiveLogin');
})