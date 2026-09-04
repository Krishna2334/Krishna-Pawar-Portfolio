const nav=document.querySelector(".navbar"), menu=document.querySelector(".hamburger");
menu.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.1});
document.querySelectorAll(".section,.project,.experience-card,.skill-card,.cert-grid>div,.edu").forEach(e=>{e.classList.add("reveal");io.observe(e)});
const top=document.querySelector("#top");window.addEventListener("scroll",()=>top.style.display=scrollY>500?"grid":"none");top.onclick=()=>scrollTo({top:0,behavior:"smooth"});
document.querySelector("#year").textContent=new Date().getFullYear();
