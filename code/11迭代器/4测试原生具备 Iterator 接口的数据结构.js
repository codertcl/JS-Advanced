let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();

console.log(iter.next()); // { value: 'a', done: false }
console.log(iter.next()); // { value: 'b', done: false }
console.log(iter.next()); // { value: 'c', done: false }
console.log(iter.next()); // { value: undefined, done: true }

let set = new Set([1, 2, 3, 4])
let setIter = set[Symbol.iterator]();

console.log(setIter.next())//{ value: 1, done: false }
console.log(setIter.next())//{ value: 2, done: false }
console.log(setIter.next())//{ value: 3, done: false }
console.log(setIter.next())//{ value: undefined, done: true }

//具备 Iterator 接口（比如数组），即不用任何处理，就可以被for...of循环遍历
for (let item of set) {
    console.log(item)
}