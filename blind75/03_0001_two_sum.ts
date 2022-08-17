// LeetCode 1. Two Sum
//
// Given an array of integers nums and an integer target, return indices of 
// the two numbers such that they add up to target.
//
// You may assume that each input would have exactly one solution, and you
// may not use the same element twice.
//
// You can return the answer in any order.

// Time: O(n^2)
function twoSum01(nums: number[], target: number): number[] {
  const hashMap = {}
  
  for (let i = 0; i < nums.length; i++) {
    	hashMap[i] = nums[i]
  }
    
  for (let j = 0; j < nums.length; j++) {
    if (hashMap[j] !== null) {
      for (let k = 1; k < nums.lengthh; k++) {
        if (hashMap[k] !== null) {
          if (j !== k && (hashMap[j] + hashMap[k]) === target) {
            return [j, k]
          }
        }
      }
    }
  }
}

// Time: O(n^2)
function twoSum02(nums: number[], target: number): number[] {
    let firstIndex = 0
    let secondIndex = 1
    
    for (let i = 0; i < nums.length; i++) {
        firstIndex = i
        for (let j = 1; j < nums.length; j++) {
            secondIndex = j
            if ((firstIndex !== secondIndex) && (nums[firstIndex] + nums[secondIndex] === target)) {
                return [firstIndex, secondIndex]
            }
        }
    }
};

// Time: O(n)
// Space: O(n)
function twoSum03(nums: number[], target: number): number[] {
  const hashMap = {} // val : index
  
  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i]
    // or (target - nums[i] in map)
    if (hashMap.hasOwnProperty(target - currentValue)) {
        return [hashMap[target - currentValue], i]
    } else {
    	hashMap[currentValue] = i
    }
  }  
};

// Tests
const test01a = [2,7,11,15]
const test01b = 9
const test02a = [3,2,4]
const test02b = 6
const test03a = [3,3]
const test03b = 6
const test04a = [2,5,5,11]
const test04b = 10
const test05a = [0,4,3,0]
const test05b = 0
const test06a = [-3,4,3,90]
const test06b = 0
const test07a = [2,1,5,3]
const test07b = 4

console.log("twoSum01")
twoSum01(test01a, test01b) // [0,1]
twoSum01(test02a, test02b) // [1,2]
twoSum01(test03a, test03b) // [0,1]
twoSum01(test04a, test04b) // [1,2]
twoSum01(test05a, test05b) // [0,3]
twoSum01(test06a, test06b) // [0,2]
twoSum01(test07a, test07b) // [1,3]
console.log("twoSum02")
twoSum02(test01a, test01b) // [0,1]
twoSum02(test02a, test02b) // [1,2]
twoSum02(test03a, test03b) // [0,1]
twoSum02(test04a, test04b) // [1,2]
twoSum02(test05a, test05b) // [0,3]
twoSum02(test06a, test06b) // [0,2]
twoSum02(test07a, test07b) // [1,3]
console.log("twoSum03")
twoSum03(test01a, test01b) // [0,1]
twoSum03(test02a, test02b) // [1,2]
twoSum03(test03a, test03b) // [0,1]
twoSum03(test04a, test04b) // [1,2]
twoSum03(test05a, test05b) // [0,3]
twoSum03(test06a, test06b) // [0,2]
twoSum03(test07a, test07b) // [1,3]