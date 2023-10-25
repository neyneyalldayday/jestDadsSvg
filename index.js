const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')

const SVG = require('./utils/svg')

const { Circle, Square, Triangle} = require('./utils/shapes')





function initSvg(){
inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: "enter 3 letters dood",
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'what color would you like your text to be?',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'what shape would you like to use?',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'enter a color for your shape, either color or hex will work'
    }
]).then((svgChoices) => {
    let shapeChoice;
    switch(shapeChoice){
        case svgChoices.shape = 'Circle':
            shapeChoice = new Circle()
            break;
        case svgChoices.shape = 'Square':
            shapeChoice = new Square()
            break;
        case svgChoices.shape = 'Triangle':
            shapeChoice = new Triangle()
            break;        
    }
    console.log(shapeChoice)

})
}
initSvg()