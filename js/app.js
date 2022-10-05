'use strict';

// ******** GLOABAL VARIABLES **********
// let wineArray = [];
// let indexArray = [];



// ******** DOM REFERENCES **********
// let imgContainer = document.getElementById('img-container');


// ******** JS VIEWS SOURCE AS PROPERTY *******
// let imgOne = document.getElementById('imgone');
// let imgTwo = document.getElementById('imgtwo');
// let imgThree = document.getElementById('imgthree');
// let imgFour = document.getElementById('imgone');
// let imgFive = document.getElementById('imgtwo');
// let imgSix = document.getElementById('imgthree');

//  ******** CONSTRUCTOR FUNCTION ********

// function Wine(name, redWine, whiteWine, fileExtension = 'jpg') {
//   this.name = name;
//   this.img = `./img/${name}.${fileExtension}`;
//   this.redWine = redWine;
//   this.whiteWine = whiteWine;

//   wineArray.push(this);
// }

// ******* HELPER FUNCTION *******

// function renderImgs() {
  // while (!indexArray.includes(img)) {
  // indexArray.push(img);
// }
// }

// let imgOneIndex = indexArray.shift();
// let imgTwoIndex = indexArray.shift();

// imgOne.src = wineArray[imgOneIndex].img;
// imgTwo.src = wineArray[imgTwoIndex].img;

// imgOne.alt = wineArray[imgOneIndex].name;
// imgTwo.alt = wineArray[imgTwoIndex].name;


//  ******** EVENT HANDLERS ********

// function handleClick(event) {
//   console.dir(event.target);
//   let redWineClicked = event.target.alt;
//   let whiteWineClicked = event.target.alt;

//   console.log('redWine clicked >>', redWineClicked);

//   for (let i = 0; i < wineArray.length; i++) {
//     if (wineArray[i].name === redWineClicked)
//       if (wineArray[i].name === whiteWineClicked) {
//         wineArray[i].redWineClicked++;
//         wineArray[i].whiteWineClicked++;
//       }
//   }
// }


// renderImgs();

// //  ********* LOCAL STORAGE BEGINS HERE ********

// //  STEP 1: ADD TO LOCAL STORAGE
// let StringifiedWine = JSON.stringify(wineArray);
// console.log('stringified wine >>>', StringifiedWine);

// //  STEP 2: ADD TO LOCAL STORAGE
// localStorage.setItem('Wine', StringifiedWine);



// //  STEP 3: PULL DATA OUT OF LOCAL STORAGE
// let retrievedWine = localStorage.getItem('myWine');
// console.log('retrievedWine >>>', retrievedWine);

// // STEP 4: PARSE MY DATA INTO CODE MY APP CAN USE
// let parsedWine = JSON.parse(retrievedWine);

// //  *********** EXECUTABLE CODE ********

// // ! OBJECT CREATION

// if (retrievedWine) {
//   wineArray = parsedWine;
// } else {
//   new Wine('chicken2');
//   new Wine('steak2');
//   new Wine('chocolate', 'png');
//   new Wine('fish');
//   new Wine('social');
// }

// renderImgs();

// imgContainer.addEventListener('click', handleClick);
