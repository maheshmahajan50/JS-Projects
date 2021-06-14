console.log('Hy its form validation project');

let username = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');

username.addEventListener('blur', () => {
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = username.value;
    if (regex.test(str)) {
        console.log('matched');
        username.classList.remove('is-invalid');
        username.classList.add('is-valid');
    }
    else {
        console.log('unmatched');
        username.classList.remove('is-valid');
        username.classList.add('is-invalid');
    }
})

email.addEventListener('blur', () => {
    let regex = /^([_\.\-a-zA-Z0-9]+)@([_\.\-a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    if (regex.test(str)) {
        console.log('matched');
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
    }
    else {
        console.log('unmatched');
        email.classList.remove('is-valid');
        email.classList.add('is-invalid');
    }
})

phone.addEventListener('blur', () => {
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    if (regex.test(str)) {
        console.log('matched');
        phone.classList.remove('is-invalid');
        phone.classList.add('is-valid');
    }
    else {
        console.log('unmatched');
        phone.classList.remove('is-valid');
        phone.classList.add('is-invalid');
    }
})