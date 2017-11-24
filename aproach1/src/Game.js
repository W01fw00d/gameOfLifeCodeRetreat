var EMPTY = 0,
    ALIVE = 1,
    DEAD = 2;

function Game() {
    this.board;
    this.aliveCells = new Array();
    this.initSize();
}

Game.prototype.initSize = function() {
    this.width = 0;
    this.height = 0;
};

Game.prototype.init = function(width, height) {
    this.initBounderies(width, height);
    this.initDimension();
};

Game.prototype.createRandomAliveCells = function(nCells) {
    for (var i = 0; i < nCells; i++) {
        this.createRandomAliveCell();
    }
};

Game.prototype.initBounderies = function(width, height) {
    this.width = width;
    this.height = height;
    this.board = new Array(width);
};

Game.prototype.initDimension = function() {
    for (var i = 0; i < this.width; i++) {
        this.createDimension(i);
    }
};

Game.prototype.createDimension = function(i) {
    this.board[i] = new Array(this.height);
    this.initSecondDimension(i);
};

Game.prototype.initSecondDimension = function(parentDimension) {
    for (var j = 0; j < this.height; j++) {
        this.board[parentDimension][j] = {value: 0};
    }
};

Game.prototype.createAliveCell = function(x, y) {
    const cell = this.checkCell(x, y);
    cell.value = 1;
    this.aliveCells.push([x, y]);
};

Game.prototype.checkCell = function(x, y) {
    const cell = this.board[x][y];
    if (cell.value !== EMPTY) throw new Error('Hey! There is a cell here, trynig to live!');
    return cell;
};

Game.prototype.getCell = function(x, y) {
    this.checkCell
};

Game.prototype.getRandomValue = function(max, min) {
    return Math.random() * (max - min) + min;
};

Game.prototype.createRandomAliveCell = function() {
    this.createAliveCell(this.getRandomValue(this.width - 1, 0), this.getRandomValue(this.height - 1, 0));
};