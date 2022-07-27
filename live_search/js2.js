const searchbar = document.getElementById("search");
searchbar.addEventListener("input", search);

function search() {
  //const div = document.getElementById("cities");
  const val = searchbar.value.trim();
  const element = document.querySelectorAll(".li");
  //console.dir(element);
  //console.log(element);
  box.style.display = "block";
  const li = document.createElement("li");
  const ul = document.querySelector(".mainlist");
  li.classList.add("li");
  if (val) {
    li.innerHTML = val;
    ul.prepend(li);
    element.forEach((elem) => {
      if (elem.innerText.search(val) == -1) {
        elem.classList.add("hide");
        elem.innerHTML = elem.innerText;
      } else {
        elem.classList.remove("hide");
        let str = elem.innerText;
        let position = elem.innerText.search(val);
        elem.innerHTML = insertColor(str, position, val.length);
      }
    });
  } else {
    element.forEach((elem) => {
      elem.classList.remove("hide");
    });
    //console.log(element);
  }
  click();
  //sort();
}
//console.log(this);

function insertColor(string, position, length) {
  return (
    string.slice(0, position) +
    "<span style='color:red'>" +
    string.slice(position, position + length) +
    "</span>" +
    string.slice(position + length)
  );
}

function click() {
  let element = document.querySelectorAll(".li");
  element.forEach((item) => {
    item.addEventListener("click", () => (item.style.color = "violet"));
  });
}

function sort() {
  const ul = document.querySelector(".mainlist");
  const element = document.querySelectorAll(".li");
  let arr = [];
  element.forEach((item, i) => {
    arr[i] = item.innerHTML;
  });
  arr.sort();
  console.log(arr);
  arr.forEach((item) => {
    ul.innerHTML += ` <li class="li">${item}</li>`;
  });
  //elem =arr.toString();
}
