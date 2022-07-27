let btn = document.getElementById("btn").addEventListener("click", colors);
let i = 0;
let block;
let block2;
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let color3 = document.getElementById("color3");

function colors() {
  let mainBlock = document.getElementById("main");
  block = document.createElement("div");
  block2 = document.createElement("div");
  //para.className = "favorites";
  block.classList.add("root");
  // para.innerText = "Add to favorites";
  block.onclick = addtoFavorites;
  block2.classList.add("color");
  mainBlock.appendChild(block);
  //block.appendChild(para);
  mainBlock.appendChild(block2);
  r = Number(color1.value);
  g = Number(color2.value);
  b = Number(color3.value);

  block.style.backgroundColor = `rgb(${color1.value},${color2.value},${color3.value})`;
  block2.innerHTML = hexColors(r, g, b);

  hexColors(r, g, b);

  console.log(color1);
}

function hexColors(r, g, b) {
  if ((r <= 256, g <= 256, b <= 256)) {
    return "#" + r.toString(16) + g.toString(16) + b.toString(16);
  }
  return 0;
}

function addtoFavorites() {
  let favorites = document.getElementById("container");
  let colorDiv = document.querySelector(".root");
  let hex = document.querySelector(".color");
  // let text = document.querySelector(".favorites");
  // console.log(colorDiv);
  favorites.appendChild(colorDiv);
  favorites.appendChild(hex);
}
