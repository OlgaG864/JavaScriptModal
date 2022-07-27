let json_ar = [
  {
    flag: 0,
    name: "Bill Gates",
    worth: "$90B",
    birth_year: "1955",
    source: "microsoft",
    country: "USA",
    image:
      "https://specials-images.forbesimg.com/imageserve/59d502f931358e542c034e76/200x200.jpg?background=000000&cropX1=245&cropX2=2420&cropY1=636&cropY2=2813",
  },
  {
    flag: 0,
    name: "Warren Buffett",
    worth: "$84B",
    birth_year: "1931",
    source: "Berkshire Hathaway",
    country: "USA",
    image:
      "https://specials-images.forbesimg.com/imageserve/59d5055931358e542c034ead/200x200.jpg?background=000000&cropX1=46&cropX2=693&cropY1=159&cropY2=806",
  },
  {
    flag: 0,
    name: "Mark Zuckerberg",
    worth: "$71B",
    birth_year: "1984",
    source: "Facebook",
    country: "USA",
    image:
      "https://specials-images.forbesimg.com/imageserve/59d5062131358e542c034eb7/200x200.jpg?background=000000&cropX1=419&cropX2=1409&cropY1=53&cropY2=1044",
  },
  {
    flag: 0,
    name: "Larry Ellison",
    worth: "$57B",
    birth_year: "1945",
    source: "Sun, Oracle",
    country: "USA",
    image:
      "https://specials-images.forbesimg.com/imageserve/59d5069b31358e542c034ec1/200x200.jpg?background=000000&cropX1=0&cropX2=2000&cropY1=227&cropY2=2228",
  },
  {
    flag: 0,
    name: "Michael Bloomberg",
    worth: "$50B",
    birth_year: "1942",
    source: "Bloomberg",
    country: "USA",
    image:
      "https://specials-images.forbesimg.com/imageserve/58c1d278a7ea431f321add1f/200x200.jpg?background=000000&cropX1=0&cropX2=744&cropY1=40&cropY2=784",
  },
];

/*let arr = [3, 4, 5, 6];

let modifiedArr = arr.map(function(element){
    return element *3;
});*/

const mainDiv = document.querySelector(".main");

json_ar = json_ar.map(function (element) {
  mainDiv.innerHTML += ` <div class="card" style="width: 18rem">
    <img
      class="card-img-top"
      src=${element.image}
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title">${element.name}</h5>
      <p class="card-text">
        ${element.country}
        ${element.worth}
        ${element.source}.
      </p>
      `;
});

//let click = false;

json_ar = json_ar.filter(function changeImage() {
  let clickablelist = document.querySelectorAll(".card");
  //console.log(clickablelist);
  clickablelist.forEach((item) => {
    item.addEventListener("click", () => {
      item.style.display = "none";
    });
  });

  for (let i = 0; i < clickablelist.length; i++) {
    clickablelist[i].style.cursor = "pointer";
  }
});

/*function changeImage() {
  let clickablelist = document.querySelectorAll(".card");
  //console.log(clickablelist);
  clickablelist.forEach((item) => {
    item.addEventListener("click", () => {
      item.style.display = "none";
    });
  });

  for (let i = 0; i < clickablelist.length; i++) {
    clickablelist[i].style.cursor = "pointer";
  }
}
changeImage();*/
