/**
 * ✅ Enum
 *  enums allow us to declare a set of named constants 
 *  i.e. a collection of related values that can be numeric or string values.
 *  There are three types of enums:
 *   1️⃣ Numeric enum
 *   2️⃣ String enum
 *   3️⃣ Heterogeneous -> contain both string and numeric values
 * */

// 1️⃣ Numeric enum
// enum Status {
//   Success,
//   Error,
//   Pending
// }
// 2️⃣ String enum
enum Status {
  Success = 'success',
  Error = 'error',
  Pending = 'pending'
}
let test: Status = Status.Success 
test = Status.Error; 
console.log(test);