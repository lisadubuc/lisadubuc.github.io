let name = document.querySelector("#myText").value;
const displaymsg = document.querySelector('#display');

const checker = document.querySelector('#check');
checker.onclick = function () {
  myPassFunction();
}

function myPassFunction() {
  name = document.querySelector("#myText").value;
  console.log(name);
  if (name == "Death") {
    displaymsg.textContent = "You are the killer " + name;
  } else if (name == "Monster") {
    displaymsg.textContent = "go on the chase " + name;
  } else {
    displaymsg.textContent = "You are about to die  " + name;
  }

}