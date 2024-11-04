
/** selectors or selecting elements  **/

// window object  - The window object is the parent object of the web-browser
console.log(window);
//window.alert(1);

// Single element
console.log(document.getElementById('my-form'));
console.log(document.querySelectorAll('h1'));
const ul = document.querySelectorAll('.items');
//ul.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent = 'Hello';
//ul.children[1].innerText = 'Brad';
//ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// Multiple element
console.log(document.querySelectorAll('.item'));

//Older
console.log(document.getElementsByClassName('.item'));
console.log(document.getElementsByTagName('item'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

const btn = document.querySelector('.btn');
//btn.style.background = 'red';


//Events
btn.addEventListener('mouseover', (e) => {
    e.preventDefault();
   // console.log(e);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items')
        .lastElementChild.innerHTML = '<h1>Hello</h1>';
});


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

/*
myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
    console.log(nameInput.value);
}
*/
//Form Validation
myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        //alert('Please enter fields');
        //instead of using the standard alert, we can make use a costumed msg
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    }else {
        //console.log('success');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
        userList.appendChild(li);

        //Clear the fields
        nameInput.value = '';
        emailInput.value = '';

    }
    /*
    Now the User data is just saved on the UI and when the app is reloaded, the data gets flushed.
    But you can already manipulate the DOM and interact with the UI
    *If you want to have an app where you can save data, you must have a kind of BackEnd which is going to interact with the DB.
    For example Node.js, PHP, python  that connects to a DB.
    What you then do is send request from your FrontEnd using something like the fetch API or AJAX,
    as well as something known as the local storage where you can store user data in the user's browser
    * */
}
