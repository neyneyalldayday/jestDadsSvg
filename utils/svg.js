class SVG {
    constructor(textEl ,  shapeEl){
        this.textEl = textEl
        this.shapeEl = shapeEl

    }

    renderSvg(){
        return `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`
    }


}


const mySvg = new SVG("<text>this</text>",  "<circle/>")
console.log(mySvg)