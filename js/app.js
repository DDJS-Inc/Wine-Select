'use strict';

// ******** GLOABAL VARIABLES **********
let wineArray = [];



// ******** DOM REFERENCES **********
let imgContainer = document.getElementById('img-container');


// ******** JS VIEWS SOURCE AS PROPERTY *******
let imgOne = document.getElementById('imgone');
let imgTwo = document.getElementById('imgtwo');
// let imgThree = document.getElementById('imgthree');
// let imgFour = document.getElementById('imgone');
// let imgFive = document.getElementById('imgtwo');
// let imgSix = document.getElementById('imgthree');

//  ******** CONSTRUCTOR FUNCTION ********

function Wine(name, catalog, event, favoriteWine, redWine, whiteWine, prefWine, selectedWine, fileExtension = 'jpg') {
  this.name = name;
  this.img = `./img/${name}.${fileExtension}`;
  this.catalog = catalog;
  this.event = event;
  this.favoriteWine = favoriteWine;
  this.redWine = redWine;
  this.whiteWine = whiteWine;
  this.prefWine = prefWine;
  this.selectedWine = selectedWine;


  wineArray.push(this);
}
