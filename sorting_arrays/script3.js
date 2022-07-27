function sortAlgorithm(array) {
  for (let i = 0; i <= array.length - 1; i++) {
    for (let j = 0; j <= array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}

console.log(sortAlgorithm(random()));

function random() {
  let array = [];
  for (i = 1; i <= 30; i++) {
    array.push(Math.floor(Math.random() * 100));
  }

  return array;
}
//console.log(random());
//let array = sortAlgorithm(random());
//console.log(array);

const button = document.getElementById("print");
button.addEventListener("click", print);

function print() {
  let elements = sortAlgorithm(random());
  const div = document.getElementById("main");
  div.innerHTML = "";
  elements.forEach((element, i) => {
    div.innerHTML += `<br>${i + 1}--*${element}`;
  });
}
