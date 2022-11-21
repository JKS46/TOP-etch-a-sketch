const box = document.querySelector("#box>div");
function createBox(){
   

}
function draw(boxRes){
    
}
box.forEach((div) => {
    div.addEventListener("hover", () => {
    boxRes = document.getElementById("#input").value;
    draw(boxRes);
    });
});
