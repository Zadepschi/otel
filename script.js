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






const wrapper = document.querySelector(".wrapper");
const carouselUl = document.querySelector(".carouselUl");
const firstCardWidth = carouselUl.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carouselUl.children];

let isDragging = false,
	isAutoPlay = true,
	startX,
	startScrollLeft,
	timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carouselUl.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens
	.slice(-cardPerView)
	.reverse()
	.forEach((card) => {
		carouselUl.insertAdjacentHTML("afterbegin", card.outerHTML);
	});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach((card) => {
	carouselUl.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carouselUl.classList.add("no-transition");
carouselUl.scrollLeft = carouselUl.offsetWidth;
carouselUl.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		carouselUl.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
	});
});

const dragStart = (e) => {
	isDragging = true;
	carouselUl.classList.add("dragging");
	// Records the initial cursor and scroll position of the carousel
	startX = e.pageX;
	startScrollLeft = carouselUl.scrollLeft;
};

const dragging = (e) => {
	if (!isDragging) return; // if isDragging is false return from here
	// Updates the scroll position of the carousel based on the cursor movement
	carouselUl.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
	isDragging = false;
	carouselUl.classList.remove("dragging");
};

const infiniteScroll = () => {
	// If the carousel is at the beginning, scroll to the end
	if (carouselUl.scrollLeft === 0) {
		carouselUl.classList.add("no-transition");
		carouselUl.scrollLeft = carouselUl.scrollWidth - 2 * carouselUl.offsetWidth;
		carouselUl.classList.remove("no-transition");
	}
	// If the carousel is at the end, scroll to the beginning
	else if (
		Math.ceil(carouselUl.scrollLeft) ===
		carouselUl.scrollWidth - carouselUl.offsetWidth
	) {
		carouselUl.classList.add("no-transition");
		carouselUl.scrollLeft = carouselUl.offsetWidth;
		carouselUl.classList.remove("no-transition");
	}

	// Clear existing timeout & start autoplay if mouse is not hovering over carousel
	clearTimeout(timeoutId);
	if (!wrapper.matches(":hover")) autoPlay();
};

const autoPlay = () => {
	if (window.innerWidth < 300 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
	// Autoplay the carousel after every 2500 ms
	timeoutId = setTimeout(() => (carouselUl.scrollLeft += firstCardWidth), 5500);
};
autoPlay();

carouselUl.addEventListener("mousedown", dragStart);
carouselUl.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carouselUl.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);


