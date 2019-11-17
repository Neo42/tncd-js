class EnhancedArray extends Array {
  isEmpty() {
    return this.length === 0 ? 'Yes' : 'No';
  }
}

let arr = new EnhancedArray(1, 2, 3, 4, 5);
console.log(arr.isEmpty()); // No
console.log(arr.constructor === EnhancedArray); // true
