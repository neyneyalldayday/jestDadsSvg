const SVG = require("../utils/svg");
const { Circle, Square, Triangle } = require("../utils/shapes");

describe('SVG Class', () => {
  it('should render an empty SVG', () => {
    const svg = new SVG();
    const result = svg.renderSvg();
    expect(result).toEqual('<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"></svg>');
  });

  it('should set text in the SVG', () => {
    const svg = new SVG();
    svg.setText('red', 'Hello');
    const result = svg.renderSvg();
    expect(result).toContain('<text x="50" y="50" font-family="Arial" text-anchor="middle" alignment-baseline="middle" font-size="24" fill="red">Hello</text>');
  });

  it('should set a shape in the SVG', () => {
    const svg = new SVG();
    const circle = new Circle('blue');
    svg.setShape(circle);
    const result = svg.renderSvg();
    expect(result).toContain('<circle cx="50" cy="50" r="50" fill="blue" />');
  });
});

describe('Shape Classes', () => {
  it('should render a Circle shape', () => {
    const circle = new Circle('green');
    const result = circle.render();
    expect(result).toContain('<circle cx="50" cy="50" r="50" fill="green" />');
  });

  it('should render a Square shape', () => {
    const square = new Square('purple');
    const result = square.render();
    expect(result).toContain('<rect x="0" y="0" width="100" height="100" fill="purple" />');
  });

  it('should render a Triangle shape', () => {
    const triangle = new Triangle('orange');
    const result = triangle.render();
    expect(result).toContain('<polygon points="50,0 0,100 100,100" fill="orange" />');
  });

  it('should set the shape color', () => {
    const circle = new Circle('blue');
    circle.setShapeColor('red');
    expect(circle.color).toEqual('red');
  });
});

