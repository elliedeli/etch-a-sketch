console.log("hello world");


const container = document.querySelector("#container");

function generateGrid(size){
    let newWidth = 0;
    for (let i = 0; i < (size**2); i++)
    {
    const newDiv = document.createElement("div");
    newDiv.setAttribute('id','gridBox')
    container.appendChild(newDiv);
    }
    container.style.width = 3*size + "em";
}

function randomColor()
{
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}
generateGrid(16);

const body = document.querySelector("body");
body.addEventListener('click',(event) => {
    let target = event.target;
    console.log(target);
    if (target.id == "newGrid")
    {
        let newSize = prompt("Amount of squares per side for new grid?\n(less than 100)");
        container.innerHTML = ''; //destroy Grid
        generateGrid(newSize);
    }
});
body.addEventListener('mouseover',(event) =>
{
    let target= event.target;
    if (target.id == "gridBox")
    {
       target.style.backgroundColor = randomColor();
    }
});