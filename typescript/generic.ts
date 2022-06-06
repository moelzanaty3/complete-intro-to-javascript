/**
 * ✅ Generics
 * A major part of software engineering is building components that not only have well-defined and consistent APIs, but are also reusable.
 * Components that are capable of working on the data of today as well as the data of tomorrow
 * */

// with any
function getArray(items: any[]): any[] {
  return new Array().concat(items);
}

let myNumArr = getArray([100, 200, 300]);
let myStrArr = getArray(["Hello", "World"]);

myNumArr.push(400); // OK
myStrArr.push("Hello TypeScript"); // OK

myNumArr.push("Hi"); // OK
myStrArr.push(500); // OK

console.log(myNumArr); // [100, 200, 300, 400, "Hi"]
console.log(myStrArr); // ["Hello", "World", "Hello TypeScript", 500]

// with generic
function getArrayGen<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

let myNumArrGen = getArrayGen<number>([100, 200, 300]);
let myStrArrGen = getArrayGen<string>(["Hello", "World"]);

myNumArrGen.push(400); // OK
myStrArrGen.push("Hello TypeScript"); // OK

// myNumArrGen.push("Hi"); // Compiler Error
// myStrArrGen.push(500); // Compiler Error

// interface describe the shape of the object
interface GetterSetter<Key, Value> {
  get: (key: Key) => Value;
  set: (key: Key, value: Value) => void;
}

class StringNumGetterSetter implements GetterSetter<string, number> {
  map: Map<string, number> = new Map();

  get(key: string): number {
    return this.map.get(key);
  }
  set(key: string, value: number): void {
    this.map.set(key, value);
  }
}
