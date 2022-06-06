/**
 * ✅ Object Types
 * the fundamental way that we group and pass around data is through objects. In TypeScript, we represent those through object types.
 * Each property in an object type can specify a couple of things:
 ** Optional Properties:-
 * Much of the time, we’ll find ourselves dealing with objects that might have a property set.
 * we can mark those properties as optional by adding a question mark (?) to the end of their names.
 ** readonly Properties:-
 * Properties can also be marked as readonly for TypeScript. While it won’t change any behavior at runtime
 * a property marked as readonly can’t be written to during type-checking.
 * When I use Type/Interface: https://twitter.com/karoljmajewski/status/1082413696075382785
 *
 * string is one of JavaScript's primitive types
 * String refers to an object instance that has String.prototype in its prototype chain.
 * */

interface Person {
  // we can read it but we can't re-assign it
  readonly name: String;
  gender: String;
  age?: number;
}

const mohammed: Person = {
  name: "Mohammed Elzanaty",
  gender: "Male",
};

const farah: Person = {
  name: "Farah Mohammed",
  gender: "Female",
  age: 10,
};

class Employee implements Person {
  name: String;
  gender: String;

  constructor(name: string, gender: string) {
    this.name = name;
    this.gender = gender;
  }
}

const younes = new Employee("Younes", "Male");
