const pages = document.querySelectorAll(".page");
const nextBtns = document.querySelectorAll(".next-btn");
const finalBtn = document.getElementById("final-btn");
let currentPage = 0;

/* Navigation */
nextBtns.forEach(btn=>{
  btn.addEventListener("click",()=>{
    pages[currentPage].classList.remove("active");
    currentPage++;
    pages[currentPage].classList.add("active");
    startTyping(pages[currentPage]);
  });
});

/* Typing Effect */
function startTyping(page){
  const element = page.querySelector(".typing");
  const text = element.getAttribute("data-text");
  element.textContent="";
  let i=0;

  function type(){
    if(i<text.length){
      element.textContent+=text.charAt(i);
      i++;
      setTimeout(type,40);
    }
  }
  type();
}

startTyping(pages[0]);

/* Floating Hearts */
const heartContainer=document.querySelector(".hearts");

setInterval(()=>{
  const heart=document.createElement("span");
  heart.innerHTML="💖";
  heart.style.left=Math.random()*100+"vw";
  heart.style.fontSize=(Math.random()*20+15)+"px";
  heartContainer.appendChild(heart);
  setTimeout(()=>heart.remove(),7000);
},500);

/* Confetti Explosion */
finalBtn.addEventListener("click",()=>{
  for(let i=0;i<120;i++){
    const confetti=document.createElement("div");
    confetti.style.position="absolute";
    confetti.style.width="8px";
    confetti.style.height="8px";
    confetti.style.background=`hsl(${Math.random()*360},100%,60%)`;
    confetti.style.left=Math.random()*window.innerWidth+"px";
    confetti.style.top="-10px";
    confetti.style.animation="fall 3s linear forwards";
    document.body.appendChild(confetti);
    setTimeout(()=>confetti.remove(),3000);
  }
});

const style=document.createElement("style");
style.innerHTML=`
@keyframes fall{
  to{transform:translateY(100vh) rotate(720deg);}
}`;
document.head.appendChild(style);
