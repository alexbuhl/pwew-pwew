function update()
{
    var delta = clock.getDelta(); // seconds.
    var moveDistance = 50 * delta; // 200 pixels per second
    var rotateAngle = Math.PI / 2 * delta * 2;   // pi/2 radians (90 degrees) per second

    if (keyboard.pressed("left"))
        player1.turnLeft(rotateAngle);
    if (keyboard.pressed("right"))
        player1.turnRight(rotateAngle);
    if (keyboard.pressed("up"))
        player1.accelerate(moveDistance);
    if (keyboard.pressed("down"))
        player1.decelerate(moveDistance);

    player1.move();
    console.log(player2.goLeft);
    if(player2.goLeft) {
        player2.decelerate(moveDistance*12);
        if(player2.position.x < 0 && Math.abs(player2.position.x) > WIDTH/2)
            player2.goLeft = false;
    }
    else{
        player2.accelerate(moveDistance);
        if(player2.position.x > WIDTH/2)
            player2.goLeft = true;
    }
    player2.move();
    controls.update();
}