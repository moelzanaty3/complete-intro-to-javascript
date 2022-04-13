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
 * */

interface Person {
  name: string;
  age: number,
  job?: string,
}

const mohammed: Person = {
  name: "m.elzanaty",
  age: 30,
  job: "SW Engineer"
}

const younes: Person = {
  name: "younes.mohammed",
  age: 1
}

// Object Types can be anonymous:
function greet(person: { name: string; age: number }) {
  return "Hello " + person.name;
}
// can be named by using an interface
function greet2(person: Person) {
  return "Hello " + person.name;
}
// can be named by using type alias
type PersonType = {
  name: string;
  age: number;
};

function greet3(person: PersonType) {
  return "Hello " + person.name;
}

// readonly Properties
interface SomeType {
  readonly prop: string;
}
 
function doSomething(obj: SomeType) {
  // We can read from 'obj.prop'.
  console.log(`prop has the value '${obj.prop}'.`);
 
  // But we can't re-assign it.
  // obj.prop = "hello"; // Cannot assign to 'prop' because it is a read-only property.
}