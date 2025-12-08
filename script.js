// MOBILE MENU
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => navLinks.classList.toggle("active"));

// TEAM TOGGLE
const viewTeamBtn = document.getElementById("viewTeamBtn");
const teamSection = document.getElementById("team");
viewTeamBtn.addEventListener("click", () => teamSection.classList.toggle("active"));

// 3D LOGO (Rotating Letter A)
const canvas = document.getElementById("logo3d");
canvas.width = 140; canvas.height = 140;
const ctx = canvas.getContext("2d");
let angle = 0;
function drawLogo(){
    const x = canvas.width/2;
    const y = canvas.height/2;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.save();
    ctx.translate(x,y);
    ctx.rotate(angle);
    ctx.font = "bold 60px Arial";
    ctx.fillStyle="#007aff";
    ctx.textAlign="center";
    ctx.fillText("A",0,20);
    ctx.restore();
    angle += 0.02;
    requestAnimationFrame(drawLogo);
}
drawLogo();

// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  for(let i=0;i<reveals.length;i++){
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;
    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add("active");
    }
  }
});
