/**
 * ✅ Functions
 * it's the primary blocks of any program.
 * it ensure that the program is maintainable and reusable, and organized into readable blocks. 
 * All optional parameters must follow required parameters and should be at the end.
 * When the default parameters precede required parameters in a function, they can be called by passing undefined.
 * */

function greeting(greeting: string = 'Hi', name?: string): string {
  return `${greeting}, ${name}!`
}

console.log(greeting('Hello', 'M.Elzanaty')); //=> Hello, M.Elzanaty!
// greeting('Hello', 3) //=> Argument of type 'number' is not assignable to parameter of type 'string'.
// greeting('Hello', 'M.Elzanaty', 4) //=> Expected 2 arguments, but got 3.
console.log(greeting('Hello')); //=> Hello, undefined!
console.log(greeting(undefined, 'Younes')); //=> Hi, Younes!