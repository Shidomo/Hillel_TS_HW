//Визначте інтерфейс, який використовує сигнатуру індексу з типами об'єднання. Наприклад, тип значення для кожного ключа може бути число | рядок.
interface MyUnion {
  [key: string]: string | number;
}
//Створіть інтерфейс, у якому типи значень у сигнатурі індексу є функціями. Ключами можуть бути рядки, а значеннями — функції, які приймають будь-які аргументи.
interface IFunc {
  [key: string]: (...args: any[]) => any;
}
//Опишіть інтерфейс, який використовує сигнатуру індексу для опису об'єкта, подібного до масиву. Ключі повинні бути числами, а значення - певного типу.
interface INumb {
  [key: number]: number;
}
//Створіть інтерфейс з певними властивостями та індексною сигнатурою. Наприклад, ви можете мати властивості типу name: string та індексну сигнатуру для додаткових динамічних властивостей.
interface MyObject {
  name: string;
  [key: string]: string;
}
//Створіть два інтерфейси, один з індексною сигнатурою, а інший розширює перший, додаючи специфічні властивості.
interface BaseInterface {
  [key: string]: string;
}

interface ExtendedInterface extends BaseInterface {
  anyProperty: string;
}
//Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє, чи відповідають значення певних ключів певним критеріям (наприклад, чи всі значення є числами).
const areAllValuesNumbers = (obj: MyObject): boolean => {
  for (const key in obj) {
    if (key !== "name" && typeof obj[key] !== "number") {
      return false;
    }
  }
  return true;
};

const myObject: MyUnion = { key1: 42, key2: 13 };
const result = areAllValuesNumbers({ name: "пример", ...myObject });
console.log(result);
