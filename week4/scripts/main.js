const myHeading = document.querySelector('#headDisplay');
myHeading.textContent = 'TimeLapse';

let myString = 'Bob';
console.log(myString);

let myNumber = 10;
console.log(myNumber);

let myBoolean = true;
console.log(myBoolean);

let myArray = [99, 'Bob', 'Steve', 10];
console.log(myArray[0]);
console.log(myArray[1]);

let myImage = document.querySelector('#changeMe');
let myFigure = document.querySelector('figure');

myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'img/highway.jpg') {
    myImage.setAttribute('src', 'img/sit.jpg');
    myHeading.textContent = 'Passing By!';
    myFigure.style.width = '60%';
  } else {
    myImage.setAttribute('src', 'img/highway.jpg');
    myHeading.textContent = 'Never ending Traffic!';
    myFigure.style.width = '40%';
  }
}