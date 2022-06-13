// var twoSum = function (nums, target) {
//     if(nums.length===2){
//         return [0,1];
//     }
//     for (let i = 0; i < nums.length-1; i++) {
//         for (let j = i+1; j <nums.length ; j++) {
//            if(nums[i]+nums[j]===target){
//                return [i,j]
//            }
//         }
//     }
// };


var twoSum = function (nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let index = map.get(target - nums[i])
        if (index !== undefined) {
            return [i, index]
        } else {
            map.set(nums[i], i)
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9))
