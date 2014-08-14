(function(){
  var SnakeGame = window.SnakeGame = window.SnakeGame || {};

  function makeGrid(){
    // hard code nulls with arrays
    var cols = new Array(30);
    for(var i=0; i < cols.length; i++){
      cols[i] = new Array(30);
    }
    return cols;
  }


  var Board = SnakeGame.Board = function(){
    this.snake = new SnakeGame.Snake();
    this.grid = makeGrid();
  };

  Board.prototype.render = function(){
    var that = this;
    console.log("THAT", that);
    that.snake.segments.forEach(function(coord){
      that.grid[coord.y][coord.x] = "S";
    });
    var string = "";
    that.grid.forEach(function(rows){

      rows.forEach(function(coord){
        console.log(coord);
        if (coord === "S") {
          console.log("HIT");
          string += "S";
        } else {
          string += "0";
        };
      });

      string += "\n";
    });

    return string;
  };

})();