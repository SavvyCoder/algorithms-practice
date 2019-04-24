//bubble sort algo naive 
//Start looping from a variable called i until the end of the array towards the beginning
//Start the inner loop with a variable called j from the beggining until i - 1
//If arr[j] is greater than arr[j+1], swap those two values 
//Return the sorted array
//Set sorted trigger to break out of loop if array already sorted (last iteration had no swaps)

//ES6 swap:
const swap = (arr, idx1, idx2) => {
    [arr[idx1],arr[idx2]] = [arr[idx2], arr[idx1]]; 
}


function BubbleSort (arr){
    for(let i = arr.length - 1; i >= 0; i--){
        let sorted = true; 
        for(let j = 0; j < i; j++){
            console.log("swap loop " + i,j);
            if(arr[j] > arr[j+1]){
                let temp = arr[j]; 
                arr[j] = arr[j+1]; 
                arr[j+1] = temp;
                sorted = false;
            }
        }
       if(sorted){
           break; 
       }
    }
    
    return arr; 
}

let arr = [1,2,3,4,8,7];

console.log(BubbleSort(arr));