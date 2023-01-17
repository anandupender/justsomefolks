const word = document.querySelector("#dynamic");
const words = ["recipe testing","frying okra", "learning how to make a Reel", "sleeping", "printing a menu"];
let counter = 1;

window.setInterval(changeWord,2200);
document.querySelector("#video").playbackRate = 0.7;


function changeWord(){
    if(counter >= words.length){
        counter = 0;
    }
    word.innerHTML = words[counter]
    counter++;
}

// Load video animation once video canplay
const video = document.querySelector('#video');
const heroImage = document.querySelector('#heroImage');

video.addEventListener('canplay', (event) => {
  console.log("video loaded");
  heroImage.style.display="none";
  video.style.opacity = "1";
  video.style.width = "100%";
});

