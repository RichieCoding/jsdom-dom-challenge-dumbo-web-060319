// 1) Number Counter 

function incrementTimer() {
  const counter = document.querySelector("#counter");
  let timer = 0
  setInterval(function(){
    timer = timer + 1;
    counter.innerHTML = timer;
  }, 1000);
}

incrementTimer();

// 2) Increment Number with '+' and '-' button

function plusAndMinusButton() {
  const addButton = document.getElementById('+');
  const minusButton = document.getElementById('-');
  const counter = document.querySelector('#counter')

  addButton.addEventListener('click', function(){
    counter.textContent++;
  });

  minusButton.addEventListener('click', function(){
    counter.textContent--;
  });
}

plusAndMinusButton();

// 3) Like an indiviual number of the counter -- 

const likeButton = document.getElementById('<3');
const counter = document.querySelector("#counter");
const ul = document.querySelector('.likes')

let num = 0
if (num > 0) {
  num = 0
} else {
  likeButton.addEventListener('click', function(){
    num++
    let lis = document.createElement('li');
    lis.innerHTML = `${counter.textContent} has been liked ${num} times`;
    ul.appendChild(lis);
})
}




// 4) Pause game and disable all buttons except pause button, and change text to resume;
