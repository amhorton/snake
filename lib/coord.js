(function(){

  var SnakeGame = window.SnakeGame = window.SnakeGame || {};

  var Coord = SnakeGame.Coord = function(x, y){
    this.x = x;
    this.y = y;
    this.pos = [x,y];
  };

  Coord.prototype.plus = function (dir) {

    var dirValues = {"N": [0, -1], "S" : [0, 1], "E": [1, 0], "W": [-1, 0] };

    var change = dirValues[dir];

    this.x += change[0];
    this.y += change[1];
    this.pos = [x,y];
  };

})();