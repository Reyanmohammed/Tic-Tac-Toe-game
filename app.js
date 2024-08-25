let boxes=document.querySelectorAll('.box');
let resetBtn=document.querySelectorAll('#reset-btn');
let newGamebtn=document.querySelector('#newbtn');
let msgcontainer=document.querySelector('.msg-container');
let msg=document.querySelector('#msg');

let turnO=true; //playerX playerO
const WinPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

const Resetgame = () =>{
    turnO=true;
    enableboxes();
    msgcontainer.classList.add("hide");

}


boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if(turnO==true){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
    
});

const enableboxes =() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const disableboxes =() =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winner) => {
    msg.innerText=`Congratulations, Winner is  ${winner}`;
    msgcontainer.classList.remove("hide");
}

const checkWinner=() =>{
    for(let pattern of WinPatterns){
       let pos1Val=boxes[pattern[0]].innerText;
       let pos2Val=boxes[pattern[1]].innerText;
       let pos3Val=boxes[pattern[2]].innerText;

       if(pos1Val != "" && pos2Val != "" && pos3Val != "" ){
        if(pos1Val==pos2Val && pos2Val==pos3Val){
            console.log("Winner",pos1Val);
            showWinner(pos1Val);
            disableboxes();
        }
       }

       
    }
}

newGamebtn.addEventListener("click",Resetgame);
resetBtn.addEventListener("click",Resetgame);