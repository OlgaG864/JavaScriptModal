let runners = {
  dog: {
    name: "dog",
    id: "dog",
    voice: "woof",
    img: "dog.gif",
    step: 50,
  },
  horse: {
    name: "horse",
    id: "horse",
    voice: "neigh",
    img: "horse.gif",
    step: 70,
  },
  duck: {
    name: "duck",
    id: "duck",
    voice: "quack",
    img: "duck.gif",
    step: 40,
  },
  chick: {
    name: "chick",
    id: "chick",
    voice: "cheap",
    img: "chick.gif",
    step: 30,
  },
};

const main = document.querySelector(".container");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");

console.log(main);
one.innerHTML = `<img src="imges/dog.gif.jpg" width="250px" height="150px">`;
two.innerHTML = `<img src="imges/chick.gif.gif" width="350px" height="250px">`;
three.innerHTML = `<img src="imges/dug.gif.jpg" width="350px" height="250px">`;
four.innerHTML = `<img src="imges/horse.gif.jpg" width="250px" height="150px">`;

one.style.position = "absolute";

const button = document.getElementById("button");
button.addEventListener("click", game);

//setInterval(start, 1000);

let goDog = 0;
one.style.left = goDog;
let goChick = 0;
two.style.left = goChick;
let goDuck = 0;
three.style.left = goDuck;
let goHorse = 0;
four.style.left = goHorse;

//three.innerHTML = runners.duck.voice;

// console.log(x);

function game() {
  //const my_interval = setInterval(start, 1000);
  main.style.backgroundImage = "none";
  one.style.display = "block";
  two.style.display = "block";
  three.style.display = "block";
  four.style.display = "block";
  //let number = Math.floor(Math.random() * 5);
  number = 1;
  //console.log(number);

  function startDog() {
    if (goDog <= 900) {
      goDog += 50;
      one.style.left = goDog + "px";
    } else {
      let block = document.createElement("p");
      block.classList.add("voice");
      main.appendChild(block);
      block.innerHTML = runners.dog.voice;
      myStopFunction();
    }
    //one.innerHTML = runners.dog.voice;
  }

  function startHorse() {
    if (goHorse <= 900) {
      goHorse += 70;
      four.style.left = goHorse + "px";
    } else {
      let block = document.createElement("p");
      block.classList.add("voice");
      main.appendChild(block);
      block.innerHTML = runners.horse.voice;
      myStopFunction();
    }
    // four.innerHTML = runners.horse.voice;
  }

  function startChick() {
    if (goChick <= 900) {
      goChick += 30;
      two.style.left = goChick + "px";
    } else {
      let block = document.createElement("p");
      block.classList.add("voice");
      main.appendChild(block);
      block.innerHTML = runners.chick.voice;
      myStopFunction();
    }
    //two.innerHTML = runners.chick.voice;
  }
  function startDuck() {
    if (goDuck <= 900) {
      goDuck += 40;
      three.style.left = goDuck + "px";
    } else {
      let block = document.createElement("p");
      block.classList.add("voice");
      main.appendChild(block);
      block.innerHTML = runners.duck.voice;
      myStopFunction();
    }

    //three.innerHTML = runners.duck.voice;
  }

  let my_interval;

  switch (number) {
    case 1:
      my_interval = setInterval(startDog, 1000);
      break;
    case 2:
      my_interval = setInterval(startDuck, 1000);
      break;
    case 3:
      my_interval = setInterval(startHorse, 1000);
      break;
    case 4:
      my_interval = setInterval(startChick, 1000);
  }
  function myStopFunction() {
    clearInterval(my_interval);
  }
}
