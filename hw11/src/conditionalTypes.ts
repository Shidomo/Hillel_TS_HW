//Первый вариант

type funcReturnTypeFirst<T extends Function> = T extends (
  ...args: any[]
) => infer U
  ? U
  : never;

// Второй вариант

type funcReturnTypeSecond<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer U
  ? U
  : never;

type funcType<T extends (param: any) => any> = T extends (
  param: infer D,
) => infer R
  ? [R, D]
  : never;

type coupType<T, U> = {
  [K in keyof T as K extends keyof U
    ? T[K] extends U[K]
      ? K
      : never
    : never]: T[K];
};

type A = { a: number; b: string; c: boolean };
type B = { a: number; b: string };

type Result = coupType<A, B>;
