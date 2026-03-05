const canvas = document.getElementById("circuit-bg");
const ctx = canvas.getContext("2d");

function resize(){
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}

resize();

window.addEventListener("resize", resize);

const points = [];
const POINT_COUNT = 70;

for(let i=0;i<POINT_COUNT;i++){

points.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
dx:(Math.random()-0.5)*0.6,
dy:(Math.random()-0.5)*0.6
});

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

for(let i=0;i<points.length;i++){

let p = points[i];

p.x += p.dx;
p.y += p.dy;

if(p.x < 0 || p.x > canvas.width) p.dx *= -1;
if(p.y < 0 || p.y > canvas.height) p.dy *= -1;

ctx.beginPath();
ctx.arc(p.x,p.y,2,0,Math.PI*2);
ctx.fillStyle="#00ffcc";
ctx.fill();

for(let j=i+1;j<points.length;j++){

let q = points[j];
let distance = Math.hypot(p.x-q.x, p.y-q.y);

if(distance < 130){

ctx.beginPath();
ctx.moveTo(p.x,p.y);
ctx.lineTo(q.x,q.y);
ctx.strokeStyle="rgba(0,255,204,0.15)";
ctx.stroke();

}

}

}

requestAnimationFrame(animate);

}

animate();

function openProject(url){
window.open(url,"_blank");
}

const profileImage = document.querySelector(".profile-image");

profileImage.addEventListener("mousemove",(e)=>{

const rect = profileImage.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const rotateX = ((y/rect.height)-0.5)*15;
const rotateY = ((x/rect.width)-0.5)*-15;

profileImage.style.transform =
`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;

});

profileImage.addEventListener("mouseleave",()=>{

profileImage.style.transform="rotateX(0) rotateY(0) scale(1)";

});