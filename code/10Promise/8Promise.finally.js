const promise = new Promise((resolve, reject) => {
    reject('aaa')
})

promise.then((res) => {
    console.log('res', res)
}, (err => {
    console.log('err', err)
})).finally(() => {
    console.log('finally')
})