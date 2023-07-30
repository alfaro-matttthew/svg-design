const CLI = require("./cli");
const { Shape, Circle, Square, Triangle } = require("./shapes");

class SVG {
  constructor(text, textColor, shape, shapeColor) {
    if (shape == "Circle") {
      this.shape = new Circle(shapeColor);
    } else if (shape == "Square") {
      this.shape = new Square(shapeColor);
    } else {
      this.shape = new Triangle(shapeColor);
    }

    this.text = text;
    this.textColor = textColor;
  }

  getSVG() {
    return;
    `<svg style="border: 1px solid black;" version="1.1"
width="300" height="300"
xmlns="http://www.w3.org/2000/svg">
   
${this.shape.createSVG()}
   
<text x="150" y="170" font-size="60" text-anchor="middle" fill="${
      this.textColor
    }">${this.text}</text>
   
</svg>`;
  }
}

module.exports = SVG;
