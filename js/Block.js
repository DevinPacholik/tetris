export class Block {
  constructor(x, y, cellSize, moveSpeed) {
    this.currentY = 0;
    this.speed = cellSize;
    this.locX = x;
    this.locY = y;
    this.lastMoveTime = 0;
    this.moveDelay = moveSpeed;
  }

  draw(p5, cellSize) {
    //takes the current time in milliseconds minus the  last time moved. If the move delay check is greater, the block moves
    if (p5.millis() - this.lastMoveTime >= this.moveDelay) {
      this.locY += cellSize / 2;
      p5.fill(51);
      p5.rect(this.locX, this.locY, 4 * cellSize, cellSize);

      this.lastMoveTime = p5.millis();
    } else {
      // draw the object at its current position
      p5.fill(51);
      p5.rect(this.locX, this.locY, 4 * cellSize, cellSize);
    }
  }
  keyPressed(p5, cellSize) {
    if (p5.keyCode === p5.UP_ARROW) {
      this.locY -= cellSize;
    } else if (p5.keyCode === p5.DOWN_ARROW) {
      this.locY += cellSize;
    } else if (p5.keyCode === p5.LEFT_ARROW) {
      this.locX -= cellSize;
    } else if (p5.keyCode === p5.RIGHT_ARROW) {
      this.locX += cellSize;
    }
  }
}
