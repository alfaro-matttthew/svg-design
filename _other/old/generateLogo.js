function generateLogo(data) {
  console.log(JSON.stringify(data) + `!!! === LINE 2 === !!!`);

  // class Shapes {
  //   constructor(points, fill) {
  //     this.points = points;
  //     this.fill = fill;
  //   }
  // }

  // class

  // const colorOptions = [
  //   {
  //     name: "Black",
  //     hex: `#464746`,
  //   },
  //   {
  //     name: "Blue",
  //     hex: `fill="#364FD9"`,
  //   },
  //   {
  //     name: "Red",
  //     hex: `#464746`,
  //   },
  //   {
  //     name: "White",
  //     hex: `fill="#F2F2F2"`,
  //   },
  //   {
  //     name: "Gray",
  //     hex: `fill="#C9CEDE"`,
  //   },
  //   {
  //     name: "Beige",
  //     hex: `fill="#9BF2D2"`,
  //   },
  // ];

  // console.log(JSON.stringify(colorOptions) + `!!! === LINE 38 === !!!`);

  // let shapeColorPicker = function(colorChoice) {
  //   console.log(JSON.stringify(colorChoice) + `!!! === LINE 42 === !!!`);

  //   for (let i = 0; i < colorOptions.length; i++) {
  //     colors = colorOptions[i].name;
  //     if (colorChoice.shapeColor == colors) {
  //       return;
  //     }
  //   }
  //   return;
  // }

  // console.log(shapeColorPicker() + `!!! === LINE 50 === !!!`);

  // console.log(JSON.stringify(data) + `!!! === LINE 54 === !!!`);

  // shapeColorPicker(data);

  return `
<svg version="1.1"
width="300" height="300"
xmlns="http://www.w3.org/2000/svg">
<${Shapes.points} ${Shapes.fill}/>
</svg>
`;
}

function shapeCompiler() {
  const circle = new Shapes(
    `circle cx="150" cy="150" r="80"`,
    shapeColorPicker
  );
  const square = new Shapes(
    `rect x="50" y="50" rx="10" ry="10" width="200" height="200"`,
    shapeColorPicker
  );
  const triangle = new Shapes(
    `polygon points="150 45, 260 245, 40 245"`,
    shapeColorPicker
  );
}

function shape(shape) {
  console.log(shape);
  if (shape == "Circle") {
    return `circle cx="150" cy="150" r="80"`;
  } else if (shape == "Square") {
    return `rect x="50" y="50" rx="10" ry="10" width="200" height="200"`;
  } else {
    return `polygon points="150 45, 260 245, 40 245" `;
  }
}

function shapeColor(color) {
  if (color == "White") {
    return `fill="#F2F2F2"`;
  } else if (color == "Gray") {
    return `fill="#C9CEDE"`;
  } else {
    return `fill="#9BF2D2"`;
  }
}

// function text(data) {

// }

function color(data) {
  if (data.shape == "Black") {
    return (fill = "#464746");
  } else if (data.shape == "Blue") {
    return `fill="#364FD9"`;
  } else {
    return `fill="#D93A2B"`;
  }
// }

module.exports = generateLogo;
