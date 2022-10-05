'use strict';

// ******** GLOABAL VARIABLES **********

let wineArray = [];
let matchwine = [];
let clickimg = '';



// ******** DOM REFERENCES **********

let imgContainer = document.getElementById('container-event');




// ******** JS VIEWS SOURCE AS PROPERTY *******
// let imgOne = document.getElementById('imgone');
// let imgTwo = document.getElementById('imgtwo');


//  ******** CONSTRUCTOR FUNCTION ********

function Wine(name, category, fileExtension = 'png') {
  this.name = name;
  this.img = `./wineimg/${name}.${fileExtension}`;
  this.category = category;
  this.link = `./winecatalouge/${name}.html`;
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

  window.location.href = 'selectevent.html';
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
    new Wine('cab1', ['steak', 'social']);
    new Wine('syrah1', ['steak']);
    new Wine('zin1', ['chicken']);
    new Wine('pn2', ['choc']);
    new Wine('chard1', ['fish']);
    new Wine('sb1', ['choc']);
    new Wine('pg1', ['social', 'fish']);
    new Wine('sweet2', ['chicken']);

  }
  // console.log(wine);
}


function saveWine() {

  let stringwine = JSON.stringify(wineArray);
  localStorage.setItem('myWine', stringwine);
}





function bottleclick(event) {
  console.log(event.target.name);
  for (let i = 0; i < wineArray.length; i++) {
    if (wineArray[i].name === event.target.name) {

      console.log(wineArray[i].link);
      window.location.href = wineArray[i].link;
    }
  }
}

function renderWine() {

  let clicked = localStorage.getItem('clicked');
  for (let i = 0; i < wineArray.length; i++) {
    for (let j = 0; j < wineArray[i].category.length; j++) {
      // console.log(wineArray[i].category[j]);
      if (wineArray[i].category[j] === clicked) {
        console.log('we did it');

        let imgOne = document.getElementById('img-container');
        let imgOneelem = document.createElement('img');
        imgOneelem.setAttribute('src', wineArray[i].img);
        imgOneelem.setAttribute('class', 'wineselect');
        imgOneelem.setAttribute('name', wineArray[i].name);
        imgOne.appendChild(imgOneelem);
        imgOneelem.addEventListener('click', bottleclick);

      }
    }
  }
  localStorage.removeItem('clicked');
}










retrieveWine();


renderWine();

saveWine();





imgContainer.addEventListener('click', handleClick);
