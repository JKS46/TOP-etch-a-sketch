const cell = document.querySelectorAll("#box>div");
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
function createBox(){

}
function draw(boxRes){
    
}
/* box.forEach((div) => {
    div.addEventListener("hover", () => {
    boxRes = document.getElementById("#input").value;
    draw(boxRes);
    });
});
 */