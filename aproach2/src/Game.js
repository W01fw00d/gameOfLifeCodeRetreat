function Game(width, height) {
    this.board;
    this.width = width;
    this.height = height;
    this.alldead = true;
    this.neighboursCounter = 0;
}

Game.prototype.init = function() {
    this.board = this.getboard();
}

Game.prototype.getboard = function(){
    var matrix = [];
    
    for(var i=0; i<this.width; i++) {
        matrix[i] = new Array(this.height);
    }
    
    return matrix;
}

Game.prototype.areCellsDead = function(){
    for(var x= 0; x < this.width;x++){
            for(var y=0; y < this.height; y++) {
                    if(this.board[x][y] === 1) this.alldead = false;
                }
        }
}

Game.prototype.killcellsbyneighbouralive = function() {
    this.checkXAxis();
}

Game.prototype.checkXAxis = function() {
    for(var x= 0; x < this.width;x++){
        this.checkYAxis(x);
    }
}

Game.prototype.checkYAxis = function() {
    for(var y= 0; y < this.height;y++){
        this.checkcell(x, y);
    }
}

Game.prototype.checkcell = function(x, y) {
    this.neighboursCounter = 0;
    if (this.board[x][y] === 1) this.checkneighbours(x, y);
}

Game.prototype.checkneighbours = function(x, y) {
    if (y > 0) this.checkUpperRow(x, y);
    this.checkCurrentRow(x, y);
    if (y < this.height) this.checkLowerRow(x, y);
}

Game.prototype.checkUpperRow = function(x, y) {
    for(var z= x - 1; z <= x + 1;z++){
        if (this.board[z][y + 1] === 1) this.neighboursCounter++;
    }
}

// WIP
Game.prototype.checkUpperRow = function(x, y) {
    if (this.board[][])
    
    for(var z= x - 1; z <= x + 1;z++){
        if (this.board[z][y + 1] === 1) this.neighboursCounter++;
    }
}