/**
 * ✅ implicit type
 * means that the type is inferred by TypeScript type inference system which takes responsibility away from us of writing the types
 * */

// let test = 123
// test = 'm.elzanaty'; // Type 'string' is not assignable to type 'number'.
// console.log(test);

/**
 * ✅ Explicit type
 * generally it’s manifestly adding type to our codebase.
 * */

// let test: number = 123
// test = 'm.elzanaty'; // Type 'string' is not assignable to type 'number'.
// console.log(test);

/**
 * ✅ Explicit type
 * generally it’s manifestly adding type to our codebase.
 * */

// let test: string = 123 // Type 'number' is not assignable to type 'string'.
// test = 'm.elzanaty';
// console.log(test);

/**
 * ✅ Type any
 * we do not always have prior knowledge about the type of some variables,
 * especially when there are user-entered values from third party libraries.
 * In such cases, we need a provision that can deal with dynamic content. The Any type comes in handy here.
 * Unlike unknown, variables of type any allow you to access arbitrary properties, even ones that don’t exist.
 *
 * hey are different in semantics.
 * unknown is the parent type of all other types. it's a regular type in the type system.
 * any means "turn off the type check". it's kind of meta programming.
 * any:
 *  allows being assigned to any type
 *  allows calling any method
 * unknown:
 *  doesn't allow being assigned to any type
 *  doesn't allow calling any method
 * */

// let test: any = 123
// test = 'm.elzanaty';
// console.log(test);

// let looselyTyped: any = 4;
// OK, ifItExists might exist at runtime
// looselyTyped.ifItExists();
// OK, toFixed exists (but the compiler doesn't check)
// looselyTyped.toFixed();

// let strictlyTyped: unknown = 4;
// strictlyTyped.toFixed();

/**
 * ✅ Union
 * provide a value matching a union type - simply provide a type matching any of the union’s member
 * use more than one data type for a variable or a function parameter
 * */

// let test: number | string = 123
// test = 'm.elzanaty';
// test = {} // Type '{}' is not assignable to type 'string | number'
// console.log(test);

// custom type generic

// type NumString = number | string
// let test: NumString = 123
// test = 'm.elzanaty';
// console.log(test);

// custom type and there's another way to do this which is 🔴 Enum

// type Status = 'success' | 'error' | 'pending'
// let test: Status = 'success'
// test = 'error';
// console.log(test);
