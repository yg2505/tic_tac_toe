let box = document.querySelectorAll(".box");
let reset = document.querySelector(".resetbtn");
let para = document.querySelector("p");

let turn0 = true;
let moveCount = 0;
let gameOver = false;

let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let resetFunc = () => {
    turn0 = true;
    moveCount = 0;
    gameOver = false;
    box.forEach((b) => {
        b.disabled = false;
        b.innerText = "";
    });
    para.style.visibility = "hidden";
};

box.forEach((b) => {
    b.addEventListener("click", () => {
        if (turn0) {
            b.innerText = "O";
            b.style.color = "#FAEAEA";
        } else {
            b.innerText = "X";
            b.style.color = "#BDD9BF";
        }
        b.disabled = true;
        turn0 = !turn0;
        moveCount++;

        checkwinner();
    });
});

let checkwinner = () => {
    for (let i of win) {
        let posval1 = box[i[0]].innerText;
        let posval2 = box[i[1]].innerText;
        let posval3 = box[i[2]].innerText;

        if (posval1 !== "" && posval1 === posval2 && posval2 === posval3) {
            para.innerText = "Congratulations!! Winner is " + posval1;
            para.style.visibility = "visible";
            gameOver = true;
            box.forEach((b) => {
                b.disabled = true;
            });
            return;  
        }
    }

    if (moveCount === 9 && !gameOver) {
        para.innerText = "It's a Draw!";
        para.style.visibility = "visible";
    }
};

reset.addEventListener("click", () => {
    resetFunc();
});
