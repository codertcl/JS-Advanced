function* createRangeIterator(start,end) {
    while (start<=end){
        yield start++
    }
    // return{
    //     next(){
    //         if(start<=end){
    //             return {value:start++,done:false}
    //         }else {
    //             return {value: undefined,done: true}
    //         }
    //     }
    // }
}

const iterator=createRangeIterator(1,3)
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());