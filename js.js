let title = document.getElementById('blockTitle');
title.innerText = 'Welcome';
let title2 = document.getElementsByClassName('block');
title2.innerText = 'Home';

let buyList = document.getElementById('text')
let btnCreate = document.getElementById('btnCreate');
let inputItem = document.getElementById('inputItem');

let flag = true

let a = 54
let btnClick = () => {
    let newText = inputItem.value;
    if(newText.length != 0){
        if(flag){
            let backgraundBlock = "grey"
        }
        else {
            let backgraundBlock = "black"
        }
    text.innerHTML += `<li>${newText}</li>`;
    inputItem.value = "";
    }
    else {
        alert("Write your text!!!")
    }
}

btnCreate.onclick = btnClick 