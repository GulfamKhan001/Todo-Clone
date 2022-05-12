const addBtn=document.querySelector(".add-btn");
const modalCont = document.querySelector(".modal-cont");

let addModal=false;
addBtn.addEventListener('click',function () {
    if (!addModal) {
        modalCont.style.display="flex";
    } else {
        modalCont.style.display="none";
    }
    addModal=!addModal;
})


const allPriorityColors= document.querySelectorAll(".pr-color");

allPriorityColors.forEach(function(colorElement){
    colorElement.addEventListener("click",function(){
        allPriorityColors.forEach(function (priorityColorElem){
            priorityColorElem.classList.remove("active");
        })
        colorElement.classList.add("active")
    })
})