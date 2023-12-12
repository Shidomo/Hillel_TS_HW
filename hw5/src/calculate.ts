interface Figures {
  readonly name: string;
  readonly color: string;
  calculateArea(): number;
}

interface Printed extends Figures {
  print(): string;
}

class Circle implements Figures {
  constructor(
    public readonly name: string,
    public readonly color: string,
    public radius: number,
  ) {}

  public calculateArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

class Rectangle implements Printed {
  constructor(
    public readonly name: string,
    public readonly color: string,
    public length: number,
    public width: number,
  ) {}

  calculateArea(): number {
    return this.length * this.width;
  }

  public print(): string {
    return ` Площадь ${this.name} ( ${this.color}) = ${this.length} * ${this.width} `;
  }
}
class Square extends Rectangle {
  constructor(
    public readonly name: string,
    public readonly color: string,
    public sideLength: number,
  ) {
    super(name, color, sideLength, sideLength);
  }

  print(): string {
    return `Площадь ${this.name} (${this.color}) = ${this.sideLength} * ${this.sideLength}`;
  }
}
class Triangle implements Figures {
  constructor(
    public readonly name: string,
    public readonly color: string,
    public base: number,
    public height: number,
  ) {}

  calculateArea(): number {
    return (this.base * this.height) / 2;
  }
}
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
