describe("Game", function() {
    var game;    
    
  beforeEach(function() {
      game = new Game(50, 50);
  });
    
  it("Init creates a board", function() {
    game.init();
    expect(game.board).toEqual(jasmine.any(Array));
  });
    
  it("Check that all cells are dead", function() {
      game.init();
      game.areCellsDead();
      expect(game.alldead).toEqual(true);
  })
    
    it("Check cell have more than 1 neighbour alive", function(){
        game.init();
        game.board[5][5] = 1;
        game.board[6][5] = 1;
        game.board[7][5] = 1;
        
        game.killcellsbyneighbouralive();
        
        expect(game.board[5][5]).toEqual(0);        
        
    })
});