const promise=Promise.resolve({name:'冰冰'})
const promise1=Promise.reject({name:'err'})

promise.then((res) => {
    console.log('res',res)
}).catch(err => {
    console.log('err', err)
})

promise1.then((res) => {
    console.log('res',res)
}).catch(err => {
    console.log('err', err)
})