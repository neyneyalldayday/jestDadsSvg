const SVG = require("../utils/svg");
const { Circle } = require("../utils/shapes");

describe("Whole SVG", () => {
  let svg;

  beforeEach(() => {
    svg = new SVG();
  });

  it("should render an SVG with the set text and shape", () => {
    svg.setText("blue", "Sup");
    svg.setShape(new Circle()); // Use Circle class instance here
    const renderedSvg = svg.renderSvg();
    expect(renderedSvg).toEqual(
      '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="blue"/><text x="50" y="50" font-family="Arial" text-anchor="middle" alignment-baseline="middle" font-size="24" fill="blue">Sup</text></svg>'
    );
  });

  it("should render an empty SVG without text and shape method", () => {
    const renderedSvg = svg.renderSvg();
    expect(renderedSvg).toEqual(
      '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"></svg>'
    );
  });
});

