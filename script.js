const box = document.querySelectorAll("#box>div");
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
