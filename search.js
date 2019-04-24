

// var linearSearch = function(data, query){
//     for(let index in data){
//         if(data[index] === query){
//             return index; 
//         }
//     }
//     return -1; 
// };

// var testData = ['taco', 'banana', 'lemon', 'strawberry'];

// console.log('banana');

// console.log(linearSearch(testData, 'lemony'));

// var testSorted = [1,2,3,4,5,9,11,15,72,99,115,121,162,177,210,310,2345,43543];

var binarySearch = function(sortedArray, query){
    
    let leftPointer = 0;
    let rightPointer = sortedArray.length - 1; 
    let middlePointer = rightPointer/2 - (rightPointer/2 % 1);
    
    while(1){
        console.log("leftPointer: " + leftPointer + " and " + "rightPointer: " + rightPointer + "  middle: " + middlePointer);
        if(sortedArray[middlePointer] === query){
            return middlePointer;
        }
        else if(leftPointer === rightPointer){
            return -1;
        }
        else if(sortedArray[middlePointer] > query){
            rightPointer = middlePointer - 1;
            middlePointer = ((rightPointer + leftPointer)/2) - (((rightPointer + leftPointer)/2) % 1);
        }
        else if(sortedArray[middlePointer] < query){
            leftPointer = middlePointer + 1;
            middlePointer = ((rightPointer + leftPointer)/2) - (((rightPointer + leftPointer)/2) % 1);
        }
    }
};

// console.log(binarySearch(testSorted, 1));

// Singly Linked List 




class Node {
    constructor(val){
        this.val = val;
        this.next= null;
    }
    
}

class LinkedList {
    constructor(){
        this.head = null; 
        this.tail = null; 
    }
    
    static collect(next_node, collection){
  
        
    }
    
    push(val){
        if(this.head === null){
            this.head = new Node(val);
            this.tail = this.head; 
        }
        else {
            this.tail.next = new Node(val);
            this.tail = this.tail.next; 
        }
    }

     display(){
        
            
            
        }
    
}