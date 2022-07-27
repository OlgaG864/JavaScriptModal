const searchbar = document.getElementById("search");
searchbar.addEventListener("input", search);
const list = document.querySelector(".mainlist");

const citiesDB = {
  cities: [
    "ashdod",
    "tel aviv",
    "haifa",
    "jerusalim",
    "eilat",
    "beer sheva",
    "kfar saba",
    "arad",
  ],
};

function search() {
  const newCity = searchbar.value;
  //console.log(newCity);
  box.style.display = "block";
  createCitylist(newCity, list);
  newCity.trim();
  const element = document.querySelectorAll(".li");
  if (newCity) {
    element.forEach((elem) => {
      if (elem.innerText.search(newCity) == -1) {
        elem.classList.add("hide");
        elem.innerHTML = elem.innerText;
      } else {
        elem.classList.remove("hide");
        let str = elem.innerText;
        let position = elem.innerText.search(newCity);
        elem.innerHTML = insertColor(str, position, newCity.length);
      }
    });
  } else {
    element.forEach((elem) => {
      elem.classList.remove("hide");
    });
    //console.log(element);
  }
  createCitylist();
  click();
}

function insertColor(string, position, length) {
  return (
    string.slice(0, position) +
    "<span style='color:red'>" +
    string.slice(position, position + length) +
    "</span>" +
    string.slice(position + length)
  );
}

function createCitylist(city, parent) {
  if (city) {
    citiesDB.cities.push(city);
    citiesDB.cities.sort();
    parent.innerHTML = "";
    citiesDB.cities.forEach((city) => {
      parent.innerHTML += `<li class="li">${city}</li>
      `;
    });
  }
}

function click() {
  let element = document.querySelectorAll(".li");
  element.forEach((item) => {
    item.addEventListener("click", () => (item.style.color = "blueviolet"));
  });
}
