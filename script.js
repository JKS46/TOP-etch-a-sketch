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

/* resets the color*/
function reset(){
    cell.forEach((div)=>{
        div.style.backgroundColor = "white";
    });
}

/* creates divs inside #box based on input from user,triggered in html onclick */
function createBox(){
    input = document.querySelector("#input").value;
    if(input<100 && input>0){
        cell.forEach((div) => {
            div.removeEventListener('mouseover',paintBlack);
        });
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

function draw(paintColor){
    if(paintColor == undefined){
        paintColor = paintBlack;
    }
    cell = document.querySelectorAll("#box>div");
    cell.forEach((div) => {
        div.addEventListener("mouseover",paintColor);
    });
}

function paintBlack(e){
    e.target.style.backgroundColor = "black";
}