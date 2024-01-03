type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends Record<string, any>
    ? DeepReadonly<T[K]>
    : T[K];
};

type DeepRequireReadonly<T> = {
  readonly [K in keyof T]-?: T[K] extends Record<string, any>
    ? DeepRequireReadonly<T[K]>
    : T[K];
};

type UpperCaseKeys<T> = {
  [K in keyof T as Uppercase<string & K>]: T[K];
};

type ObjectToPropertyDescriptor<T> = {
  [K in keyof T]?: PropertyDescriptor;
};

const readonlyPerson: DeepReadonly<{
  name: string;
  age: number;
  address: {
    city: string;
    postalCode: number;
  };
}> = {
  name: "Alice",
  age: 25,
  address: {
    city: "Wonderland",
    postalCode: 12345,
  },
};

const requiredReadonlyPerson: DeepRequireReadonly<{
  name: string;
  age?: number;
  address?: {
    city?: string;
    postalCode?: number;
  };
}> = {
  name: "Bob",
  age: 30,
  address: {
    city: "Dreamland",
    postalCode: 54321,
  },
};

const uppercasePersonKeys: UpperCaseKeys<{
  name: string;
  age: number;
}> = {
  NAME: "John",
  AGE: 40,
};

const personDescriptor: ObjectToPropertyDescriptor<{
  name: string;
}> = {
  name: {
    value: "John",
    writable: false,
    enumerable: true,
    configurable: true,
  },
};

const person: { [key: string]: any } = {};

for (const key in personDescriptor) {
  Object.defineProperty(person, key, personDescriptor[key]);
}
console.log(person);

person.name = "newOlolo";
console.log(person);
