window.onload =function(){
    var y=document.getElementById("newme");
    y.style.color="white";
};

let  slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3500);
   // Change image every 3.5 seconds
}

//multicolor effects
window.addEventListener("load", function() {
  var elements = document.getElementsByClassName("rainbowText");
  for (let i = 0; i < elements.length; i++) {
    generateRainbowText(elements[i]);
  }
});

function generateRainbowText(element) {
  var text = element.innerText;
  element.innerHTML = "";
  for (let i = 0; i < text.length; i++) {
    let charElem = document.createElement("span");
    charElem.style.color = "hsl(" + (360 * i / text.length) + ",80%,50%)";
    charElem.innerHTML = text[i];
    element.appendChild(charElem);
  }
}


const root = document.querySelector("#app");
let { innerHeight, innerWidth } = window;
console.log(innerHeight, innerWidth);
if (innerHeight < 300) {
  innerHeight = 350;
}
if (innerWidth < 300) {
  innerWidth = 750;
}

var d = new Date();
document.getElementById("demo").innerHTML = d.toDateString();
