$(document).ready(function() {
  var keyboard = new Keyboard();
  var wave     = new Wave();
  var enemy    = new Enemy();
  wave.tie();

  function checkObstacles() {
    if ($("#surfer").collision(".obstacle").length >  0) {
      console.log('me la he pegao!');
    }
  }

  $(document).on('keydown', function(e) {
    if (keyboard.isKeyUp(e)) {
      playerPositionY -= DELTA_TIME*300;
      checkObstacles();
      playerView.css({
        transform: "translate(" +
          playerPositionX + "px, " +
          playerPositionY + "px)"
      });
    }
    if (keyboard.isKeyDown(e)) {
      playerPositionY += DELTA_TIME*300;
      checkObstacles();
      playerView.css({
        transform: "translate(" +
          playerPositionX + "px, " +
          playerPositionY + "px)"
      });
    }
    if (keyboard.isKeyLeft(e)) {
      playerPositionX -= DELTA_TIME*300;
      checkObstacles();
      playerView.css({
        transform: "translate(" +
          playerPositionX + "px, " +
          playerPositionY + "px)"
      });
    }
    if (keyboard.isKeyRight(e)) {
      playerPositionX += DELTA_TIME*300;
      checkObstacles();
      playerView.css({
        transform: "translate(" +
          playerPositionX + "px, " +
          playerPositionY + "px)"
      });
    }
  });
});
