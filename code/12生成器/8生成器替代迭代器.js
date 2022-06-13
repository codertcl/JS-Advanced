function* createArrayIteraror(arr) {
    ////方式1
    // let index = 0;
    // yield arr[index++]

    //方式2
    // for (let item of arr) {
    //     yield item
    // }

     //// 方式3 yield* 可迭代对象
    yield* arr
}

const iterator=createArrayIteraror([1,2,3])
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())