let menuToggle = document.querySelector(".toggler");
let navigation = document.querySelector(".navigation");
let header = document.querySelector("header");
let typingText = document.querySelector(".content h2");
let cursorMeter = document.querySelector("#cursorMeter");
let percent = document.querySelector("#percent");
let progressBar = document.querySelector("#progressBar");
let year = document.querySelector(".year");

//Menu toggler
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
  header.classList.toggle("active");
});

//Typing text
let text = `Al Casale Bed & Breakfast`;
let i = 0;

function type() {
  if (i < text.length) {
    document.querySelector(".content h2").textContent += text.charAt(i);
    i++;
    setTimeout(type, 200);
  }
  // setInterval(type, 1000)
}

const colorArray = ["#114055", "#63B4B8", "#38A3A5"];
k = 0;
function colorChange() {
  document.querySelector(".content h2").style.color = colorArray[k];
  k++;
  if (k > colorArray.length) {
    k = 0;
  }
}

setInterval(colorChange, 800);
type();

//Page scrolling

document.addEventListener("mousemove", function (e) {
  e.preventDefault();
  cursorMeter.style.top = e.clientY + "px";
  cursorMeter.style.left = e.clientX + "px";
});

let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function () {
  let progress = (window.pageYOffset / totalHeight) * 100;
  progressBar.style.width = progress + "%";
  // percent.innerHTML = Math.round(progress) + '%';
};

//Bubble

function createBubble() {
  const bubbles = document.querySelector(".bubbles");
  const createElement = document.createElement("span");
  let size = Math.random() * 60;

  createElement.style.width = 20 + size + "px";
  createElement.style.height = 20 + size + "px";
  createElement.style.left = Math.random() * innerWidth + "px";
  bubbles.appendChild(createElement);

  setTimeout(() => {
    createElement.remove();
  }, 4000);
}
setInterval(createBubble, 400);

//bubble2
function createBubbleTwo() {
  const bubblesTwo = document.querySelector(".bubblesTwo");
  const createElement = document.createElement("span");
  let size = Math.random() * 60;

  createElement.style.width = 20 + size + "px";
  createElement.style.height = 20 + size + "px";
  createElement.style.left = Math.random() * innerWidth + "px";
  bubblesTwo.appendChild(createElement);

  setTimeout(() => {
    createElement.remove();
  }, 4000);
}
setInterval(createBubbleTwo, 400);

//bubble3
function createBubbleThree() {
  const bubblesTwo = document.querySelector(".bubblesThree");
  const createElement = document.createElement("span");
  let size = Math.random() * 60;

  createElement.style.width = 20 + size + "px";
  createElement.style.height = 20 + size + "px";
  createElement.style.left = Math.random() * innerWidth + "px";
  bubblesTwo.appendChild(createElement);

  setTimeout(() => {
    createElement.remove();
  }, 4000);
}
setInterval(createBubbleThree, 400);

// get full year in copyright

year.textContent = new Date().getFullYear();
