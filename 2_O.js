//Классы открыты для расширения, но закрыты для модификации
class Shape {
    area() {
        throw new Error('Area method should be implemented')
    }
}

class Square extends Shape {
    constructor (size) {
        super()
        this.size = size
    }

    area() {
        return this.size**2
    }
}

class Circle extends Shape{
    constructor (radius) {
        super()
        this.radius = radius
    }
    
    area() {
        return (this.radius**2)*Math.PI
    }
}

class Rect extends Shape{
    constructor (wight, height) {
        super()
        this.wight = wight
        this.height = height
    }

    area() {
        return this.wight*this.height
    }
}

class Triang extends Shape{
    constructor(a, b) {
        super()
        this.a = a
        this.b = b
    }

    area() {
        return (this.a * this.b)/2
    }

}

class AreaCalculator {
    constructor (shapes = []) {
        this.shapes = shapes
    }
//Метод сум сделан один раз и больше мы к нему не возвращаемся при добавлении новых фигур
    sum() {
        return this.shapes.reduce((acc, shape) => {
            acc += shape.area()
            return acc
        }, 0)
    }
}

const calc = new AreaCalculator ( [
    new Square(10),
    new Circle(5),
    new Circle(1),
    new Rect(10,5),
    new Triang(5,6),
    new Triang(15,66)
])


console.log(calc.sum());


