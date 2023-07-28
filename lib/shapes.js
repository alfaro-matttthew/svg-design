const CLI = require('./cli');

class Shape {
  constructor(fill) {
    this.fill = fill;
  }

  // you cannot wite "function" in a Class
  createSVG() {
    throw new Error("Must be overridden");
  }
}

class Circle extends Shape {
  createSVG() {
  return `<circle cx="150" cy="150" r="80" fill=${this.fill}>`
  }
}

class Square {
  createSVG() {
    return `<rect x="50" y="50" rx="10" ry="10" width="200" height="200" fill=${this.fill}>`
    }
}

class Triangle {
  createSVG() {
    return `<polygon points="150 45, 260 245, 40 245" fill=${this.fill}>`
    }
}