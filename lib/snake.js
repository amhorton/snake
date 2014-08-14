(function(){

  var SnakeGame = window.SnakeGame = window.SnakeGame || {};
  var Coord = SnakeGame.Coord;

  var Snake = SnakeGame.Snake = function(){
    this.dir = "N";
    var head = new Coord (5,5)
    this.segments = [head];

  };

  Snake.prototype.move = function () {
    var newHead = new Coord(this.segments[0].x, this.segments[0].y )
    newHead.plus(this.dir);
    this.segments.unshift(newHead);
    this.pop();
  };

  Snake.prototype.turn = function(dir){
    this.dir = dir;
  };


})();