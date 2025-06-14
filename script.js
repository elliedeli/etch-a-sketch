console.log("hello world");


const container = document.querySelector("#container");

function generateGrid(size){
    for (let i = 0; i < (size**2); i++)
    {
    const newDiv = document.createElement("div");
    newDiv.setAttribute('id','gridBox')
    newDiv.setAttribute('draggable', 'false')
    newDiv.style.backgroundColor = "#e5dfd8";
    let newSize = parseFloat(100/size); //width and height are same
    newDiv.style.width = newSize + "%";
    newDiv.style.height = newSize + "%";
    container.appendChild(newDiv);

    }
}

function generatePallete(){
    const palleteColors = ["#000000", "#1D2B53", "#7E2553", "#008751",
        "#AB5236", "#5F574F", "#C2C3C7", "#FFF1E8", "#FF004D", "#FFA300",
        "#FFEC27", "#00E436", "#29ADFF", "#83769C", "#FF77A8", "#FFCCAA"
    ]
    for (let i = 0; i <= palleteColors.length-1; i++)
    {
    const newDiv = document.createElement("div");
    newDiv.setAttribute('id','pallete')
    newDiv.setAttribute('draggable', 'false')
    newDiv.style.backgroundColor = palleteColors[i];
    let newSize = ("2em"); //width and height are same
    newDiv.style.width = newSize;
    newDiv.style.height = newSize ;
    palleteDiv.appendChild(newDiv);

    }
}

function randomColor()
{
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}


const val = document.querySelector("#sizeRange");
const sizeDisplay = document.querySelector("#sizeDisplay");

const palleteDiv = document.querySelector("#optionsColorPallete");
val.value = 16;
generateGrid(val.value) //initial grid of 16x16
generatePallete();
let drawMode = 1; //0 = hover, 1 = click
let colorMode = 0; //0 = black, 1=rainbow 2=pallete
let isPressed = 0; //is mouse being pressed down? 0 == no, 1== yes
let isGrid = true;
const body = document.querySelector("body");
body.addEventListener('mouseup', (event) =>{
    if (isPressed == 1)
    {
        isPressed = 0;
    }
});

body.addEventListener('mousedown',(event) => {
    let target = event.target;
    console.log(target);

    if (target.id== "pallete")
    {
        colorMode = 2;
        palleteColor = target.style.backgroundColor;
        for (let i = 0; i < palleteDiv.children.length-1; i++){
            palleteDiv.children[i].style.borderColor = "#643048";
        }
        
        target.style.borderColor = "#ed4746"; //set border outline to gold
        console.log("palleteColor:" + palleteColor);
    }
    if (target.id == "newGrid")
    {
        let newSize = prompt("Amount of squares per side for new grid?\n(less than 100)");
        val.value = newSize;
        container.innerHTML = ''; //destroy Grid
        generateGrid(newSize);
    }
    if (target.id == "sizeRange"){
        
        sizeDisplay.textContent = val.value;
        console.log(val.value);
        container.innerHTML = '';
        generateGrid(val.value);
    }
    if (target.id == "clickButton"){
        drawMode = 1;
        console.log(drawMode);
    }
    if (target.id == "hoverButton"){
        drawMode = 0;
    }

    if (target.id == "rainbowButton"){
        colorMode = 1;
    }
    if (target.id == "grayButton"){
        colorMode = 0;
    }
    if (target.id == "hideGrid"){
        if (isGrid == true){
        for (let i = 0; i < container.children.length-1; i++){
            container.children[i].style.border = "none";
            target.innerHTML = "Show Grid";
            isGrid = false;

        }
    }
    else{
            for (let i = 0; i < container.children.length-1; i++){
            container.children[i].style.border = "0.01rem dotted #643048";
            target.innerHTML = "Hide Grid";
            isGrid = true;

        }
    }

    }
    if (drawMode == 1){
        isPressed = 1;
    }
    if (target.id == "gridBox"&& (drawMode ==0 || isPressed==1))
        {
            console.log("isPressed:" + isPressed);
            if (colorMode == 0){
                console.log(target.style.backgroundColor);
                
                console.log(target.style.opacity);
                target.style.backgroundColor = "black";
                if (target.style.opacity == '')
                {
                    target.style.opacity = 0;
                }
                else{
                    let currentOpacity =  parseFloat(target.style.opacity);
                    currentOpacity += 0.2;
                    target.style.opacity = currentOpacity;
                }
                
                
            }
            else if (colorMode ==1){
                target.style.opacity = 1;
                target.style.backgroundColor = randomColor();
            }
            else if (colorMode ==2){
                target.style.backgroundColor = palleteColor;
            }
        }

});

let hasOpacity = false;

body.addEventListener('mouseover',(event) =>
    {
        let target= event.target;
        if (target.id == "gridBox"&& (drawMode ==0 || isPressed==1))
        {
            console.log("isPressed:" + isPressed);
            if (colorMode == 0){
            console.log(target.style.backgroundColor);
            
            console.log(target.style.opacity);
            target.style.backgroundColor = "black";
            if (target.style.opacity == '')
            {
                target.style.opacity = 0;
            }
            else{
                let currentOpacity =  parseFloat(target.style.opacity);
                currentOpacity += 0.2;
                target.style.opacity = currentOpacity;
            }
            
            
            }
            else if (colorMode ==1){
                
            target.style.opacity = 1;
            target.style.backgroundColor = randomColor();
            }
            else if (colorMode ==2){
                target.style.backgroundColor = palleteColor;

            }
        }
    });
