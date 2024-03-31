var child=document.querySelector("#child");
var parents=document.querySelector("#parents");
var grandparents=document.querySelector("#grandparents");
child.addEventListener("click",()=>{
    console.log("child");
})
parents.addEventListener("click",()=>{
    console.log("Parents");
})
grandparents.addEventListener("click",()=>{
    console.log("Grandparents");
})