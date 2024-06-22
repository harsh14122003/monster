// app.js
const boxes = Array.from(document.getElementsByClassName('box'));
const resetbtn = document.getElementById('resetbtn');
resetbtn.addEventListener('click', reset);
const headertext = document.getElementById('headertext');
const areas = [null, null, null, null, null, null, null, null, null];
const o_text = "o";
const x_text = "x";
let currentplayer = o_text;
let winboxesIds = [];

const winSound = document.getElementById('winSound');
const loseSound = document.getElementById('loseSound');
const clickSound = document.getElementById('clickSound');

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function bindclickEvent() {
    boxes.forEach(
        box => {
            box.addEventListener('click', handleboxclick);
        });
}
bindclickEvent();

function handleboxclick(e) {
    const id = e.target.id;
    if (areas[id] || winboxesIds.length) {
        return;
    }
    areas[id] = currentplayer;
    e.target.innerText = currentplayer;
    clickSound.play();

    if (checkWin()) {
        headertext.innerText = `${currentplayer} wins!`;
        winboxesIds.forEach(index => boxes[index].classList.add('win'));
        winSound.play();
    } else if (areas.every(area => area !== null)) {
        headertext.innerText = 'Draw!';
        loseSound.play();
    } else {
        currentplayer = currentplayer === o_text ? x_text : o_text;
    }
}

function checkWin() {
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (areas[a] && areas[a] === areas[b] && areas[a] === areas[c]) {
            winboxesIds = combination;
            return true;
        }
    }
    return false;
}

function reset() {
    areas.fill(null);
    winboxesIds = [];
    currentplayer = o_text;
    boxes.forEach(box => {
        box.innerText = '';
        box.classList.remove('win');
    });
    headertext.innerText = 'PLAY A GAME';
}
