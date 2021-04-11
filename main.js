var sideRadio = document.getElementById('side');
var mainRadio = document.getElementById('main-dish');
var dessertRadio = document.getElementById('dessert');
var entireMealRadio = document.getElementById('entire-meal');

var letsCookBtn = document.getElementById('lets-cook');
var clearBtn= document.querySelector(".clear");

var potImg = document.getElementById('pot-image');
var selectedSection = document.querySelector('.selected-meal');
var selectedString = document.getElementById("selected-meal-choice");

letsCookBtn.addEventListener("click", showMeal);
clearBtn.addEventListener("click", defaultView);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function togglePotImg() {
  selectedSection.hidden = false;
  potImg.hidden = true;
  clearBtn.hidden= false;
}

function showMeal() {
  if (sideRadio.checked)  {
    selectedString.innerText = `${sides[getRandomIndex(sides)]}!`
    togglePotImg()
  } else if (mainRadio.checked) {
    selectedString.innerText =`${mains[getRandomIndex(mains)]}!`
    togglePotImg()
  } else if (dessertRadio.checked) {
    selectedString.innerText =`${desserts[getRandomIndex(desserts)]}!`
    togglePotImg()
  } else if (entireMealRadio.checked) {
    selectedString.innerText =`${mains[getRandomIndex(mains)]} with a side of ${sides[getRandomIndex(sides)]} and ${desserts[getRandomIndex(desserts)]} for dessert!`
    togglePotImg()
  }
  resetRadioButtons([sideRadio, mainRadio, dessertRadio, entireMealRadio]);
}

function resetRadioButtons(buttons) {
  for (i = 0; i < buttons.length; i++) {
    buttons[i].checked = false;
  }
}

function defaultView() {
  resetRadioButtons([sideRadio, mainRadio, dessertRadio, entireMealRadio]);
  selectedSection.hidden = true;
  potImg.hidden = false;
  clearBtn.hidden = true;
}
