





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
    
    // insert all of the if statements that will change the 
    

    //below lines are for blue
    if  (document.getElementById("chooseColor").value == "blue" && document.getElementById("chooseShade").value == "all") {

        console.log('all blue')

        redUpperLimit = 119;
        redLowerLimit = 0;
        greenUpperLimit = 119;
        greenLowerLimit = 0;
        blueUpperLimit = 255;
        blueLowerLimit = 120;

        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };

    if  (document.getElementById("chooseColor").value == "blue" && document.getElementById("chooseShade").value == "light") {

        console.log('light blue')

        redUpperLimit = 130;
        redLowerLimit = 0;
        greenUpperLimit = 255;
        greenLowerLimit = 150;
        blueUpperLimit = 255;
        blueLowerLimit = 240;

        //return `RGB(0,255,255)`  //use this line to test the extremes.


        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };

    if  (document.getElementById("chooseColor").value == "blue" && document.getElementById("chooseShade").value == "dark") {

        console.log('dark blue')

        redUpperLimit = 150;
        redLowerLimit = 0;

        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };

    if  (document.getElementById("chooseColor").value == "blue" && document.getElementById("chooseShade").value == "medium") {

        console.log('medium blue')

        redUpperLimit = 180;
        redLowerLimit = 100;

        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    //above lines are for blue

    //below lines are for brown
    //above lines are for brown
    


    //below lines are for gray
    if  (document.getElementById("chooseColor").value == "gray" && document.getElementById("chooseShade").value == "all") {

        console.log('all gray')

        return `RGB(${randomRed},${randomRed},${randomRed})`
    };

    if  (document.getElementById("chooseColor").value == "gray" && document.getElementById("chooseShade").value == "light") {

        console.log('light gray')

        redUpperLimit = 255;
        redLowerLimit = 120;

        return `RGB(${randomRed},${randomRed},${randomRed})`
    };

    if  (document.getElementById("chooseColor").value == "gray" && document.getElementById("chooseShade").value == "dark") {

        console.log('dark gray')

        redUpperLimit = 150;
        redLowerLimit = 0;

        return `RGB(${randomRed},${randomRed},${randomRed})`
    };

    if  (document.getElementById("chooseColor").value == "gray" && document.getElementById("chooseShade").value == "medium") {

        console.log('medium gray')

        redUpperLimit = 180;
        redLowerLimit = 100;

        return `RGB(${randomRed},${randomRed},${randomRed})`
    };
    //above lines are for gray

    //below lines are for red
    //above lines are for red

    //below lines are for orange
    //above lines are for orange

    
    //below lines are for green
    //above lines are for green
    
    //below lines are for turquoise
    //above lines are for turquoise
    
    
    //below lines are for pink
    //above lines are for pink

    //below lines are for purple
    //above lines are for purple
    
    
    //below lines are for yellow
    //above lines are for yellow



    if  (document.getElementById("chooseColor").value == "all" && document.getElementById("chooseShade").value == "all") {

        console.log('all, all')

        redUpperLimit = 255;
        redLowerLimit = 0;
        greenUpperLimit = 255;
        greenLowerLimit = 0;
        blueUpperLimit = 255;
        blueLowerLimit = 0;


        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    
    
    console.log('color and shade functionality have not been made yet')
    return `RGB(${randomRed},${randomGreen},${randomBlue})`;
};


function changeColor() {
    const changeColorBox = document.getElementById('colorBox');

    const randomRGB = getColor();  //Get a new random RGB color

    //console.log(randomRGB);  //Log the new color value
    
    changeColorBox.style.backgroundColor = randomRGB;  //Set the background color of the colorBox

    document.getElementById('rgbVariable').innerHTML = randomRGB;
    
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



