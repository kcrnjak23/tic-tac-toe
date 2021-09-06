const sqaures = document.querySelectorAll(".square");
let listAll = [["1", "2", "3"], ["1", "4", "7"], ["1", "5", "9"], ["2", "5", "8"], ["3", "5", "7"], ["3", "6", "9"], ["4", "5", "6"], ["7", "8", "9"]];
let list1 = [];
let list2 = [];
let player1 = true;
let messageText = document.getElementById("message");
let playAgain = document.getElementById("againBtn");
let counter = 0;
let winner = false;


sqaures.forEach(squareCell => {
    squareCell.addEventListener("click", () => {
        if (squareCell.classList.contains("x") == false && squareCell.classList.contains("o") == false) {
            if (player1 == true) {
                squareCell.classList.add("x");
                list1.push(squareCell.getAttribute("value"));
                list1 = list1.sort();
                checkList(list1);
                changePlayer();
            }
            else {
                squareCell.classList.add("o");
                list2.push(squareCell.getAttribute("value"));
                list2 = list2.sort();
                checkList(list2);
                changePlayer();
            }
        }
    });
});


playAgain.addEventListener("click", () => {
    location.reload();
});

function changePlayer() {
    player1 = !player1;
}

function checkList(list) {
    listAll.forEach(array => {
        if (array.every(elem => list.includes(elem))) {
            if (player1 == true) {
                winner = true;
                messageText.style.display = "block";
                messageText.innerHTML = "Player 1 wins";
                document.getElementById("main").style.display = "none";
                playAgain.style.display = "block";
            }
            else {
                messageText.style.display = "block";
                messageText.innerHTML = "Player 2 wins";
                document.getElementById("main").style.display = "none";
                playAgain.style.display = "block";
                winner = true;
            }
        }
    });
    counter += 1;
    if (counter == 9 && winner == false) {
        messageText.style.display = "block";
        messageText.innerHTML = "Draw";
        document.getElementById("main").style.display = "none";
        playAgain.style.display = "block";
    }
}