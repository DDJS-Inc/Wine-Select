'use strict';

// ******** GLOABAL VARIABLES **********
<<<<<<< HEAD
// let wineArray = [];
// let indexArray = [];
=======
let wineArray = [];
let matchwine = [];
let clickimg = '';
>>>>>>> 20e2523c0ae9663891d59b4e5db5319083fd7f7e



// ******** DOM REFERENCES **********
// let imgContainer = document.getElementById('img-container');


// ******** JS VIEWS SOURCE AS PROPERTY *******
// let imgOne = document.getElementById('imgone');
// let imgTwo = document.getElementById('imgtwo');
<<<<<<< HEAD
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
=======

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
>>>>>>> 20e2523c0ae9663891d59b4e5db5319083fd7f7e
