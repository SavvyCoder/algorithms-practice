/**
 * @prop {string} membershipId: The customer's membership ID.
 * @return {number} The check digit.
 */
function createCheckDigit(membershipId) {
  // Write the code that goes here.
 
  
  var idArray = membershipId.split('');
  var sum; 
  while(true) {
   
    sum = 0;
    idArray.forEach((number) => {
    sum += +number; 
  })  
    
    if(sum < 10){
      return sum;
    }
    else{
        idArray = (sum.toString()).split('');
        continue;
    }
  }

}

// console.log(createCheckDigit("9999991"));

// let myString = "Bananas, Pears, Oranges, Apples, Peaches";

// console.log(myString);
// console.log(myString.split(",").sort().join(" "));

function jumpingOnClouds(c) {
    
    let minJumps = 0;
    let cloudIndex = 0; 
    
    while(cloudIndex < (c.length - 1) ){
       
       cloudIndex += 2;
       cloudIndex += (c[cloudIndex] === 0) ? 0 : -1;
       minJumps++; 
        
    }
    
    return minJumps; 

}

// let c = [0,0,1,0,0,0,0,1,0,0];
// console.log(jumpingOnClouds(c));

function repeatedString(s, n) {

    let numberOfAInString = 0; 
    let loopCounter = 0;
    let remainderCheck = 0; 
    
    if(n <= s.length){
        for(let i = 0; i < n; i++){
            if(s[i] === 'a'){
                numberOfAInString++;
            }
        }      
        return numberOfAInString;
    }
    
    for(let a of s){
        if(a === 'a')
            numberOfAInString++;
    }
    
    loopCounter = n/s.length; 
    remainderCheck = n % s.length;
    
    if(remainderCheck === 0){
        return numberOfAInString * loopCounter;
    }
    else {
        numberOfAInString *= Math.floor(loopCounter);
        for(let i = 0; i < remainderCheck; i++) {
            if(s[i] === 'a'){
                numberOfAInString++; 
            }
        }
    }
    
    return numberOfAInString;

}

// function arrayManipulation(n, queries) {

//     let queryIndex = 0;
//     let arr = new Array(n+1).fill(0);
//     let biggestNum = 0; 
    
//     while(queries[queryIndex]){
//         for(let i = queries[queryIndex][0]; i <= queries[queryIndex][1]; i++){
//             arr[i] += queries[queryIndex][2];
//             if(arr[i] > biggestNum){
//                  biggestNum = arr[i];
//             }
               
//         }

//         queryIndex++;
//     }
    
//     return biggestNum;
// }

// function arrayManipulation(n, queries) {

//     let queryIndex = 0;
//     let arr = new Array(n+1).fill(0);
//     let biggestNum = 0; 
    
//     while(queries[queryIndex]){
//         for(let i = queries[queryIndex][0]; i <= queries[queryIndex][1]; i++){4
//             arr[i] += queries[queryIndex][2];
//             if(arr[i] > biggestNum){
//                  biggestNum = arr[i];
//             }
               
//         }

//         queryIndex++;
//     }
    
//     return biggestNum;
// }

// let n = 10000000;
// let q = [
//     [1,5,3],
//     [4,8,7],
//     [6,9,1]
//     ]

// console.log(arrayManipulation(n,q));

// function sockMerchant(n, ar) {
    
//     let sockObject = []; 
//     let pairs = 0;
    
//     for(let s of ar){
//         if(sockObject[s]){
//             sockObject[s]++;
//         }
//         else
//             sockObject[s] = 1;
//         console.log(sockObject[s]);
//     }
    
//     for(let c in sockObject){
//         pairs += Math.floor(sockObject[c] / 2);
//     }
    
//     console.log(sockObject);
    
//     return pairs; 

// }

// let n = 9;
// let arr = [10,20,20,10,10,30,50,10,20];

// console.log(sockMerchant(n, arr));

// function rotLeft(a, d) {
    
//     let rotated_array = new Array(a.length).fill(0);
    
//     for(let i = 0; i < a.length; i++){
//         let rot_index = ((i+d)%(a.length));
//         console.log(rot_index);
//         rotated_array[i] = a[rot_index];
//     }
    
//     return rotated_array; 
// }

// let d = 4;
// let a = [1,2,3,4,5];

// console.log(rotLeft(a, d));

// function checkMagazine(magazine, note) {

//     let magazineMap = {};
//     for (let word of magazine) {
//         if (magazineMap[word]) {
//             magazineMap[word]++;
//         }
//         else {
//             magazineMap[word] = 1; 
//         }
//     }
//     for (let word of note) {
//         if (magazineMap[word] > 0) {
//             magazineMap[word]--; 
//         }
//         else {
//             return "No";
//         }
//     }

//     return "Yes";

// }

// let magazine = ["give", "me", "one", "grand", "today", "night"];
// let note = ["give", "one", "grand", "today"];

// console.log(checkMagazine(magazine, note));

// Complete the climbingLeaderboard function below.
function climbingLeaderboard(scores, alice) {

    let aliceRanking = [];
    let mergeScores = [];

    //Convert scores to collapsed ranking 
    for (let index in scores) {
        if (index === 0) {
            mergeScores.push(scores[index]);
        }
        else {
            if (scores[index] !== scores[(index - 1)]) {
                mergeScores.push(scores[index]);
            }
        }
    }

    //compare Alice scores with collapsed rank positions
    for (let aliceIndex = 0; aliceIndex < alice.length; aliceIndex++){
        for (let ranking = 0; ranking < mergeScores.length; ranking++){
            if (alice[aliceIndex] > mergeScores[ranking]) {
                aliceRanking.push((ranking + 1));
                mergeScores.splice(ranking, 0, alice[aliceIndex]);
                break;
            }
            else if (alice[aliceIndex] === mergeScores[ranking]){
                aliceRanking.push((ranking + 1));
                break;
            }
            else {
                if (ranking === (mergeScores.length - 1)) {
                    aliceRanking.push(mergeScores.length + 1);
                    mergeScores.push(alice[aliceIndex]); 
                    break; 
                }
                continue;
            }

        }
    }


    
    return aliceRanking; 

}

let scores = [100,100,50,40,40,20,10];
let alice = [5,25,50,120];

// console.log(climbingLeaderboard(scores, alice));