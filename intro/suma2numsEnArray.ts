/*
* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.



Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]


Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
* */
function twoSum(nums: number[], target: number): number[] {
    const res: number[] = [];
    // x + y = 9;
    // y= 9 - x;
    console.log(nums);
    for (let index = 0; index < nums.length; index++) {
        const y = target - nums[index];
        const resSearch=nums.findIndex((item,indexFind)=>item===y && indexFind!==index)
        if (resSearch !== -1) {
            res.push(index)
            res.push(resSearch);
        break;
        }

    }
    return res;
};



function binarySearch(value: number, list: number[]) {
    let first = 0;    //left endpoint
    let last = list.length - 1;   //right endpoint
    let position = -1;
    let found = false;
    let middle;
    while (found === false && first <= last) {
        middle = Math.floor((first + last) / 2);
        if (list[middle] == value) {
            found = true;
            position = middle;
        } else if (list[middle] > value) {  //if in lower half
            last = middle - 1;
        } else {  //in in upper half
            first = middle + 1;
        }
    }
    return position;
}

const res1 = twoSum([2, 7, 11, 15], 9);
const res2 = twoSum([3,2,4], 6);
const res3 = twoSum([3,3], 6);
console.log(res1,res2,res3);

// solucion con hashmap mas eficiente
// type obj = {
//     [key: number]: number;
// }
//
// function twoSum(nums: number[], target: number): number[] {
//     const hMap:obj = {};
//     for (let i =0; i<nums.length; i++) {
//         if (target-nums[i] in hMap) {
//             return [hMap[target-nums[i]], i];
//         }
//         hMap[nums[i]] = i;
//     }
//     return [-1, -1];
// };