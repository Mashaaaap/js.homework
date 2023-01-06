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

// let h1st = document.querySelector('h1');
// let unList = document.querySelector('ul');
// let inputThing = document.querySelector('#input');
// let btn = document.querySelector('#btn');

// btn.addEventListener('click', () => {
// if (inputThing.ariaValueMax.length != 0){
//     unList.innerHTML += `
//     <li>
//        ${inputThing.value}
//     </li>
//     `
//     inputThing.value ="";
// }
// } );
// inputThing.addEventListener('keypress', (event) =>{
//     h1st.textContent = event.key;
// })

//№10

// let notesBlock = document.querySelector('#notesBlock');
// let btnCreate = document.querySelector('.btnCreate');

// let notesStore = [
//     {
//         id:1,
//         text:"Text"
//     },
//     {
//         id:2,
//         text:"Hello"
//     }
// ]


// let btnsDelete =[];

// let generateNotes = () => {
//     notesBlock.innerHTML = null
//     if (notesStore.length != 0) {
//         notesStore.map((el, index) => {
//             if(!el.statusDelete) {
//                 notesBlock.innerHTML += `
//                     <div class="note">
//                         <p class="noteText">${el.text}</p>
//                         <button class="noteDelete" id="btnDelete${index}">Delete</button>
//                     </div>
//                 `
//             } 
//         })
//         for(let i=0; i<=notesStore.length-1; i++){
//             if(!notesStore[i].statusDelete) {
//             btnsDelete[i] = document.querySelector(`#btnDelete${i}`)
//             btnsDelete[i].addEventListener('click', () => {
//                 notesStore[i].statusDelete = true
//                 generateNotes()
//             })
//             }
//         }
//     }
// }

// generateNotes(notesStore);

// let createNote = () => {
//     if (inputText.value.length != 0) {
//         notesStore.push(
//             {
//                 id: notesStore.length>0 ? notesStore[notesStore.length-1].id + 1 : 1,
//                 text: inputText.value
//             }
//         )
//         inputText.value = '';
//         generateNotes(notesStore);
//     }
// }

// btnCreate.addEventListener('click', createNote);

// clock

// let inputSeconds = document.querySelector('#inputSeconds')
// let inputMinutes = document.querySelector('#inputMinutes')
// let inputHours = document.querySelector('#inputHours')
// let btnStart = document.querySelector('#btnStart')
// let body = document.querySelector('#body')

// let flag = true
// btnStart.addEventListener('click', () => {
//     let seconds = inputSeconds.value
//     setTimeout (() => {
//         seconds--
//         if(true){
//             document.querySelector('#Time').innerHTML = seconds
//         }
//     }, 1000)
//     setTimeout (() => {
//         flag = false
//         body.style.backgroundColor = '#000'
//     }, inputSeconds.value*1000)

//     let minutes = inputMinutes.value
//     setTimeout (() => {
//         minutes--
//         if(true){
//             document.querySelector('#Time').innerHTML += minutes
//         }
//     }, 60000)
//     setTimeout (() => {
//         flag = false
//         body.style.backgroundColor = '#000'
//     }, inputSeconds.value*60000)

// })

// let seconds = inputSeconds.value
// let minutes = inputMinutes.value
// let hours = inputHours.value
// function time (hours, minutes, seconds){
//    if (seconds == 0 && minutes == 0 && hours == 0){
//     body.style.backgroundColor = '#000'
//    }
// }



let notesHtml = document.querySelector('#notes')
let btnPost = document.querySelector('#btnPost')
let inputSearch = document.querySelector('#inputSearch')
let inputs = { 
    title: document.querySelector('#inputTitle'),
    text: document.querySelector('#inputText'),
    color: document.querySelector('#inputColor'),
    clearInput(){
        this.title.value = null
        this.text.value = null
    },

    getInfo() {
        if(this.title.value.length != 0 && this.text.value.length != 0){
            return {
                title: this.title.value,
                text: this.text.value,
                color: this.color.value
            }
        } else { 
            return null
        }
    }
}

let notesStore = [
    {
        id:1,
        title: 'Title 1',
        text: 'Do h/w',
        color: '#FFF',
        timeCreated: {
            hours: 10,
            minutes: 20,
            seconds: 25
        }
    }
]

let btnsDelete = []
let btnsChange = []

let genereteNotes = () => { 
    notesHtml.innerHTML = null
    btnsDelete = [] 
    btnsChange = []
    notesStore.map((el,index) => {
        if(!el.statusDelete){
        notesHtml.innerHTML += `
        <div class="noteBlock" id="note${index}" style="background:${el.color}">
            <h2>${el.title}</h2>
            <p id="noteText${index}">${el.text}</p>
            <p class="time">${el.timeCreated.hours}:${el.timeCreated.minutes}:${el.timeCreated.seconds}</p>
            <button id="btnChange${index}"><img class="icon" src="./edit.svg" alt="change"/></button>
            <button class="btnDelete" id="btnDel${index}">Delete</button>
        </div>
        `     
        }
        //console.log(document.querySelector(`#note${index}`))  
      
    })
    
    for(let i=0;i<=notesStore.length-1;i++){
        if(!notesStore[i].statusDelete){
            btnsDelete[i] = document.querySelector(`#btnDel${i}`)
            btnsDelete[i].addEventListener('click', () => { 
                notesStore[i].statusDelete = true
                genereteNotes()
            })
            
            btnsChange[i] = document.querySelector(`#btnChange${i}`)
            btnsChange[i].addEventListener('click', () => {
                document.querySelector(`#note${i}`).innerHTML = `
                <textarea id="changeTitle${i}" placeholder="Write new text"></textarea>
                <textarea id="change${i}" placeholder="Write new title"></textarea>
                <button id="btnSave${i}"><img class="icon" src="./save.svg" alt="change"/></button>
                <button class="btnDelete" id="btnDel${i}">Delete</button>
                `
                document.querySelector(`#btnSave${i}`).addEventListener('click', () => {
                    let inputChange = { 
                        title: document.querySelector(`#change${i}`),
                        text: document.querySelector(`#changeTitle${i}`)
                    }
                    if (inputChange.title.value.length != 0){
                        notesStore[i].text = inputChange.text.value
                    }
                    if (inputChange.text.value.length !=0) {
                        notesStore[i].title = inputChange.title.value
                    }
                    genereteNotes()
                })
            })
        }
    }
}

let btnPostClick = () => { 
    if(inputs.getInfo()) { 
        notesStore = [
            ...notesStore, 
            {   
                id: notesStore.length+1,
                title: inputs.getInfo().title,
                text: inputs.getInfo().text,
                color: inputs.getInfo().color
            }
        ]
        inputs.clearInput()
        genereteNotes()
    } else { 
        alert("Pls, write title or text")
    }
}

genereteNotes()

btnPost.addEventListener('click', btnPostClick)