const toggleBtn = document.getElementById("toggleMenu");
const mobile = document.getElementById("mobileMenu");
toggleBtn.addEventListener("click",function(){
    mobile.classList.toggle("hidden");
});