const bodyEl= document.querySelector("body");
bodyEl.addEventListener("mousemove",(event)=>{
    const xpos= event.offsetX;
    const ypos= event.offsetY;
    const spanEl= document.createElement("span");
    spanEl.style.left= xpos +"px";
    spanEl.style.top= ypos +"px";
    const sizE= Math.random()*100;
    spanEl.style.width=sizE +"px";
    spanEl.style.height=sizE +"px";
    bodyEl.appendChild(spanEl);
    setTimeout(()=>{
        spanEl.remove();
    },3000)
});
