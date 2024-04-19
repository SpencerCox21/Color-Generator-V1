





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


function getRandomRed() {
    randomRed = getRed(redLowerLimit, redUpperLimit);  //Get new random red within upper and lower limits
};

function getRandomGreen() {
    randomRed = getRed(redLowerLimit, redUpperLimit);  //Get new random red within upper and lower limits
};

function getRandomBlue() {
    randomRed = getRed(redLowerLimit, redUpperLimit);  //Get new random red within upper and lower limits
};



function changeColor() {
    const changeColorBox = document.getElementById('colorBox');

    const randomRGB = ifColorSelected();  //Get a new random RGB color
    
    changeColorBox.style.backgroundColor = randomRGB;  //Set the background color of the colorBox

    document.getElementById('rgbVariable').innerHTML = randomRGB;
}



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
    if  (document.getElementById("chooseColor").value == "orange" && document.getElementById("chooseShade").value == "all") {
        
        console.log('all orange')
        
        redUpperLimit = 255;
        redLowerLimit = 240;
        greenUpperLimit = 200;
        greenLowerLimit = 70;
        blueUpperLimit = 50;
        blueLowerLimit = 0;
        
        getColor();

        //return `RGB(255,70,0)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "orange" && document.getElementById("chooseShade").value == "light") {
        
        console.log('light orange')
        
        redUpperLimit = 255;
        redLowerLimit = 240;
        greenUpperLimit = 200;
        greenLowerLimit = 140;
        blueUpperLimit = 50;
        blueLowerLimit = 0;
        
        getColor();

        //return `RGB(255,130,50)`  //use this line to test the extremes.
        
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "orange" && document.getElementById("chooseShade").value == "dark") {
        
        console.log('dark orange')
        
        redUpperLimit = 255;
        redLowerLimit = 240;
        greenUpperLimit = 140;
        greenLowerLimit = 70;
        blueUpperLimit = 50;
        blueLowerLimit = 0;
        
        getColor();

        //return `RGB(0,0,0)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "orange" && document.getElementById("chooseShade").value == "medium") {
        
        console.log('medium orange')
        
        redUpperLimit = 255;
        redLowerLimit = 240;
        greenUpperLimit = 180;
        greenLowerLimit = 100;
        blueUpperLimit = 50;
        blueLowerLimit = 0;
        
        getColor();

        //return `RGB(255,180,50)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    //above lines are for orange
    
    //below lines are for yellow
    if  (document.getElementById("chooseColor").value == "yellow" && document.getElementById("chooseShade").value == "all") {
        
        console.log('all yellow')
        
        redUpperLimit = 255;
        redLowerLimit = 220;
        greenUpperLimit = 255;
        greenLowerLimit = 210;
        blueUpperLimit = 150;
        blueLowerLimit = 0;
        
        getColor();

        //return `RGB(220,210,150)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "yellow" && document.getElementById("chooseShade").value == "light") {
        
        console.log('light yellow')
        
        redUpperLimit = 255;
        redLowerLimit = 240;
        greenUpperLimit = 255;
        greenLowerLimit = 230;
        blueUpperLimit = 150;
        blueLowerLimit = 0;
        
        getColor();

        //return `RGB(240,255,150)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "yellow" && document.getElementById("chooseShade").value == "dark") {
        
        console.log('dark yellow')
        
        redUpperLimit = 255;
        redLowerLimit = 200;
        greenUpperLimit = 230;
        greenLowerLimit = 190;
        blueUpperLimit = 50;
        blueLowerLimit = 0;
        
        getColor();

        //return `RGB(200,190,50)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "yellow" && document.getElementById("chooseShade").value == "medium") {
        
        console.log('medium yellow')
        
        redUpperLimit = 255;
        redLowerLimit = 230;
        greenUpperLimit = 255;
        greenLowerLimit = 230;
        blueUpperLimit = 50;
        blueLowerLimit = 0;
        
        getColor();

        //return `RGB(0,0,0)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    //above lines are for yellow
    
    //below lines are for green
    if  (document.getElementById("chooseColor").value == "green" && document.getElementById("chooseShade").value == "all") {
        
        console.log('all green')
        
        redUpperLimit = 120;
        redLowerLimit = 0;
        greenUpperLimit = 255;
        greenLowerLimit = 130;
        blueUpperLimit = 100;
        blueLowerLimit = 0;
        
        getColor();

        //return `RGB(120,130,100)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "green" && document.getElementById("chooseShade").value == "light") {
        
        console.log('light green')
        
        redUpperLimit = 180;
        redLowerLimit = 100;
        greenUpperLimit = 255;
        greenLowerLimit = 220;
        blueUpperLimit = 180;
        blueLowerLimit = 100;
        
        getColor();

        //return `RGB(100,220,100)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "green" && document.getElementById("chooseShade").value == "dark") {
        
        console.log('dark green')
        
        redUpperLimit = 60;
        redLowerLimit = 0;
        greenUpperLimit = 180;
        greenLowerLimit = 80;
        blueUpperLimit = 60;
        blueLowerLimit = 0;
        
        getColor();

        //return `RGB(60,180,60)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "green" && document.getElementById("chooseShade").value == "medium") {
        
        console.log('medium green')
        
        redUpperLimit = 100;
        redLowerLimit = 0;
        greenUpperLimit = 240;
        greenLowerLimit = 170;
        blueUpperLimit = 70;
        blueLowerLimit = 0;
        
        getColor();

        //return `RGB(0,255,0)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    //above lines are for green
    
    //below lines are for turquoise
    if  (document.getElementById("chooseColor").value == "turquoise" && document.getElementById("chooseShade").value == "all") {
        
        console.log('all turquoise')
        
        redUpperLimit = 100;
        redLowerLimit = 0;
        greenUpperLimit = 230;
        greenLowerLimit = 160;
        blueUpperLimit = 160;
        blueLowerLimit = 130;
        
        getColor();

        //return `RGB(100,230,160)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "turquoise" && document.getElementById("chooseShade").value == "light") {
        
        console.log('light turquoise')
        
        redUpperLimit = 50;
        redLowerLimit = 0;
        greenUpperLimit = 255;
        greenLowerLimit = 200;
        blueUpperLimit = 220;
        blueLowerLimit = 180;
        
        getColor();

        //return `RGB(100,255,200)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "turquoise" && document.getElementById("chooseShade").value == "dark") {
        
        console.log('dark turquoise')
        
        redUpperLimit = 50;
        redLowerLimit = 0;
        greenUpperLimit = 200;
        greenLowerLimit = 130;
        blueUpperLimit = 150;
        blueLowerLimit = 100;
        
        getColor();

        //return `RGB(0,130,100)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "turquoise" && document.getElementById("chooseShade").value == "medium") {
        
        console.log('medium turquoise')
        
        redUpperLimit = 50;
        redLowerLimit = 0;
        greenUpperLimit = 220;
        greenLowerLimit = 170;
        blueUpperLimit = 190;
        blueLowerLimit = 150;
        
        getColor();

        //return `RGB(0,0,0)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    //above lines are for turquoise
    
    //below lines are for blue
    if  (document.getElementById("chooseColor").value == "blue" && document.getElementById("chooseShade").value == "all") {

        console.log('all blue')
        
        redUpperLimit = 80;
        redLowerLimit = 0;
        greenUpperLimit = 100;
        greenLowerLimit = 0;
        blueUpperLimit = 255;
        blueLowerLimit = 150;
        
        getColor();

        //return `RGB(80,100,255)`  //use this line to test the extremes.
        
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
    if  (document.getElementById("chooseColor").value == "purple" && document.getElementById("chooseShade").value == "all") {
        
        console.log('all purple')
        
        redUpperLimit = 220;
        redLowerLimit = 110;
        greenUpperLimit = 100;
        greenLowerLimit = 0;
        blueUpperLimit = 255;
        blueLowerLimit = 180;
        
        getColor();

        //return `RGB(110,100,180)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "purple" && document.getElementById("chooseShade").value == "light") {
        
        console.log('light purple')
        
        redUpperLimit = 230;
        redLowerLimit = 150;
        greenUpperLimit = 100;
        greenLowerLimit = 50;
        blueUpperLimit = 255;
        blueLowerLimit = 220;
        
        getColor();

        //return `RGB(230,100,255)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "purple" && document.getElementById("chooseShade").value == "dark") {
        
        console.log('dark purple')
        
        redUpperLimit = 110;
        redLowerLimit = 50;
        greenUpperLimit = 40;
        greenLowerLimit = 10;
        blueUpperLimit = 180;
        blueLowerLimit = 70;
        
        getColor();

        //return `RGB(130,40,180)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "purple" && document.getElementById("chooseShade").value == "medium") {
        
        console.log('medium purple')
        
        redUpperLimit = 180;
        redLowerLimit = 100;
        greenUpperLimit = 75;
        greenLowerLimit = 30;
        blueUpperLimit = 230;
        blueLowerLimit = 150;
        
        getColor();

        //return `RGB(180,30,220)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    //above lines are for purple
    
    //below lines are for pink
    if  (document.getElementById("chooseColor").value == "pink" && document.getElementById("chooseShade").value == "all") {
        
        console.log('all pink')
        
        redUpperLimit = 255;
        redLowerLimit = 180;
        greenUpperLimit = 90;
        greenLowerLimit = 0;
        blueUpperLimit = 170;
        blueLowerLimit = 100;
        
        getColor();

        //return `RGB(255,100,100)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "pink" && document.getElementById("chooseShade").value == "light") {
        
        console.log('light pink')
        
        redUpperLimit = 255;
        redLowerLimit = 230;
        greenUpperLimit = 150;
        greenLowerLimit = 70;
        blueUpperLimit = 220;
        blueLowerLimit = 150;
        
        getColor();

        //return `RGB(230,70,150)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "pink" && document.getElementById("chooseShade").value == "dark") {
        
        console.log('dark pink')
        
        redUpperLimit = 230;
        redLowerLimit = 150;
        greenUpperLimit = 80;
        greenLowerLimit = 0;
        blueUpperLimit = 140;
        blueLowerLimit = 90;
        
        getColor();

        //return `RGB(150,0,140)`  //use this line to test the extremes.
        
        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };
    
    if  (document.getElementById("chooseColor").value == "pink" && document.getElementById("chooseShade").value == "medium") {
        
        console.log('medium pink')
        
        redUpperLimit = 240;
        redLowerLimit = 200;
        greenUpperLimit = 110;
        greenLowerLimit = 40;
        blueUpperLimit = 180;
        blueLowerLimit = 130;
        
        getColor();

        //return `RGB(200,40,180)`  //use this line to test the extremes.
        
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

    if  (document.getElementById("chooseColor").value == "all" && document.getElementById("chooseShade").value == "light") {

        console.log('light all')

        redUpperLimit = 255;
        redLowerLimit = 120;
        greenUpperLimit = 255;
        greenLowerLimit = 120;
        blueUpperLimit = 255;
        blueLowerLimit = 120;

        getColor();

        //return `RGB(0,0,0)`  //use this line to test the extremes.

        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };

    if  (document.getElementById("chooseColor").value == "all" && document.getElementById("chooseShade").value == "dark") {

        console.log('dark all')

        redUpperLimit = 130;
        redLowerLimit = 0;
        greenUpperLimit = 130;
        greenLowerLimit = 0;
        blueUpperLimit = 130;
        blueLowerLimit = 0;

        getColor();

        //return `RGB(0,0,0)`  //use this line to test the extremes.

        return `RGB(${randomRed},${randomGreen},${randomBlue})`
    };

    if  (document.getElementById("chooseColor").value == "all" && document.getElementById("chooseShade").value == "medium") {
        // if color = all and shade = medium { call this other function named mediumShadeOfAll() }

        console.log('medium all')

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

    //above lines are for all colors
    
    
    
    console.log('color and shade functionality have not been made yet')
    getColor();
    return `RGB(${randomRed},${randomGreen},${randomBlue})`;
};


/*
function mediumShadeOfAll() {

    as long as one color is above 200 and one color is below 128 then the last color does not matter.
    if 2 colors are above 200 then the last needs to be below 128
    if 2 colors are below 128 then the last needs to be above 200

    
    console.log('medium all')

    getRandomRed()
    
    redUpperLimit = 255;
    redLowerLimit = 0;


    if statement looking at randomRed { if random red is > 128 || < 200 then random green range = 0 , 255}

    getRandomGreen()

    greenUpperLimit = 255;
    greenLowerLimit = 0;

    if statement looking at randomRed { if random green is > 128 || < 200 then random blue range = 0 , 255}


    blueUpperLimit = 255;
    blueLowerLimit = 0;

    getRandomBlue()


    //return `RGB(0,0,0)`  //use this line to test the extremes.

    return `RGB(${randomRed},${randomGreen},${randomBlue})`

};

*/


