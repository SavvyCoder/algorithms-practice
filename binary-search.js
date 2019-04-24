// // // Original Solution
// // function binarySearch(arr, elem) {
// //     var start = 0;
// //     var end = arr.length - 1;
// //     var middle = Math.floor((start + end) / 2);
// //     while(arr[middle] !== elem && start <= end) {
// //         if(elem < arr[middle]){
// //             end = middle - 1;
// //         } else {
// //             start = middle + 1;
// //         }
// //         middle = Math.floor((start + end) / 2);
// //     }
// //     if(arr[middle] === elem){
// //         return middle;
// //     }
// //     return -1;
// // }

// // // Refactored Version
// // function binarySearch(arr, elem) {
// //     var start = 0;
// //     var end = arr.length - 1;
// //     var middle = Math.floor((start + end) / 2);
// //     while(arr[middle] !== elem && start <= end) {
// //         if(elem < arr[middle]) end = middle - 1;
// //         else start = middle + 1;
// //         middle = Math.floor((start + end) / 2);
// //     }
// //     return arr[middle] === elem ? middle : -1;
// // }

// // //binarySearch([2,5,6,9,13,15,28,30], 103)

// // let binary_search = function(a, key) {
// //   let left = 0;
// //   let mid = 0;
// //   let right = a.length - 1; 
  
// //   while(true){
// //     mid = Math.floor((left + right)/2);
    
// //     if(a[mid] < key){
// //       left = mid - 1; 
// //       continue;
// //     }
    
// //     else if(a[mid] > key){
// //       right = mid + 1; 
// //       continue;
// //     }
    
// //     else {
// //       return mid; 
// //     }
// //   }
// // };

// // console.log(binary_search([2,5,6,9,13,15,28,30], 103));

// // let obj = {taco: 0};

// // if(obj.taco){
// //   console.log("banana");
// // }
// // else {
// //   console.log("taco");
// // }

// // let str = "taco";

// // console.log(str.length + "  " + str[0]);

// /*function isSubsequence(str1, str2) {
//     let index1 = 0;
//     let index2 = 0;
//     while(index2 < str2.length){
//         console.log(str1[index1] + " " + str2[index2]);
//         if(str1[index1] === str2[index2]){
//             index1++;
//             if(index1 === (str1.length - 1)){
//                 return true; 
//             }
//             index2++;
//         }
//         else {
//             index2++; 
//         }
//     }
    
//     return false; 
// }

// let str1 = "banana cin";
// let str2 = "hello banana cinderella"*/

// // console.log(isSubsequence(str1, str2));

// function findLongestSubstring(str) {
//   let longest = 0;
//   let seen = {};
//   let start = 0;
 
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (seen[char]) {
//       start = Math.max(start, seen[char]);
//     }
//     // index - beginning of substring + 1 (to include current in count)
//     longest = Math.max(longest, i - start + 1);
//     // store the index of the next char so as to not double count
//     seen[char] = i + 1;
//   }
//   return longest;
// }

// function findLongestSubstring2(str){
    
//     let head = 0;
//     let tail = 0;
//     let stringObj = {};
//     let max = 0; 
    
//     if(str.length === 0){
//         return 0;
//     }
    
//     for(let index in str){
//         let key = (str[index] + head);
//         if(stringObj[key]){
//             max = (index-head) > max ? (index-head) : max; 
//             head = index;
//             key = (str[index] + head);
//             stringObj[key] = 1;
//         }
//         else {
//             stringObj[key] = 1;
//         }
        
//     }
    
//     return max; 
    
    
// }

// let str = "longestsubstring";

// console.log(findLongestSubstring(str));
// console.log(findLongestSubstring2(str))

// function power(base, exp){
//     console.log(exp);
//     if(exp === 0){
//         return 1;
//     }
//     return base * power(base, --exp);
// }

// console.log(power(2,2));

var nums = [2,5,5,11];
var target = 10; 

var twoSum = function(nums, target) {
    var sortedNums = nums.slice();
    
    sortedNums.sort((a,b) => a-b); 
    let left = 0;
    let right = sortedNums.length - 1; 
    let sum = NaN; 
    
    while((left !== right) && (sum !== target)){
        sum = sortedNums[left] + sortedNums[right]; 
        //console.log(sum,left,right); 
        if(sum > target){
            --right; 
        }
        else if(sum < target){
            ++left; 
        }
    }
    
    let sortedleft = NaN;
    let sortedright = NaN;
    
    for(let index in nums){
       
        if(sortedNums[left] === nums[index] && isNaN(sortedleft)){
            sortedleft = index;
        }
        else if(sortedNums[right] === nums[index] && isNaN(sortedright)){
            sortedright = index;
        }
    }
    
    return [Number(sortedleft),Number(sortedright)];
    
};

console.log(twoSum(nums, target));

