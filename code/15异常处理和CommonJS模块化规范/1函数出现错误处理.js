/**
 *
 * @param num1
 * @param num2
 * @returns {*}
 */

function sum(num1, num2) {
    if (typeof num1 !== 'number' || typeof num1 !== 'number')
        throw new Error('非数字')
    return num1 + num2
}
console.log(sum(1, 2))
console.log(sum({name: '冰冰'}, '1'))
