// LeetCode 242. Valid Anagram (Easy)
//
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// 
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
// typically using all the original letters exactly once.

function isAnagram01(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false
  }
  
  // Get array of letters in first string
  const firstArray = s.split('')
  
  // Get arary of letters in second string
  const secondArray = t.split('')
  
  // Iterate through second array
  secondArray.forEach(letter => {
    // If letter in first array, remove from first array
    const indexOfLetter = firstArray.indexOf(letter)
    if (indexOfLetter > -1) {
      firstArray.splice(indexOfLetter, 1)
    }
  })
  
  if (firstArray.length === 0) {
    return true
  }
  return false
}

// Time: O(s + t) or O(n)
// Space: O(s + t) or O(n)
function isAnagram02(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false
  }
  
  // Create a hashmap for each string
  let sMap = {}
  let tMap = {}
  
  for (let i = 0; i < s.length; i++) {
    if (sMap.hasOwnProperty(s[i])) {
      sMap[s[i]]++;
    } else {
      sMap[s[i]] = 1;
    }
    
    if (tMap.hasOwnProperty(t[i])) {
      tMap[t[i]]++;
    } else {
      tMap[t[i]] = 1;
    }
  }
  
  
  // Iterate through hash maps and check if key does not exist
  for (let k in sMap) {
    if (sMap[k] !== tMap[k]) {
      return false
    }
  }
  return true
}

// Time: Depends on sort algorithm O(n log n) - so not as efficient
// Space: O(1)
function isAnagram03(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false
  }
  
  // Sort, and see if string are exactly the same
  const sSorted = s.split('').sort().join('')
  const tSorted = t.split('').sort().join('')
  return sSorted === tSorted
}


// Tests
const test01a = "anagram"
const test01b = "nagaram"
const test02a = "rat"
const test02b = "car"
const test03a = "a"
const test03b = "ab"
console.log("isAnagram01")
isAnagram01(test01a, test01b) // true
isAnagram01(test02a, test02b) // false
isAnagram01(test03a, test03b) // false
console.log("isAnagram02")
isAnagram02(test01a, test01b) // true
isAnagram02(test02a, test02b) // false
isAnagram02(test03a, test03b) // false
console.log("isAnagram03")
isAnagram03(test01a, test01b) // true
isAnagram03(test02a, test02b) // false
isAnagram03(test03a, test03b) // false