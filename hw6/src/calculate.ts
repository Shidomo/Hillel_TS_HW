interface IFigures {
  readonly name: string;
  readonly color: string;
  calculateArea(): number;
}

interface IPrinted extends IFigures {
  print(): string;
}

abstract class AbsFigures implements IFigures {
  constructor(
    public readonly name: string,
    public readonly color: string,
  ) {}
  public abstract calculateArea(): number;
}

abstract class AbsFiguresWithPrint extends AbsFigures implements IPrinted {
  public abstract print(): string;
}

class Circle extends AbsFigures {
  constructor(
    public readonly name: string,
    public readonly color: string,
    public radius: number,
  ) {
    super(name, color);
  }

  public calculateArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}
class Rectangle extends AbsFiguresWithPrint {
  constructor(
    public readonly name: string,
    public readonly color: string,
    public length: number,
    public width: number,
  ) {
    super(name, color);
  }

  public calculateArea(): number {
    return this.length * this.width;
  }

  print(): string {
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
}

class Triangle extends AbsFigures {
  constructor(
    public readonly name: string,
    public readonly color: string,
    public base: number,
    public height: number,
  ) {
    super(name, color);
  }

  public calculateArea(): number {
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
