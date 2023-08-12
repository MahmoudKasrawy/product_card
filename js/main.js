
let circle=document.querySelector(".option");
circle.addEventListener("click", (e)=>{

    let target = e.target;
    if(target.classList.contains("circle")){
        
        circle.querySelector(".active").classList.remove("active");
        target.classList.add("active");
        document.querySelector(".main-imag .active").classList.remove("active");
        document.querySelector(`.${target.id}`).classList.add("active");
    }
});



