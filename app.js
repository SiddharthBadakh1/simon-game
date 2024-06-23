
let colors=document.querySelectorAll(".clors");
let gameseqence=[];
let userseqence=[];
let ids=["red","gray","orenge","blue"];
let allbtns=document.querySelectorAll(".clors");

let level=0;
let start=false;
let head=document.querySelector("h3");
let body=document.querySelector("body");
let button=document.querySelector("button");
button.addEventListener("click", function sart(){
    ganeovere()
    if(!start){
        
        setTimeout(levelup,300);
        start=true;
    }
    
});

function levelup(){
    userseqence=[];
    level++;
    head.innerText=`Level ${level}`;
    let random=Math.floor(Math.random()*4);
    let key=ids[random];
    gameseqence.push(key);
    flash(document.querySelector(`#${key}`));
   

}

function flash(btn){
    btn.classList.add("white");

    setTimeout(function set(){
        btn.classList.remove("white");
    },450);
}

function flashuser(btn){
    btn.classList.add("greenl");

    setTimeout(function set(){
        btn.classList.remove("greenl");
    },150);
}

function check(index){
  if(userseqence[index]==gameseqence[index]){
    if(index==(level-1)){
        setTimeout(levelup,900);
        
    }
  }
  else{
    ganeover();
  }
}

function buttonpress(){
    if(start){
    let id=this.getAttribute("id");
    flashuser(document.querySelector(`#${id}`))
    userseqence.push(id);
    console.log(userseqence);
    console.log(gameseqence);
    check((userseqence.length)-1);
    console.log("butn press");
    console.log(userseqence);

    }
    

}


for(btn of allbtns){
btn.addEventListener("click",buttonpress);
}

function ganeover(){

   body.style.backgroundColor="red";
   setTimeout(()=> body.style.backgroundColor="white",500);
   
    start=false;
    userseqence=[];
    gameseqence=[];

    head.innerHTML=`Game Over Score is <b>${level}</b>`;
    level=0;


}

function ganeovere(){

    // body.style.backgroundColor="red";
    // setTimeout(()=> body.style.backgroundColor="white",500);
    
     start=false;
     userseqence=[];
     gameseqence=[];
 
     head.innerHTML=`New Game`;
     level=0;
 }