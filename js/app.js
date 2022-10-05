'use strict';

// ******** GLOABAL VARIABLES **********
let wineArray = [];
let matchwine = [];
let clickimg = '';



// ******** DOM REFERENCES **********
let imgContainer = document.getElementById('img-container');


// ******** JS VIEWS SOURCE AS PROPERTY *******
// let imgOne = document.getElementById('imgone');
// let imgTwo = document.getElementById('imgtwo');

//  ******** CONSTRUCTOR FUNCTION ********

function Wine(name, category, fileExtension = 'png') {
  this.name = name;
  this.img = `./img/${name}.${fileExtension}`;
  this.category = category;



  wineArray.push(this);
}





//  Event Handler

function handleClick(event) {
  console.log(event.target);

  let categoryname = event.target.alt;
  clickimg = event.target.alt;
  localStorage.setItem('clicked', clickimg);
  for (let i = 0; i < wineArray.length; i++) {
    for (let j = 0; j < wineArray[i].category.length; j++) {
      wineArray[i].category[j] === categoryname;
      matchwine.push(wineArray[i].img);
    }
  }

  console.log(matchwine);
  console.log(wineArray);
  console.log(clickimg);
}


function retrieveWine() {
  let wine = localStorage.getItem('mywine');
  if (wine) {
    let parseWine = JSON.parse(wine);
    matchwine = parseWine;
  } else {
    new Wine('cab1', ['steak']);
    new Wine('cab2', ['steak']);
    new Wine('sweet1', ['fish']);
    new Wine('sweet2', ['fish']);
  }
  console.log(wine);
}


function saveWine() {

  let stringwine = JSON.stringify(wineArray);
  localStorage.setItem('myWine', stringwine);
}





let imgTwo = document.getElementById('twoWine');

function renderWine() {

  let clicked = localStorage.getItem('clicked');
  for (let i = 0; i < wineArray.length; i++) {
    for (let j = 0; j < wineArray[i].category.length; j++) {
      console.log(wineArray[i].category[j]);
      if (wineArray[i].category[j] === clicked) {
        console.log('we did it');

        let imgOne = document.getElementById('img-container');
        let imgOneelem = document.createElement('img');
        imgOneelem.setAttribute('src', wineArray[i].img);
        imgOne.appendChild(imgOneelem);
        // imgOne.src = matchwine[i].img;
        // imgTwo.src = matchwine[i].img;
        // imgOne.alt = wineArray[i].name;
        // imgTwo.alt = wineArray[i].name;
      }
    }
  }
}










retrieveWine();


renderWine();


saveWine();




imgContainer.addEventListener('click', handleClick);
