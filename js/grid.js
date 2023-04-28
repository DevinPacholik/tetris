export function grid(p5, width, height, cellSize) {
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      let x = col * cellSize;
      let y = row * cellSize;
      p5.fill(200);
      p5.rect(x, y, cellSize, cellSize);
    }
  }
}
