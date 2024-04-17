





let redUpperLimit = 255;
let greenUpperLimit = 255;
let blueUpperLimit = 255;

let redLowerLimit = 0;
let greenLowerLimit = 0;
let blueLowerLimit = 0;

let randomRed = 0;
let randomGreen = 0;
let randomBlue = 0;



const newColorBtn = document.getElementById('newColorBtn');
//newColorBtn.addEventListener("click", getColor);
newColorBtn.addEventListener("click", changeColor);





function getRed(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function getGreen(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function getBlue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};




function getColor() {
    randomRed = getRed(redLowerLimit, redUpperLimit);  //Get new random red within upper and lower limits
    randomGreen = getGreen(greenLowerLimit, greenUpperLimit);  //Get new random green within upper and lower limits
    randomBlue = getBlue(blueLowerLimit, blueUpperLimit);  //Get new random blue within upper and lower limits
    
    return `rgb(${randomRed},${randomGreen},${randomBlue})`;
};


function changeColor() {
    const changeColorBox = document.getElementById('colorBox');

    const randomRGB = getColor();  //Get a new random RGB color

    console.log(randomRGB);  //Log the new color value
    
    changeColorBox.style.backgroundColor = randomRGB;  //Set the background color of the colorBox
    
    //console.log("Background color:", changeColorBox.style.backgroundColor);  //Log the background color of the element
    
    //console.log("Computed color:", getComputedStyle(changeColorBox).backgroundColor);  //Log the background color after it should have changed.
}



/*
function changeColor() {
    let newColor = `${randomRGB}`;

    const changeColorBox = document.getElementById('colorBox');
    
    changeColorBox.style.setProperty('background-color', newColor);

    console.log(newColor);
}
*/



