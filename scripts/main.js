//Практичне завдання 1.
let myHeading = document.querySelector('h1');
myHeading.textContent = 'Текст змінений з JS!';

//Практичне завдання 2.
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

// //Практичне завдання 3.
// let myButton = document.querySelector('button');
// let myHeading = document.querySelector('h1');

// function setUserName() {
//     let myName = prompt('Please enter your name.');
//     if(!myName) {
//         setUserName();
//     } else {
//         localStorage.setItem('name', myName);
//         myHeading.innerHTML = 'Вітаю, ' + myName;
//     }
// }

// if(!localStorage.getItem('name')) {
//     setUserName(); 
// } else {
//     let storedName = localStorage.getItem('name');
//     myHeading.innerHTML = 'Вітаю, ' + storedName; 
// }

// myButton.onclick = function() {
//     setUserName();
// }