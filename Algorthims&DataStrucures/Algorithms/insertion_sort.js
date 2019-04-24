//Start by picking the second element in the array
//Now compare the second element with the one before it and swap if necessary 
//Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (ie. the left side) to place the element in the correct place
//Repeat until the array is sorted 

const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]; 
};

function InsertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        if(arr[i-1] > arr[i]){
            let current = i;
            for(let j = i-1; j >= 0; j--){
                if(arr[j] > arr[current]){
                    swap(arr, current, j);
                    current = j; 
                }
            }
        }
    }
    
    return arr;
}

let arr = [5,4,3,2,1,8,9,20,11,12,15,14,13];
console.log(InsertionSort(arr));