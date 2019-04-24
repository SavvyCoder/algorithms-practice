//Store the first element as the smallest value you've seen so far
//Compare this item to the next item in the array until you find a smaller number
//If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array 
//If the minimum is not the value(index) you initially began with, swap the two values
//Repeat this with the next element until the array is sorted 

const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]; 
};

function SelectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let min = i; 
        for(let j = i+1; j < arr.length; j++){
            if(arr[min] > arr[j]){
                min = j; 
            }
        }
        if(min !== i){
            swap(arr, i, min);
        }
    }
    
    return arr; 
}

let arr = [3,2,1,5,8,21,4,7,90,81,11];

console.log(SelectionSort(arr));