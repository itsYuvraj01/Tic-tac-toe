let boxes = document.querySelectorAll(".box");                 // access the boxes
let resetbtn = document.querySelector("#reset-btn");           //access the reset button
let newGamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let maincontainer = document.querySelector(".game"); 

let turnO = true;        // playerX or playerO

const winpatterns =       //winnig patterns
[      
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box)=> {    //boxes se hrr box ke upr loop chlega 
    box.addEventListener("click", () => {        // hrr box k upr event chlya hai onclick
        console.log("box has clicked");
        // box.innerText = "Abcd";   // click krte hi box me Abcd ayega 
        if (turnO===true)          // agr O ki turn true hogi to O print hoga
        {
            //player O
            box.innerText = "O";
            turnO = false;         // turn change krne ke liye turn ko false kr denge
        }
        else {
            //player X
            box.innerText = "X"; //hrr bar turn ko change krne ke liye turn ko hrr baar change krenge
            turnO = true;
        }
        box.disabled = true;   //ek bar turn khelne ke baad hum dobara uski value ko chnge nhi kr skte nhi to turn overwrite hoti rhegi
       
        checkWinner();
    });
});

const disableBoxes = () => {     //saare boxes ko disabled bnane k liye
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {     //saare boxes ko enabled bnane k liye
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";    // game me saare buttons ko empty bnane ke liye
    }
};

showwinner = (winner) => {                //winner btane k liye 
    msg.innerText = `congratulations , Winner is ${winner}`;
    msgcontainer.classList.remove("hide");    // yha display:none wli class ko remove kr dia
    disableBoxes();   //winner k milte hi saare buttons disable ho gye
}

const checkWinner = () => {
    for(let pattern of winpatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;    //hrr pos pr check krenge kya likha hai O ya X
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != "")   // jb tk saari winnig pos bhari na ho tb tk winner nhi hoga
        {
            if(pos1 === pos2 && pos2 === pos3)    // jb hrr position me same value hogi tabhi winnig hogi
            {
                console.log("winner", pos1);
                showwinner(pos1);
            }
        }
    }
};

const resetGame = () => {    //to reset the game 
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}


newGamebtn.addEventListener("click", resetGame);   // new game button pr click krte hi reset game wla fun trigger hoga
resetbtn.addEventListener("click", resetGame); 