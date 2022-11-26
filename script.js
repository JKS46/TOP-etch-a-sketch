const box = document.querySelector("#box");
let row = 25,column = 25;
for(i=0;i<row;i++){
    for(j=0;j<column;j++){
        let div = document.createElement('div');
        div.classList.add('cell');
        div.style.width = 100/column + '%';
        div.style.height = 100/row +'%';
        div.textContent =" ";
        box.appendChild(div);
    }
}
function clearBox(){
    console.log("clear");
    cell.forEach((div)=>{
        div.style.backgroundColor = "white";
    });
}
const cell = document.querySelectorAll("#box>div");
cell.forEach((div) => {
    div.addEventListener("mouseover",()=>{
        div.style.backgroundColor = "black";
    });
});
 /* boxRes = document.getElementById("#input").value; */
