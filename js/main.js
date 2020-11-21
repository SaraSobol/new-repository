'use strict'
const RESET = '🙂'
const LOSE = '😖'
const WIN = '😎';
const BOMB = '💣'

var gBoard;



var gBoard;

var gGameSizes = [
    { id: 0, width: 4, cells: 16, label: 'Small', highScore: 0 },
    { id: 1, width: 6, cells: 36, label: 'Medium', highScore: 0 },
    { id: 2, width: 8, cells: 64, label: 'Large', highScore: 0 }
];
var currGameSize = 0;
var boardWidth = gGameSizes[currGameSize].width


function init() {
    gBoard = buildBoard();
    renderBoard(gBoard);
    console.log('hello');
}


// Create the Matrix 
function buildBoard(SIZE) {
    SIZE = 8
    var board = [];
    for (var i = 0; i < SIZE; i++) {
        board.push([])
        for (var j = 0; j < SIZE; j++) {
            var empty = ' '
            board[i][j] = Math.random() > 0.75 ? BOMB : ' ';

            // board[0][0] =BOMB;
            // board[0][1] = BOMB;
        }
    }
    return board;
}


// function renderBoard() {
//     console.table(board)
// }

function renderBoard(board) {
    var strHtml = '';
    for (var i = 0; i < board.length; i++) {
        var row = board[i];
        strHtml += '<tr>';
        for (var j = 0; j < row.length; j++) {
            var cell = row[j];
            var className = board[i][j] === BOMB ? 'countNeihgbors()' : ' ';

            var tdId = 'cell-' + i + '-' + j;
            strHtml += '<td id="' + tdId + '" onclick="cellClicked(this)" ' +
                'class="' + className + '">' + cell + '</td>';
        }
        strHtml += '</tr>';
    }
    var elMat = document.querySelector('.game-board');
    elMat.innerHTML = strHtml;
}

function renderCell(location, value) {
    // Select the elCell and set the value
    var elCell = document.querySelector(`.cell${location.i}-${location.j}`);
    elCell.innerHTML = value;
}

function countNeihgbors(cellI, cellJ, mat) {
    var neghborsSum = 0;
    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= mat.length) continue;
        for (var j = cellJ - 1; j <= cellj + 1; j++) {
            if (i === cellI && j === cellJ) continue;
            if (j < 0 || j >= mat[i].length) continue;
            if (mat[i][j] === BOMB) neghborsSum++;


        }


    }
    return neghborsSum;
}
console.log(neghborsSum)

function cellClick(id, elTd) {

    if (id===BOMB){
        gameOver;
    }
    if (id === ' ') {

        // תראה את התאים השכנים
        // DOM
        elTd.style.color = 'rgb(12, 210, 210)';
        elTd.style.fontWeight = 'bold';
    } countNeihgbors()
}


function gameOver(isWin){
    if (isWin) {
        // יראה סמיילי משקפיים בכפתור
    }else{
// יראה סמיילי עצוב 
// יגלה את כל המוקשים
    }restart()
}




