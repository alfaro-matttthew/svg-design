const SVG = require("./svg");
const shapes = require("./shapes");

describe("SVG", () => {
  test('should generate an svg tag with a black circle with the word "SVG" in whtie text if arguments for text = "SVG", textColor = "#FFF", shape = "Circle", and shapeColor = "#000" is called', () => {
    const testSVG = new SVG();
    const results = `<svg style="border: 1px solid black;" version="1.1"
width="300" height="300"
xmlns="http://www.w3.org/2000/svg"> 
${this.shape.createSVG()}
<text x="150" y="170" font-size="60" text-anchor="middle" fill="${
      this.textColor
    }">${this.text}</text>
</svg>`;
    expect(testSVG.render()).toEqual(results);
  });
});
