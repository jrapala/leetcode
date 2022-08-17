// LeetCode 217. Contains Duplicate (Easy)
//
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Time: O(n log n)
// Space: O(1)
var containsDuplicate01 = function(nums: number[]): boolean {
  	// O(n log n) 
    const sorted = nums.sort()

    // O(n)
    for (var i = 0; i < sorted.length; i++) {
			if (sorted[i] === sorted[i + 1]) {
        return true
      }
    }
  return false
};

// Time: O(n)
// Space: O(n)
var containsDuplicate02 = function(nums: number[]): boolean {
  	const hashSet = new Set()

    for (var i = 0; i < nums.length; i++) {
			if (hashSet.has(nums[i])) {
        return true
      }
      hashSet.add(nums[i])
    }
  return false
};


// Under the hood, a Set in JavaScript is an object:
// var hash = {
//   1: true,
//   2: true,
//   7: true
//   etc...
// };

// More readable
var containsDuplicate03 = function(nums: number[]): boolean {
  // @ts-ignore
	const totalWithoutDuplicates = new Map(nums.map((i) => [i]));
  
  return totalWithoutDuplicates.size !== nums.length;
};

// Fast!
var containsDuplicate04 = function(nums: number[]): boolean {
	return new Set(nums).size !== nums.length;
};


// Tests
const test01 = [1,2,3,1]
const test02 = [1,2,3,4]
const test03 = [1,1,1,3,3,4,3,2,4,2]
console.log("containsDuplicate01")
containsDuplicate01(test01) // true
containsDuplicate01(test02) // false
containsDuplicate01(test03) // true
console.log("containsDuplicate02")
containsDuplicate02(test01) // true
containsDuplicate02(test02) // false
containsDuplicate02(test03) // true
console.log("containsDuplicate03")
containsDuplicate03(test01) // true
containsDuplicate03(test02) // false
containsDuplicate03(test03) // true
console.log("containsDuplicate04")
containsDuplicate04(test01) // true
containsDuplicate04(test02) // false
containsDuplicate04(test03) // true