let myHeading = document.querySelector('p')
myHeading.textContent = 'Hello! Welcome to CoderBar'
myHeading.onclick = function () {
    //myHeading.textContent = 'Welcome to CoderBar!!!'
    alert('欢迎来到编程吧');
}



// let mainImg = document.querySelector('body')
// mainImg.onclick = function () {
//     let imgSrc = mainImg.getAttribute('background')
//     if (imgSrc == 'images/xinxilan2.jpg') {
//         mainImg.setAttribute('background', 'images/xinxilan.jpeg')
//     } else {
//         mainImg.setAttribute('background', 'images/xinxilan2.jpg')
//     }
// }


// let myButton = document.querySelector('button');

// function setUserName() {
//     let myName = prompt('请输入你的名字。');
//     localStorage.setItem('name', myName);
//     myHeading.textContent = 'Mozilla 酷毙了，' + myName;
// }

// if (!localStorage.getItem('name')) {
//     setUserName();
// } else {
//     let storedName = localStorage.getItem('name');
//     myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
// }

// myButton.onclick = function () {
//     setUserName();
// }
