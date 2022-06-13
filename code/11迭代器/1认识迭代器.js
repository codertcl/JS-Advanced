const names = [1, 2, 3]
let index = 0;
const iterator = {
    next: function () {
        // return {done: false, value: 1}
        // return {done: false, value: 2}
        // return {done: false, value: 3}
        // return {done: true, value: undefined}
        if (index < names.length) {
            return {done: false, value: names[index++]}
        } else {
            return {done: true, value: undefined}
        }
    }
}

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());