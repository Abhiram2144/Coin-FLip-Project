var but = document.querySelector("#butt");

but.addEventListener("click",function(){
    var face;
    let value = Math.random();
    value > 0.5? face=1:face=0;
    if(face===1){
        document.querySelector("#coinimg").setAttribute("src","images/heads.png");
        document.querySelector("#result-line").innerHTML = " It's HEADS";
    }
    else{
        document.querySelector("#coinimg").setAttribute("src","images/tails.png");
        document.querySelector("#result-line").innerHTML = " It's TAILS";

    }
})
