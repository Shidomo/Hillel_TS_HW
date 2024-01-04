type DeepReadonly<T> = {
  readonly [K in keyof T]: DeepReadonly<T[K]>;
};

type DeepRequireReadonly<T> = {
  readonly [K in keyof T]-?: DeepRequireReadonly<T[K]>;
};

type UpperCaseKeys<T> = {
  [K in keyof T as Uppercase<string & K>]: T[K];
};

type Descriptor<T> = {
  value: T;
  writable: boolean;
  enumerable: boolean;
  configurable: boolean;
};

type ObjectToPropertyDescriptor<T> = {
  [K in keyof T]: Descriptor<T[K]>;
};
