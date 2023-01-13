const word = document.querySelector("#dynamic");
const words = ["recipe testing","frying okra", "learning how to make a Reel", "sleeping", "printing a menu"];
let counter = 1;

window.setInterval(changeWord,2200);

function changeWord(){
    if(counter >= words.length){
        counter = 0;
    }
    word.innerHTML = words[counter]
    counter++;

}