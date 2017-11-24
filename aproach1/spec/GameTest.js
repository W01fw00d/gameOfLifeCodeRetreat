describe("Game", function() {
    var game;
    
    beforeEach(function() {
        game = new Game();
    });
    
    it("init game", function() {
        game.init(50, 50);
        expect(game.board.length).toEqual(50);
    });
    
    it("Creating cell in fixed position of the board", function() {
        game.init(50, 50);
        game.createAliveCell(0, 0);
        expect(game.board[0][0].value).toEqual(1);
    });
    
    it("Check alive cell position", function() {
        game.init(50, 50);
        game.createAliveCell(0, 0);
        expect(game.aliveCells).toEqual([[0, 0]]);
    });
    
    it("Check random alive cell", function() {
        game.init(50, 50);
        spyOn(game, "getRandomValue").and.returnValues(1, 3);
        game.createRandomAliveCell();
        expect(game.aliveCells).toEqual([[1, 3]]);
    });
    
    it("Check random alive cells", function() {
        game.init(50, 50);
        spyOn(game, "getRandomValue").and.returnValues(1, 3, 2, 3, 5, 6);
        game.createRandomAliveCells(3);
        expect(game.aliveCells.length).toEqual(3);
    });
    
    it("Throw error when it tries to create a cell in ocuppied cell ", function() {
        game.init(50, 50);
        game.createAliveCell(0, 0);
        expect(function() {game.createAliveCell(0, 0);}).toThrow(
            new Error("Hey! There is a cell here, trynig to live!")
        );
    });
    
    it('Destroy cell in given position', function() {
        game.init(50, 50);
        game.createAliveCell(0, 0);
        game.killCell(0, 0);
        expect(game.aliveCells).toEqual([]);
    });
});
