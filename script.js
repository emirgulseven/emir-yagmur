// ===============================
// MÜZİK
// ===============================

const music = document.getElementById("music");
const startButton = document.getElementById("startButton");

startButton.addEventListener("click", () => {

    music.play().catch(() => {});

    document.querySelector(".counter-section").scrollIntoView({
        behavior: "smooth"
    });

});

// ===============================
// SAYAÇ
// ===============================

const startDate = new Date("2024-01-01T00:00:00");

function updateCounter(){

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000*60*60*24));

    const hours = Math.floor((diff/(1000*60*60))%24);

    const minutes = Math.floor((diff/(1000*60))%60);

    const seconds = Math.floor((diff/1000)%60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

updateCounter();

setInterval(updateCounter,1000);

// ===============================
// KART ANİMASYONU
// ===============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(".card").forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(80px)";
    card.style.transition="1s";

    observer.observe(card);

});

// ===============================
// KALPLER
// ===============================

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";
    heart.style.left=Math.random()*100+"vw";
    heart.style.top="100vh";
    heart.style.fontSize=(20+Math.random()*20)+"px";
    heart.style.opacity="0.7";
    heart.style.pointerEvents="none";
    heart.style.zIndex="999";

    document.body.appendChild(heart);

    let pos=100;

    const timer=setInterval(()=>{

        pos--;

        heart.style.top=pos+"vh";

        if(pos<-10){

            clearInterval(timer);
            heart.remove();

        }

    },30);

}

setInterval(createHeart,1200);