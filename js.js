// let title = document.getElementById('blockTitle');
// title.innerText = 'Welcome';
// let title2 = document.getElementsByClassName('block');
// title2.innerText = 'Home';

// let buyList = document.getElementById('text')
// let btnCreate = document.getElementById('btnCreate');
// let inputItem = document.getElementById('inputItem');

// let flag = true

// let a = 54
// let btnClick = () => {
//     let newText = inputItem.value;
//     if(newText.length != 0){
//         if(flag){
//             let backgraundBlock = "grey"
//         }
//         else {
//             let backgraundBlock = "black"
//         }
//     text.innerHTML += `<li>${newText}</li>`;
//     inputItem.value = "";// повертає пустий інпут
//     }
//     else {
//         alert("Write your text!!!")
//     }
// }

// btnCreate.onclick = btnClick 


// let welcomeBlock = document.getElementById('WelcomeBlock');
// let inputName = document.getElementById('inputName');

// welcomeBlock.innerHTML = `<h1>Welcome, stranger! </h1>`

// let changeInput = () => {
// welcomeBlock.innerHTML = `<h1>Welcome, ${inputName.value}! </h1>`
// }

// inputName.onchange = changeInput;
// let inputColor = document.getElementById('inputColor');

// let changeBodyColor = () => {
//     document.getElementById('body').style.backgroundColor = inputColor.value;
// }
// inputColor.onchange = changeBodyColor;


// let btnChangeTheme = document.getElementById('changeTheme');
// let flag = 0;
// let changeTheme = () => {
//     if (flag == 0){
//     document.getElementById('body').style.backgroundColor = 'black'
//     document.getElementById('body').style.color = 'white';
//     flag = 1;
// }
// else {
//     document.getElementById('body').style.backgroundColor = 'white'
//     document.getElementById('body').style.color = 'black';
//     flag = 0;
// }
// }

// btnChangeTheme.onclick = changeTheme;


// console.log(document.querySelector('div'));
// document.querySelector('.block').innerHTML = `<h1>Title</h1>`;

// let list = document.querySelectorAll('ul>li');
// list[0].style.color = 'red';
// list[1].style.color = 'blue';

 
// let imgMonkey = document.querySelector('#imgMonkey');
// let discriptionBlock = document.querySelector('.Discription');

// let clickMonkey = () => {
//     discriptionBlock.innerHTML = `<p>This link</p>`
// }

// imgMonkey.addEventListener('click', () => {
//     alert('Hello')
// })

let h1st = document.querySelector('h1');
let unList = document.querySelector('ul');
let inputThing = document.querySelector('#input');
let btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
if (inputThing.ariaValueMax.length != 0){
    unList.innerHTML += `
    <li>
       ${inputThing.value}
    </li>
    `
    inputThing.value ="";
}
} );
inputThing.addEventListener('keypress', (event) =>{
    h1st.textContent = event.key;
})