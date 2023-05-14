///Для бургер меню

document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("burger").addEventListener("click",function(){
        document.querySelector(".header-content").classList.toggle("open")
    })
});

/// Для скытя текста
function readMore(){
    var dots = document.getElementById("dots");
    var more = document.getElementById("more");
    var btn = document.getElementById("btn");

    if(dots.style.display === "none") {
        dots.style.display = "inline";
        btn.innerHTML = "More";
        more.style.display = "none";
        
    }else{
            dots.style.display = "none";
            btn.innerHTML = "keep back";
            more.style.display = "inline";
        }
    
}