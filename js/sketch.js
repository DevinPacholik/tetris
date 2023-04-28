import p5 from "p5";
import { grid } from "./grid";
import { Block } from "./Block";

//setup for framerate
let gameSpeed = 60;

//lower numbers make the block speed faster
let moveSpeed = 1000;

let rows = 10;
let columns = 20;
let cellSize = 20;

let backgroundColour = 220;
let block = new Block(0, 0, cellSize, moveSpeed);

const sketch = (p5) => {
  p5.setup = () => {
    p5.createCanvas(500, 500);
    p5.frameRate(gameSpeed);
  };

  p5.draw = () => {
    //background colour
    p5.background(backgroundColour);

    grid(p5, rows, columns, cellSize);

    block.draw(p5, cellSize);
  };
};

new p5(sketch);
