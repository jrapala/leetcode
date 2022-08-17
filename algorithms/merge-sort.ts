// "Divide and conquer"
// Time: O(n log n)


// Divide the array into smaller arrays
function mergeSort(arr: number[]): number[] {
  // Base case
  if (arr.length < 2) {
    return arr
  }
  
  const middle = Math.floor(arr.length / 2);
  // middle is not included in left
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  
  return merge(mergeSort(left), mergeSort(right))
}

// Sort
function merge(left: number[], right: number[]): number[] {
 const sorted = []
 while (left.length && right.length) {
   if (left[0] <= right[0]) {
     sorted.push(left.shift());
   } else {
     sorted.push(right.shift())
   }
 }
 let results = [...sorted, ...left, ...right];
 return results
}

const test = [4, 8, 7, 2, 11, 1, 3]
console.log(mergeSort(test))

// 