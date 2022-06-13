const obj = {name: '冰冰', age: 31}
////对象无法for of遍历
// for (let item of obj) {
//     console.log(item)
// }

//对象通过扩展运算符展开
console.log({...obj,sex:'女'})


let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }