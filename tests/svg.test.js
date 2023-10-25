const SVG = require("../utils/svg");

describe("Whole SVG", () => {
  let svg;

  beforeEach(() => {
    svg = new SVG();
  });

  it("it should render an SVG withthe set text and shape", () => {
    svg.setText("blue", "Sup");
    svg.setShape({ renderSvg: () => "<circle/>" });
    const renderedSvg = svg.renderSvg();
    expect(renderedSvg).toEqual(
      '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle/><text x="20" y="40" font-family="Arial" font-size="24" fill="blue">Sup</text></svg>'
    );
  });

  it("should render an empty SVG without text and shape method", () => {
    const renderedSvg = svg.renderSvg();
    expect(renderedSvg).toEqual(
      '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"></svg>'
    );
  });
});
