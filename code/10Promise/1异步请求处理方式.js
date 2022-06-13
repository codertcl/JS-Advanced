function requestData(url, success, error) {
    setTimeout(() => {
       if(url==='冰冰'){
           success(1)
       }else {
           error(2)
       }
    }, 100)
}

requestData('冰冰', (res) => {
    console.log(res)
}, (err) => {
    console.log(err)
})