const arrows = document.querySelectorAll(".arrow");
const manzaraLists = document.querySelectorAll(".manzara-list");

arrows.forEach((arrow, i) => {
  let sayac = 0;
  const widthRatio=Math.floor(window.innerWidth/300);

  const imageItem = manzaraLists[i].querySelectorAll("img").length;
  arrow.addEventListener("click", function () {
    if (imageItem - (5+ sayac) +(5-widthRatio) >= 0) {
      sayac++;
      manzaraLists[i].style.transform = `translateX(${
        manzaraLists[i].computedStyleMap().get("transform")[0].x.value - 310
      }px)`;
    } else {
      manzaraLists[i].style.transform = "translateX(0)";
      sayac=0;
    }
  });
});


const ball=document.querySelector(".toggle-ball");

const items=document.querySelectorAll(".container,.navbar,.sidebar,.toggle,.toggle-ball,.manzara-list-title");

ball.addEventListener("click",function(){

items.forEach((item)=> item.classList.toggle("active"));

});

var texts = [
  "Each frame a world, ready to explore. Welcome",
  "From Nature to the City, From the Sky to the Ground, Every Moment",
  "From the Earth to the Sky, Snapshots of Life in Every Aspect",
  "The moon, the mysterious guardian of the night sky.",
  "Traces of the past come alive in historical sites."
];


function changeText() {
  var desc = document.getElementById("featured-desc");
  var randomIndex = Math.floor(Math.random() * texts.length);
  
  
  desc.style.opacity = 0;
  setTimeout(function() {
    desc.textContent = texts[randomIndex];
    
    desc.style.opacity = 1;
  }, 500); 
}


setInterval(changeText, 5800); 

var images = ["Resimler/resim1.jpeg", "Resimler/resim2.jpeg", "Resimler/resim4.jpeg", "Resimler/resim5.jpeg"];
  var currentIndex = 0;
  var featuredContent = document.getElementById("featured-content");

  function changeBackground() {
    featuredContent.style.backgroundImage = "url('" + images[currentIndex] + "')";
    currentIndex = (currentIndex + 1) % images.length;
  }

  setInterval(changeBackground, 6000); 
