/*Variable*/
const close = document.querySelector('#close')

const prev = document.querySelector('#prev')

const next = document.querySelector('#next')

const pics = document.querySelectorAll('#gallery img')

const photogallery = document.querySelector('#principalcontainer')


const modalImg = document.querySelector("#activepic")

const modalTxt = document.querySelector(".username");

const activepic = document.querySelector('#activepic')
let indexPic = 0;

/*open*/
const openPhotogallery = (event)=>{
  activepic.src = event.target.src;
  photogallery.style.display= 'flex';
  indexPic = Array.from(pics).indexOf(event.target);
}

pics.forEach((pics) => {
  pics.addEventListener('click', openPhotogallery);
});

/*close*/

close.addEventListener('click', ()=>{
  photogallery.style.display= 'none';
})

/*next*/

const nextPic = () => {
  if (indexPic === pics.length - 1) {
    indexPic = -1;
  }
  activepic.src = pics[indexPic + 1].src;
  indexPic++;
};

next.addEventListener('click',nextPic);

/*prev*/
const prevPic = () => {
  if (indexPic ===0) {
    indexPic = pics.length;
  }
  activepic.src = pics[indexPic - 1].src;
  indexPic--;
};

prev.addEventListener('click',prevPic);









// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}