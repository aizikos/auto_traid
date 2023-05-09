document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("burger").addEventListener("click",function(){
        document.querySelector(".header-content").classList.toggle("open")
    })
});