//Merging Arrays Pseudocode 
//Creaste an empty array, take a look at the smallest values in each input array
//While there are still values we haven't looked at...
//If the value in the first array is smaller than the vlaue in
//the second array, push the value in the first array into our
//results and move on to the next value in the first array
//If the value in the first array is larger than the vlaue in the second array, 
//push the value in the second array into our results and move on to the next value in the second array

function mergeArrays(arr1, arr2){
    let merged = []; 
    let idx1 = 0;
    let idx2 = 0; 
    while(merged.length <= (arr1.length + arr2.length)){
        if(arr1[idx1] < arr2[idx2]){
            merged.push(arr1[idx1]); 
            ++idx1;
        }
        else if(arr1[idx1] > arr2[idx2]){
            merged.push(arr2[idx2]);
            ++idx2;
        }
        else if(arr1[idx1] === undefined){
            Array.prototype.push.apply(merged, arr2.slice(idx2));
            break; 
        }
        else if(arr2[idx2] === undefined){
            Array.prototype.push.apply(merged, arr1.slice(idx1));
            break;
        }
        else {
            Array.prototype.push.call(merged, arr1[idx1], arr2[idx2]);
            ++idx1;
            ++idx2;
        }
    }
    return merged; 
}

//let arr1 = [8,11,12,16,18,22,31];
// let arr2 = [10,13,14,17];
// console.log(mergeArrays(arr1, arr2));


function mergeSort(arr){
    if(arr.length <= 1){
        return arr; 
    }
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return mergeArrays(left, right); 
}

let arr = [5,3,2,8,1,6,9,7,21,20,19,15,16];

console.log(mergeSort(arr));