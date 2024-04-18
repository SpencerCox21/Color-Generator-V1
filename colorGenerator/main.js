





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

};


function ifColorSelected() {

    
    // insert all of the if statements that will change the 
    

    
    //below lines are for red
    if  (document.getElementById("chooseColor").value == "red" && document.getElementById("chooseShade").value == "all") {

        console.log('all red')

        redUpperLimit = 255;
        redLowerLimit = 200;
        greenUpperLimit = 100;
        greenLowerLimit = 0;
        blueUpperLimit = 100;
        blueLowerLimit = 0;
        
        getColor();

        //return `RGB(255,100,0)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "red" && document.getElementById("chooseShade").value == "light") {
        
        console.log('light red')
        
        redUpperLimit = 255;
        redLowerLimit = 220;
        greenUpperLimit = 110;
        greenLowerLimit = 70;
        blueUpperLimit = 110;
        blueLowerLimit = 70;
        
        getColor();

        //return `RGB(255,70,110)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "red" && document.getElementById("chooseShade").value == "dark") {
        
        console.log('dark red')
        
        redUpperLimit = 220;
        redLowerLimit = 150;
        greenUpperLimit = 70;
        greenLowerLimit = 0;
        blueUpperLimit = 70;
        blueLowerLimit = 0;
        
        getColor();

        //return `RGB(150,70,70)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "red" && document.getElementById("chooseShade").value == "medium") {
        
        console.log('medium red')
        
        redUpperLimit = 255;
        redLowerLimit = 210;
        greenUpperLimit = 70;
        greenLowerLimit = 0;
        blueUpperLimit = 70;
        blueLowerLimit = 0;
        
        getColor();

        //return `RGB(210,50,0)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    //above lines are for red
    
    //below lines are for orange
    if  (document.getElementById("chooseColor").value == "b" && document.getElementById("chooseShade").value == "all") {
        
        console.log('all ')
        
        redUpperLimit = 119;
        redLowerLimit = 0;
        greenUpperLimit = 119;
        greenLowerLimit = 0;
        blueUpperLimit = 255;
        blueLowerLimit = 120;
        
        getColor();

        //return `RGB(0,0,0)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "b" && document.getElementById("chooseShade").value == "light") {
        
        console.log('light blue')
        
        redUpperLimit = 130;
        redLowerLimit = 0;
        greenUpperLimit = 255;
        greenLowerLimit = 150;
        blueUpperLimit = 255;
        blueLowerLimit = 240;
        
        getColor();

        //return `RGB(0,0,0)`  //use this line to test the extremes.
        
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "b" && document.getElementById("chooseShade").value == "dark") {
        
        console.log('dark b')
        
        redUpperLimit = 130;
        redLowerLimit = 0;
        greenUpperLimit = 255;
        greenLowerLimit = 150;
        blueUpperLimit = 255;
        blueLowerLimit = 240;
        
        getColor();

        //return `RGB(0,0,0)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "b" && document.getElementById("chooseShade").value == "medium") {
        
        console.log('medium blue')
        
        redUpperLimit = 130;
        redLowerLimit = 0;
        greenUpperLimit = 255;
        greenLowerLimit = 150;
        blueUpperLimit = 255;
        blueLowerLimit = 240;
        
        getColor();

        //return `RGB(0,0,0)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    //above lines are for orange
    
    //below lines are for yellow
    if  (document.getElementById("chooseColor").value == "b" && document.getElementById("chooseShade").value == "all") {
        
        console.log('all blue')
        
        redUpperLimit = 119;
        redLowerLimit = 0;
        greenUpperLimit = 119;
        greenLowerLimit = 0;
        blueUpperLimit = 255;
        blueLowerLimit = 120;
        
        getColor();

        //return `RGB(0,0,0)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "be" && document.getElementById("chooseShade").value == "light") {
        
        console.log('light blue')
        
        redUpperLimit = 130;
        redLowerLimit = 0;
        greenUpperLimit = 255;
        greenLowerLimit = 150;
        blueUpperLimit = 255;
        blueLowerLimit = 240;
        
        getColor();

        //return `RGB(0,0,0)`  //use this line to test the extremes.
        
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "ble" && document.getElementById("chooseShade").value == "dark") {
        
        console.log('dark blue')
        
        redUpperLimit = 130;
        redLowerLimit = 0;
        greenUpperLimit = 255;
        greenLowerLimit = 150;
        blueUpperLimit = 255;
        blueLowerLimit = 240;
        
        getColor();

        //return `RGB(0,0,0)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "ble" && document.getElementById("chooseShade").value == "medium") {
        
        console.log('medium blue')
        
        redUpperLimit = 130;
        redLowerLimit = 0;
        greenUpperLimit = 255;
        greenLowerLimit = 150;
        blueUpperLimit = 255;
        blueLowerLimit = 240;
        
        getColor();

        //return `RGB(0,0,0)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    //above lines are for yellow
    
    //below lines are for green
    if  (document.getElementById("chooseColor").value == "ble" && document.getElementById("chooseShade").value == "all") {
        
        console.log('all blue')
        
        redUpperLimit = 119;
        redLowerLimit = 0;
        greenUpperLimit = 119;
        greenLowerLimit = 0;
        blueUpperLimit = 255;
        blueLowerLimit = 120;
        
        getColor();

        //return `RGB(0,0,0)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "be" && document.getElementById("chooseShade").value == "light") {
        
        console.log('light blue')
        
        redUpperLimit = 130;
        redLowerLimit = 0;
        greenUpperLimit = 255;
        greenLowerLimit = 150;
        blueUpperLimit = 255;
        blueLowerLimit = 240;
        
        getColor();

        //return `RGB(0,0,0)`  //use this line to test the extremes.
        
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "ble" && document.getElementById("chooseShade").value == "dark") {
        
        console.log('dark blue')
        
        redUpperLimit = 130;
        redLowerLimit = 0;
        greenUpperLimit = 255;
        greenLowerLimit = 150;
        blueUpperLimit = 255;
        blueLowerLimit = 240;
        
        getColor();

        //return `RGB(0,0,0)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "ble" && document.getElementById("chooseShade").value == "medium") {
        
        console.log('medium blue')
        
        redUpperLimit = 130;
        redLowerLimit = 0;
        greenUpperLimit = 255;
        greenLowerLimit = 150;
        blueUpperLimit = 255;
        blueLowerLimit = 240;
        
        getColor();

        //return `RGB(0,0,0)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    //above lines are for green
    
    //below lines are for turquoise
    if  (document.getElementById("chooseColor").value == "ble" && document.getElementById("chooseShade").value == "all") {
        
        console.log('all blue')
        
        redUpperLimit = 119;
        redLowerLimit = 0;
        greenUpperLimit = 119;
        greenLowerLimit = 0;
        blueUpperLimit = 255;
        blueLowerLimit = 120;
        
        getColor();

        //return `RGB(0,0,0)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "ble" && document.getElementById("chooseShade").value == "light") {
        
        console.log('light blue')
        
        redUpperLimit = 130;
        redLowerLimit = 0;
        greenUpperLimit = 255;
        greenLowerLimit = 150;
        blueUpperLimit = 255;
        blueLowerLimit = 240;
        
        getColor();

        //return `RGB(0,0,0)`  //use this line to test the extremes.
        
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "ble" && document.getElementById("chooseShade").value == "dark") {
        
        console.log('dark blue')
        
        redUpperLimit = 130;
        redLowerLimit = 0;
        greenUpperLimit = 255;
        greenLowerLimit = 150;
        blueUpperLimit = 255;
        blueLowerLimit = 240;
        
        getColor();

        //return `RGB(0,0,0)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "ble" && document.getElementById("chooseShade").value == "medium") {
        
        console.log('medium blue')
        
        redUpperLimit = 130;
        redLowerLimit = 0;
        greenUpperLimit = 255;
        greenLowerLimit = 150;
        blueUpperLimit = 255;
        blueLowerLimit = 240;
        
        getColor();

        //return `RGB(0,0,0)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    //above lines are for turquoise
    
    //below lines are for blue
    if  (document.getElementById("chooseColor").value == "blue" && document.getElementById("chooseShade").value == "all") {

        console.log('all blue')
        
        redUpperLimit = 119;
        redLowerLimit = 0;
        greenUpperLimit = 119;
        greenLowerLimit = 0;
        blueUpperLimit = 255;
        blueLowerLimit = 120;
        
        getColor();

        //return `RGB(0,0,0)`  //use this line to test the extremes.
        
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
        
        getColor();

        //return `RGB(0,0,0)`  //use this line to test the extremes.
        
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "blue" && document.getElementById("chooseShade").value == "dark") {
        
        console.log('dark blue')
        
        redUpperLimit = 60;
        redLowerLimit = 0;
        greenUpperLimit = 160;
        greenLowerLimit = 0;
        blueUpperLimit = 255;
        blueLowerLimit = 150;
        
        getColor();

        //return `RGB(60,0,255)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "blue" && document.getElementById("chooseShade").value == "medium") {
        
        console.log('medium blue')
        
        redUpperLimit = 70;
        redLowerLimit = 0;
        greenUpperLimit = 125;
        greenLowerLimit = 0;
        blueUpperLimit = 255;
        blueLowerLimit = 190;
        
        getColor();

        //return `RGB(0,0,0)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    //above lines are for blue
    
    //below lines are for purple
    if  (document.getElementById("chooseColor").value == "bue" && document.getElementById("chooseShade").value == "all") {
        
        console.log('all blue')
        
        redUpperLimit = 119;
        redLowerLimit = 0;
        greenUpperLimit = 119;
        greenLowerLimit = 0;
        blueUpperLimit = 255;
        blueLowerLimit = 120;
        
        getColor();

        //return `RGB(0,0,0)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "ble" && document.getElementById("chooseShade").value == "light") {
        
        console.log('light blue')
        
        redUpperLimit = 130;
        redLowerLimit = 0;
        greenUpperLimit = 255;
        greenLowerLimit = 150;
        blueUpperLimit = 255;
        blueLowerLimit = 240;
        
        getColor();

        //return `RGB(0,0,0)`  //use this line to test the extremes.
        
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "ble" && document.getElementById("chooseShade").value == "dark") {
        
        console.log('dark blue')
        
        redUpperLimit = 130;
        redLowerLimit = 0;
        greenUpperLimit = 255;
        greenLowerLimit = 150;
        blueUpperLimit = 255;
        blueLowerLimit = 240;
        
        getColor();

        //return `RGB(0,0,0)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "ble" && document.getElementById("chooseShade").value == "medium") {
        
        console.log('medium blue')
        
        redUpperLimit = 130;
        redLowerLimit = 0;
        greenUpperLimit = 255;
        greenLowerLimit = 150;
        blueUpperLimit = 255;
        blueLowerLimit = 240;
        
        getColor();

        //return `RGB(0,0,0)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    //above lines are for purple
    
    //below lines are for pink
    if  (document.getElementById("chooseColor").value == "ble" && document.getElementById("chooseShade").value == "all") {
        
        console.log('all blue')
        
        redUpperLimit = 119;
        redLowerLimit = 0;
        greenUpperLimit = 119;
        greenLowerLimit = 0;
        blueUpperLimit = 255;
        blueLowerLimit = 120;
        
        getColor();

        //return `RGB(0,0,0)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "ble" && document.getElementById("chooseShade").value == "light") {
        
        console.log('light blue')
        
        redUpperLimit = 130;
        redLowerLimit = 0;
        greenUpperLimit = 255;
        greenLowerLimit = 150;
        blueUpperLimit = 255;
        blueLowerLimit = 240;
        
        getColor();

        //return `RGB(0,0,0)`  //use this line to test the extremes.
        
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "ble" && document.getElementById("chooseShade").value == "dark") {
        
        console.log('dark blue')
        
        redUpperLimit = 130;
        redLowerLimit = 0;
        greenUpperLimit = 255;
        greenLowerLimit = 150;
        blueUpperLimit = 255;
        blueLowerLimit = 240;
        
        getColor();

        //return `RGB(0,0,0)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "ble" && document.getElementById("chooseShade").value == "medium") {
        
        console.log('medium blue')
        
        redUpperLimit = 130;
        redLowerLimit = 0;
        greenUpperLimit = 255;
        greenLowerLimit = 150;
        blueUpperLimit = 255;
        blueLowerLimit = 240;
        
        getColor();

        //return `RGB(0,0,0)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    //above lines are for pink
    
    //below lines are for brown
    if  (document.getElementById("chooseColor").value == "brown" && document.getElementById("chooseShade").value == "all") {
        
        console.log('all brown')
        
        redUpperLimit = 170;
        redLowerLimit = 120;
        greenUpperLimit = 110;
        greenLowerLimit = 45;
        blueUpperLimit = 70;
        blueLowerLimit = 30;
        
        getColor();

        //return `RGB(170,45,30)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "brown" && document.getElementById("chooseShade").value == "light") {
        
        console.log('light brown')
        
        redUpperLimit = 170;
        redLowerLimit = 140;
        greenUpperLimit = 130;
        greenLowerLimit = 80;
        blueUpperLimit = 100;
        blueLowerLimit = 60;
        
        getColor();

        //return `RGB(170,80,60)`  //use this line to test the extremes.
        
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "brown" && document.getElementById("chooseShade").value == "dark") {
        
        console.log('dark brown')
        
        redUpperLimit = 140;
        redLowerLimit = 80;
        greenUpperLimit = 50;
        greenLowerLimit = 0;
        blueUpperLimit = 50;
        blueLowerLimit = 0;
        
        getColor();

        //return `RGB(80,50,0)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "brown" && document.getElementById("chooseShade").value == "medium") {
        
        console.log('medium brown')
        
        redUpperLimit = 150;
        redLowerLimit = 110;
        greenUpperLimit = 90;
        greenLowerLimit = 30;
        blueUpperLimit = 60;
        blueLowerLimit = 30;
        
        getColor();

        //return `RGB(150,90,30)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    //above lines are for brown
    
    //below lines are for gray
    if  (document.getElementById("chooseColor").value == "gray" && document.getElementById("chooseShade").value == "all") {
        
        console.log('all gray')

        getColor();
        
        //return `RGB(0,0,0)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomRed},${randomRed})`
    };
    
    if  (document.getElementById("chooseColor").value == "gray" && document.getElementById("chooseShade").value == "light") {
        
        console.log('light gray')
        
        redUpperLimit = 255;
        redLowerLimit = 160;

        getColor();
        
        //return `RGB(0,0,0)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomRed},${randomRed})`
    };
    
    if  (document.getElementById("chooseColor").value == "gray" && document.getElementById("chooseShade").value == "dark") {
        
        console.log('dark gray')
        
        redUpperLimit = 140;
        redLowerLimit = 0;
        
        getColor();

        //return `RGB(0,0,0)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomRed},${randomRed})`
    };
    
    if  (document.getElementById("chooseColor").value == "gray" && document.getElementById("chooseShade").value == "medium") {
        
        console.log('medium gray')
        
        redUpperLimit = 180;
        redLowerLimit = 100;
        
        getColor();

        //return `RGB(0,0,0)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomRed},${randomRed})`
    };
    //above lines are for gray
    
    
    
    //below lines are for all colors
    if  (document.getElementById("chooseColor").value == "all" && document.getElementById("chooseShade").value == "all") {
        
        console.log('all, all')
        
        redUpperLimit = 255;
        redLowerLimit = 0;
        greenUpperLimit = 255;
        greenLowerLimit = 0;
        blueUpperLimit = 255;
        blueLowerLimit = 0;

        getColor();

        //return `RGB(0,0,0)`  //use this line to test the extremes.

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

        getColor();

        //return `RGB(0,0,0)`  //use this line to test the extremes.


        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };

    if  (document.getElementById("chooseColor").value == "blue" && document.getElementById("chooseShade").value == "dark") {

        console.log('dark blue')

        redUpperLimit = 130;
        redLowerLimit = 0;
        greenUpperLimit = 255;
        greenLowerLimit = 150;
        blueUpperLimit = 255;
        blueLowerLimit = 240;

        getColor();

        //return `RGB(0,0,0)`  //use this line to test the extremes.

        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };

    if  (document.getElementById("chooseColor").value == "blue" && document.getElementById("chooseShade").value == "medium") {

        console.log('medium blue')

        redUpperLimit = 130;
        redLowerLimit = 0;
        greenUpperLimit = 255;
        greenLowerLimit = 150;
        blueUpperLimit = 255;
        blueLowerLimit = 240;

        getColor();

        //return `RGB(0,0,0)`  //use this line to test the extremes.

        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };

    //above lines are for all colors
    
    
    
    console.log('color and shade functionality have not been made yet')
    getColor();
    return `RGB(${randomRed},${randomGreen},${randomBlue})`;
};


function changeColor() {
    const changeColorBox = document.getElementById('colorBox');

    const randomRGB = ifColorSelected();  //Get a new random RGB color

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



