//Напишіть функцію isString, яка перевірятиме, чи є передане значення рядком. Потім використовуйте її для звуження типу змінної.
const isString = (value: unknown): value is string => {
  return typeof value === "string";
};
const test = "Hello, World";

if (isString(test)) {
  console.log(test.toUpperCase());
}
// У вас є масив з елементами різних типів. Напишіть функцію, яка приймає цей масив і фільтрує його так, щоб у підсумку в ньому залишилися тільки рядки. Використовуйте захисника типу для цього завдання.

const filterStrings = (inputArray: unknown[]): string[] => {
  return inputArray.filter(isString);
};
const mixArr = [1, "2", "3", 4];
console.log(filterStrings(mixArr));

//У вас є об'єкт, який може містити довільні властивості. Напишіть функцію, яка приймає цей об'єкт і повертає значення однієї з властивостей, якщо воно існує і має певний тип.
function getPropertyOfType(obj: any, key: string, expectedType: string): any {
  if (
    Object.hasOwnProperty.call(obj, key) &&
    typeof obj[key] === expectedType
  ) {
    return obj[key];
  }
}

const sampleObject = { name: "Yurii", age: 27, city: "Odessa" };
console.log(getPropertyOfType(sampleObject, "name", "string"));

//Створіть кілька захисників типу, кожен з яких перевіряє певний аспект об'єкта (наприклад, наявність певної властивості або її тип). Потім напишіть функцію, яка використовує цих захисників у комбінації для звуження типу об'єкта до більш конкретного типу.

// Захисники типу
interface Car {
  brand: string;
  model: string;
}

interface Person {
  name: string;
  age: number;
}

interface Animal {
  species: string;
  sound: string;
}

function narrowDownObjectType(obj: Car | Person | Animal): void {
  if ("brand" in obj && "model" in obj) {
    console.log(`This is a car: ${obj.brand} ${obj.model}`);
  } else if ("name" in obj && "age" in obj) {
    console.log(`This is a person: ${obj.name}, Age: ${obj.age}`);
  } else if ("species" in obj && "sound" in obj) {
    console.log(`This is an animal: ${obj.species}, Sound: ${obj.sound}`);
  } else {
    console.log("Unknown object type");
  }
}

const carObject = { brand: "Toyota", model: "Camry" };
const personObject = { name: "John", age: 30 };
const animalObject = { species: "Dog", sound: "Woof" };

narrowDownObjectType(carObject);
narrowDownObjectType(personObject);
narrowDownObjectType(animalObject);

//У вас є змінна, яка може бути одного з декількох типів (наприклад, рядок або число). Напишіть функцію, яка приймає цю змінну і виконує довільні операції, специфічні для кожного з типів.

function processVariable(input: string | number): void {
  if (isString(input)) {
    console.log(input.toUpperCase());
  } else console.log(input * 2);
}

const str = "hello";
const num = 42;

processVariable(str);
processVariable(num);

//Створіть захисник типу, який перевірятиме, чи є передане значення функцією. Потім напишіть функцію, яка використовує цей гард для звуження типу змінної і викликає передану функцію, якщо вона існує.

type FunctionType = () => any;
function isFunction(value: any): value is FunctionType {
  return typeof value === "function";
}

function funcOrNot(func: any): void {
  if (isFunction(func)) {
    func();
  }
}
const myFunc: FunctionType = () => {
  console.log("isFuncYea");
};

funcOrNot(myFunc());

//Створіть класи з ієрархією успадкування і потім напишіть функцію, яка використовує захисник типу для звуження типу об'єктів, що базуються на цій ієрархії.

class Animal {
  constructor(public species: string) {}
}

class Mammal extends Animal {
  constructor(
    species: string,
    public sound: string,
  ) {
    super(species);
  }
}

class Bird extends Animal {
  constructor(
    species: string,
    public wingspan: number,
  ) {
    super(species);
  }
}

function processAnimal(animal: Animal): void {
  if (animal instanceof Mammal) {
    console.log(`This is a mammal: ${animal.species}, Sound: ${animal.sound}`);
  } else if (animal instanceof Bird) {
    console.log(
      `This is a bird: ${animal.species}, Wingspan: ${animal.wingspan}`,
    );
  } else {
    console.log("Unknown animal type");
  }
}

const lion = new Mammal("Lion", "Roar");
const eagle = new Bird("Eagle", 2);

processAnimal(lion);
processAnimal(eagle);
