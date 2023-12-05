interface ICalculator {
  add(x: number, y: number): number;
  subtract(x: number, y: number): number;
  multiply(x: number, y: number): number;
  divide(x: number, y: number): number | string;
}

class BaseCalculator implements ICalculator {
  add(x: number, y: number): number {
    return x + y;
  }

  subtract(x: number, y: number): number {
    return x - y;
  }

  multiply(x: number, y: number): number {
    return x * y;
  }

  divide(x: number, y: number): number | string {
    if (y !== 0) {
      return x / y;
    } else return "why u do this??";
  }
}

function calculate(
  calculator: BaseCalculator,
  operation: string,
  x: number,
  y: number,
): number | string {
  switch (operation) {
    case "add":
      return calculator.add(x, y);
    case "subtract":
      return calculator.subtract(x, y);
    case "multiply":
      return calculator.multiply(x, y);
    case "divide":
      return calculator.divide(x, y);
    default:
      return "Invalid operation";
  }
}

const basicCalculator = new BaseCalculator();
const resalt = calculate(basicCalculator, "add", 5, 3);
console.log(resalt);
