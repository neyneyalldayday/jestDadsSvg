class SVG {
    constructor(textEl ,  shapeEl){
        this.textEl = textEl
        this.shapeEl = shapeEl
    }

    renderSvg(){
        return `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`
    }

   static setText(color , text ){
        return `<text x="20" y="40" font-family="Arial" font-size="24" fill="${color}">${text}</text>`
    }
}


// const textElement = SVG.setText("blue",  "whatup dood")
// const shapeThing = "<circle/>"
// const mySvg = new SVG(textElement, shapeThing)
// const newSvg = mySvg.renderSvg()

// console.log(mySvg)
// console.log(newSvg)

module.exports = SVG
