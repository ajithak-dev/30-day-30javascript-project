const arr = [];
const grid = document.getElementsByClassName("grid");
for (i = 0; i < grid.length; i++) {
  arr.push(grid[i]);
}

function match(clickedElements) {
  // Check if exactly two elements are passed
  if (clickedElements.length !== 2) {
    return; // Exit function if not exactly two elements
  }

  console.log("Match function called with:", clickedElements);

  // Get the DOM elements based on their IDs
  const ele1 = clickedElements[0].id;
  const ele2 = clickedElements[1].id;
  // Check if elements are found
  if (!ele1 || !ele2) {
    console.log("One or more elements not found.");
    return;
  }

  // Compare elements
  if (ele1 === ele2) {
    console.log("Match found!");

    // Apply styling or game logic for matched elements
    clickedElements[0].classList.add("end-card");
    clickedElements[1].classList.add("end-card");
  } else {
    console.log("No match found.");
  }
}

const items = [
  ["asset/1.png", 1],
  ["asset/2.png", 2],
  ["asset/3.png", 3],
  ["asset/4.png", 4],
  ["asset/5.png", 5],
  ["asset/6.png", 6],
  ["asset/7.png", 7],
  ["asset/8.png", 8],
  ["asset/1.png", 1],
  ["asset/2.png", 2],
  ["asset/3.png", 3],
  ["asset/4.png", 4],
  ["asset/5.png", 5],
  ["asset/6.png", 6],
  ["asset/7.png", 7],
  ["asset/8.png", 8],
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

document.addEventListener("DOMContentLoaded", (event) => {
  let gridElements = document.querySelectorAll(".grid");
  const shuffledItems = shuffle(items);

  gridElements.forEach((gridElement, index) => {
    gridElement.classList.add("front-card");
    gridElement.dataset.image = shuffledItems[index][0];
    gridElement.id = `item-${shuffledItems[index][1]}`;
    arr.push(gridElement);
  });
});

const idarr = []; // Declare idarr globally

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("grid")) {
    const gridElement = event.target;

    idarr.push(gridElement);
    console.log(idarr);

    gridElement.style.backgroundImage = `url(${gridElement.dataset.image})`;
    gridElement.classList.remove("front-card");

    setTimeout(() => {
      // Reset grid appearance
      gridElement.style.backgroundImage = "";
      gridElement.classList.add("front-card");
    }, 500);
    if (idarr.length == 2) {
      match(idarr);
      idarr.length = 0;
    }
  }
});
