"use strict";
var row = [1, 2, 3, 4, 5, 6, 7, 8];
var col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

renderBoard();
placePieces();

function renderBoard() {
    var container = document.getElementById('chess-board');
    var colour_toggler = true;
    var the_cell, colour;
    // Reverse for AN format: https://en.wikipedia.org/wiki/Algebraic_notation_(chess)
    row = row.reverse();
    row.forEach(function renderRow(i) {
        col.forEach(function renderCell(j) {
            colour = colour_toggler
                ? 'white'
                : 'black';
            the_cell = document.createElement('div');
            the_cell.className = 'box ' + colour + ' ' + i + j + ' row' + i;
            the_cell.id = j + i;
            container.appendChild(the_cell);
            colour_toggler = !colour_toggler;
        });
        colour_toggler = !colour_toggler;
    });
}

function placePieces() {
    var row1_cells = document.getElementsByClassName('row1');
    for(var i = 0; i < row1_cells.length; i++) {
        var content = getPosition(row1_cells[i].id);
        row1_cells[i].innerHTML = content;
    }

    var row2_cells = document.getElementsByClassName('row2');
    for(var i = 0; i < row2_cells.length; i++) {
        var content = getPosition(row2_cells[i].id);
        row2_cells[i].innerHTML = content;
    }

    var row7_cells = document.getElementsByClassName('row7');
    for(var i = 0; i < row7_cells.length; i++) {
        var content = getPosition(row7_cells[i].id);
        row7_cells[i].innerHTML = content;
    }

    var row8_cells = document.getElementsByClassName('row8');
    for(var i = 0; i < row8_cells.length; i++) {
        var content = getPosition(row8_cells[i].id);
        row8_cells[i].innerHTML = content;
    }
}

function getPosition(cell) {
    var positions = {
        "a1": "♖",
        "b1": "♘",
        "c1": "♗",
        "d1": "♔",
        "e1": "♕",
        "f1": "♗",
        "g1": "♘",
        "h1": "♖",
        "a2": "♙",
        "b2": "♙",
        "c2": "♙",
        "d2": "♙",
        "e2": "♙",
        "f2": "♙",
        "g2": "♙",
        "h2": "♙",
        "a8": "♜",
        "b8": "♞",
        "c8": "♝",
        "d8": "♛",
        "e8": "♚",
        "f8": "♝",
        "g8": "♞",
        "h8": "♜",
        "a7": "♟",
        "b7": "♟",
        "c7": "♟",
        "d7": "♟",
        "e7": "♟",
        "f7": "♟",
        "g7": "♟",
        "h7": "♟"
    };
    return positions[cell];
}
