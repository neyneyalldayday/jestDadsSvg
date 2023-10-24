class Shape{
    constructor(color){
        this.color = color
    }

    setShapeColor(color){
     return   this.color = color
    }

}


// const coolshape = new Shape("pink")
// const shapeWithColor = coolshape.setShapeColor("blue")
// console.log(coolshape)
// console.log(shapeWithColor)

class Circle extends Shape {
    renderShape(){
        return `<circle cx="50" cy="50" r="40" fill="${this.color}" />`
    }
      
}


class Square extends Shape {
    renderShape(){
        return `<rect x="10" y="10" width="80" height="80" fill="${this.color}" />`
    }
}


class Triangle extends Shape{
    renderShape(){
        return `<polygon points="50,10 10,90 90,90" fill="${this.color}" />`
    }
}


module.exports = {Circle, Square, Triangle}