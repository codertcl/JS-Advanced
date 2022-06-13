// function f() {
//     console.log(1)
//     return
//     console.log(2)
// }
//
// f()

var arr = [1, [[2, 3], 4], [5, 6]];

var flat = function* (a) {
    var length = a.length;
    for (var i = 0; i < length; i++) {
        var item = a[i];
        if (typeof item !== 'number') {
            yield* flat(item);
        } else {
            yield item;
        }
    }
};
console.log(flat(arr))
// for (var f of flat(arr)) {
//     console.log(f);
// }
// 1, 2, 3, 4, 5, 6
