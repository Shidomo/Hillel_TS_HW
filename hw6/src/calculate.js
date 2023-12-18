class AbsFigures {
    name;
    color;
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
}
class AbsFiguresWithPrint extends AbsFigures {
}
class Circle extends AbsFigures {
    name;
    color;
    radius;
    constructor(name, color, radius) {
        super(name, color);
        this.name = name;
        this.color = color;
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
class Rectangle extends AbsFiguresWithPrint {
    name;
    color;
    length;
    width;
    constructor(name, color, length, width) {
        super(name, color);
        this.name = name;
        this.color = color;
        this.length = length;
        this.width = width;
    }
    calculateArea() {
        return this.length * this.width;
    }
    print() {
        return ` Площадь ${this.name} ( ${this.color}) = ${this.length} * ${this.width} `;
    }
}
class Square extends Rectangle {
    name;
    color;
    sideLength;
    constructor(name, color, sideLength) {
        super(name, color, sideLength, sideLength);
        this.name = name;
        this.color = color;
        this.sideLength = sideLength;
    }
}
class Triangle extends AbsFigures {
    name;
    color;
    base;
    height;
    constructor(name, color, base, height) {
        super(name, color);
        this.name = name;
        this.color = color;
        this.base = base;
        this.height = height;
    }
    calculateArea() {
        return (this.base * this.height) / 2;
    }
}
// Приклад використання
const circle = new Circle("Круг", "Красный", 5);
console.log(circle.calculateArea());
const rectangle = new Rectangle("Прямоугольник", "Синий", 4, 6);
console.log(rectangle.calculateArea());
console.log(rectangle.print());
const square = new Square("Квадрат", "Зеленый", 4);
console.log(square.calculateArea());
console.log(square.print());
const triangle = new Triangle("Треугольник", "Желтый", 3, 8);
console.log(triangle.calculateArea());
