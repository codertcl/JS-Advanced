const names = ['冰冰', '慧玲', '庄晓莹']
const nums = [1, 2, 3]

function makeIterator(arr) {
    let index = 0;
    return {
        next: function () {
            if (index < arr.length) {
                return {value: arr[index++]}
                // return {done: false, value: arr[index++]}
            } else {
                return {done: true}
                // return {done: true, value: undefined}
            }
        }
    }
}

const namesIterator = makeIterator(names)
const numsIterator = makeIterator(nums)
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());