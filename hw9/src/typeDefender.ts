function filterArray<T>(array: T[], condition: (e: T) => boolean): T[] {
  return array.filter(condition);
}

const numArr = [1, 2, "3", "4", 5, 6];

const filterNum: (string | number)[] = filterArray(
  numArr,
  (num: string | number) => typeof num === "number",
);
console.log(filterNum);

const strArr = ["apple", "banana", "orange", "grape"];
const filterStr: string[] = filterArray(strArr, (str) => str.length > 5);
console.log(filterStr);

class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T {
    return this.items.pop();
  }

  peek(): T {
    return this.items[this.items.length - 1];
  }
}
const stack: Stack<number> = new Stack<number>();
stack.push(3);
stack.push(5);
console.log(stack.peek());
console.log(stack.pop());

class Dictionary<K, V> {
  private data: Map<K, V> = new Map<K, V>();

  set(key: K, value: V): void {
    this.data.set(key, value);
  }

  get(key: K): V {
    return this.data.get(key);
  }

  has(key: K): boolean {
    return this.data.has(key);
  }
}

const disc: Dictionary<string, number> = new Dictionary<string, number>();
disc.set("one", 1);
disc.set("two", 2);
console.log(disc.get("one"));
console.log(disc.has("one"));
