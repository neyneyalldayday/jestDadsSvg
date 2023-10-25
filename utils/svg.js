class SVG {
    constructor(){
        this.textEl = ""
        this.shapeEl = ""
    }

    renderSvg(){
        return `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`
    }

    setText(color , text ){
        this.textEl = `<text x="20" y="40" font-family="Arial" font-size="24" fill="${color}">${text}</text>`
    }

    setShape(shape){
        this.shapeEl = shape.renderSvg()
    }
}







module.exports = SVG
