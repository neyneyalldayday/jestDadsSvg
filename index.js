const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const SVG = require("./utils/svg");
const { Circle, Square, Triangle } = require("./utils/shapes");


function writeToFile(filename, data){
    fs.writeFileSync(path.join(filename), data)
}

function initSvg() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "text",
        message: "enter 3 letters dood",
      },
      {
        type: "input",
        name: "textColor",
        message: "what color would you like your text to be?",
      },
      {
        type: "list",
        name: "shape",
        message: "what shape would you like to use?",
        choices: ["Circle", "Square", "Triangle"],
      },
      {
        type: "input",
        name: "shapeColor",
        message: "enter a color for your shape, either color or hex will work",
      },
    ]).then((svgChoices) => {
      let shapeChoice;
      switch(svgChoices.shape) {
        case "Circle":
          shapeChoice = new Circle();
          break;
        case "Square":
          shapeChoice = new Square();
          break;
        case "Triangle":
          shapeChoice = new Triangle();
          break;
      }

      shapeChoice.setShapeColor(svgChoices.shapeColor);
      const myLogo = new SVG();
      myLogo.setShape(shapeChoice);
      myLogo.setText( svgChoices.textColor, svgChoices.text );

      if (svgChoices.length > 3) {
        console.log("Please enter only 3 characters");
      } else {
        writeToFile("siickSvg.svg", myLogo.renderSvg());
      }
    });
}
initSvg();
