document.querySelector(".add").addEventListener("click",function(){
    var content=document.querySelector("#myinput").value;
    if(content==""){
        return;
    }
   var parent=document.querySelector("ul");
   var createEl=document.createElement("li");
   var inputtag=document.createElement("input");
   inputtag.classList.add("my-inputofli");
   inputtag.addEventListener("click",function(){
    createEl.style.textDecoration="line-through";
   });
   inputtag.setAttribute('type','checkbox');
   inputtag.style.color = "green"; // Set the color to green
    inputtag.style.borderRadius = "50%"; // Set the border radius to make it round
   createEl.innerHTML=content;
   createEl.insertBefore(inputtag,createEl.firstChild);
   parent.appendChild(createEl);
   document.querySelector("#myinput").value="";
});
// var ullength=document.querySelector(".listcontainer").length;
// for(var i=0;i<ullength;i++){
// document.querySelectorAll(".my-inputofli")[i].addEventListener("change",function(){
//         if(this.checked){
//         document.querySelectorAll("li")[i].style.textDecoration="line-through";
//         }
//         else{
//             document.querySelectorAll("li")[i].style.textDecoration="none";
//         }
// });
// }