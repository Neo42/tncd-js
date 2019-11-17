class EnhancedArray extends Array {
  isEmpty() {
    return this.length === 0 ? 'Yes' : 'No';
  }
  static get [Symbol.species]() {
    return Array;
  }
}

let arr = new EnhancedArray(1, 2, 3, 4, 5);
console.log(arr.isEmpty()); // No
console.log(arr.constructor === EnhancedArray); // true
let newArr = arr.map(x => 2 * x);
console.log(newArr.isEmpty()); // newArr.isEmpty is not a function
console.log(newArr.isArray()); // newArr.isArray is not a function
