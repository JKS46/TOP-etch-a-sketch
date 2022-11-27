const box = document.querySelector("#box");
let input = 25;
/* default row values whn page is loaded */
let cell= document.querySelectorAll("#box>div");
let paintColor = "";

createDivs(input,input);
draw();

/* creates divs inside #box */
function createDivs(row,column){
    for(i=0;i<row;i++){
        for(j=0;j<column;j++){
            let div = document.createElement('div');
            div.style.width = 100/column + '%';
            div.style.height = 100/row +'%';
            box.appendChild(div);
        }
    }
}

/* paints the divs inside #box based on input paintColor */
function draw(paintColor){
    if(paintColor == undefined){
        paintColor = paintBlack;
    }
    cell = document.querySelectorAll("#box>div");
    removeListeners();
    cell.forEach((div) => {
        div.addEventListener("mouseover",paintColor);
    });
}

/* resets the #box*/
function reset(){
    cell.forEach((div)=>{
        div.style.backgroundColor = "white";
    });
}

/* triggered in html,chooses what color to paint based on user click */
function colorPicker(idName){
        if(idName == "paintRandom"){
            paintColor = paintRandom;
            console.log("random");
        }
        else if(idName == "paintEraser"){
            paintColor = paintEraser;
            console.log("eraser");
        }
       /*  else if(idName == "paintShade"){
            paintColor = paintShade;
            console.log("shade");
        } */
        else{
            paintColor = paintBlack;
            console.log("black");
        }
        draw(paintColor);
}

/* creates divs inside #box based on input from user,triggered in html onclick */
function createBox(){
    input = document.querySelector("#input").value;
    if(input<100 && input>0){
        removeListeners();
       /* clear divs inside box so they don't stack */
       box.replaceChildren();
       
        createDivs(input,input);
        draw();
    }
    /* to limit memory usage */
    else{
        alert("Enter a number between 1 and 100");
    }
}

function removeListeners(){
    cell.forEach((div) => {
        div.removeEventListener('mouseover',paintColor||paintBlack);
    });
}
/* below fns choose which color to paint on the divs inside #box */
function paintBlack(e){
    e.target.style.backgroundColor = "black";
}

function paintRandom(e){
    let color = Math.floor(Math.random()*16777215).toString(16);
    e.target.style.backgroundColor = "#" + color;
}

/* function paintShade(e){

} */

function paintEraser(e){
    e.target.style.backgroundColor = "white";
}