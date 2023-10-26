const {Circle , Square, Triangle } = require("../utils/shapes")



describe("Circle", ()=>{
    it("sould render a pink Circle", ()=>{
        const shape = new Circle()
        const color = shape.setShapeColor("pink")
        const expected = `<circle cx="50" cy="50" r="40" fill="pink" />`
        expect(shape.render(color)).toEqual(expected)
    })
})
describe("Square", ()=>{
    it("sould render a blue Square", ()=>{
        const shape = new Square()
        const color = shape.setShapeColor("blue")
        const expected = `<rect x="10" y="10" width="80" height="80" fill="blue" />`
        expect(shape.render(color)).toEqual(expected)
    })
})
describe("Circle", ()=>{
    it("sould render a green Triangle", ()=>{
        const shape = new Triangle()
        const color = shape.setShapeColor("green")
        const expected = `<polygon points="50,10 10,90 90,90" fill="green" />`
        expect(shape.render(color)).toEqual(expected)
    })
})


describe("setColor function", () =>{
    it("should set the color of a shape based on the setColor Method", ()=> {
        const shape = new Circle()
        color = "yellow"
        expected = "yellow"
        expect(shape.setShapeColor(color)).toEqual(expected)
    })
})