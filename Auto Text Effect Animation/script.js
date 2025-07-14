const containerEl= document.querySelector(".container");
const careers= [" Bacheler of Computer Application student","Web Developer"];
let careersindex=0;
let charaterindex=0;

updateText();
function updateText(){
    charaterindex++;
    containerEl.innerHTML=`
  <h1>I am a  ${careers[careersindex].slice(0,charaterindex)}</h1>`;

if(charaterindex===careers[careersindex].length){
    careersindex++;
    charaterindex=0;
}
if(careersindex=== careers.length){
  careersindex=0;
}
setTimeout(updateText,200);
};

