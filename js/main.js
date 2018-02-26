"use strict";
var row = [1, 2, 3, 4, 5, 6, 7, 8];
var col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

renderBoard();

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
            the_cell.className = 'box ' + colour + ' ' + i + j;
            container.appendChild(the_cell);
            colour_toggler = !colour_toggler;
        });
        colour_toggler = !colour_toggler;
    });
}
