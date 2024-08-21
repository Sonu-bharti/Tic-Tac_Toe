
let msg = document.querySelector('#msg');
let New = document.querySelector('.new');
let reset = document.querySelector('.reset');
let hide = document.querySelector('.hide');
let announce = document.querySelector('.announce');
let btns = document.querySelectorAll('.box');
let array =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let count = 0;

let playX = true;
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
    if(playX === true){
        // player X.
        btn.innerText = "X";
        btn.style.color = "red";
        playX = false;
    }else{
        // player O.
        btn.innerText = "O";
        btn.style.color = "blue";
        playX = true;
    }
    btn.disabled = true;       // if you are clicked once(like- choose X or O) then you can't to change.
    checkWinner();
    count = count + 1;
    draw(count);
});});


const checkWinner = () => {
    for (const pattern of array) {
        let pos1 = btns[pattern[0]].innerText;
        let pos2 = btns[pattern[1]].innerText;
        let pos3 = btns[pattern[2]].innerText;
        if(pos1 != "",pos2 != "",pos3 != ""){
             if(pos1 === pos2 && pos2 === pos3){
        showWinner(pos1);
       }
        }
       
    }
};

let previousWinner = "";
const showWinner = (winner) => {
    msg.innerText = `Winner is : ${winner}`;
    announce.classList.remove('hide');

    btns.forEach((btn) => {
        btn.disabled = true;
    });

    count = 0;
   
    previousWinner = winner;
    
};

const Newgame = () => {
    // let winner = msg.innerText.includes("X") ? "X" : "O";
    playX = previousWinner === "X" ? true : false;
    
     count =0;
    btns.forEach((btn) => {
        btn.innerText = "";
        btn.disabled = false;
    });
    announce.classList.add('hide');

}
New.addEventListener('click',Newgame);
reset.addEventListener('click',Newgame);


const draw = (count) => {
    if(count == 9){
        msg.innerHTML = "<h1 style = 'color: red'> Draw</h1>";
        announce.classList.remove('hide');
        btns.forEach((btn) => {
            btn.disabled = true;
        });
    }
}