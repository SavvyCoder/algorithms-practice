
// // function reverseString(sentence) {

// //     if(typeof sentence === "string"){
// //         let words = sentence.split(" "); 
// //         let reverse = [];
// //         words.map(word => {
// //             reverse.unshift(word);
// //         });
// //         return reverse.join(" "); 
// //     }
// //     else {
// //         return console.log("not a string!");
// //     }
// // }

// // console.log(reverseString(5));

// // function charCount(str){
// //     //Loop through string and count characters 
// //     //Split string into explicit array 
// //     let strArray = str.split("");
    
// //     //Create char count object
// //     let resultCount = {}; 
// //     //look at each character in array
// //     strArray.map(char => {
// //         //check to see if char already in object 
        
// //         if(char in resultCount){
// //             (resultCount[char])++;
// //         }
// //         else  {
// //             resultCount[char] = 1; 
// //         }
// //     }
// //     )
// //     //return count of each alpha-numeric character (treat them all as lowercase)
// //     return resultCount; 
// // }

// // console.log(charCount("Hello my name is Savinda.")); 

// //Build an anagram Frequency coutner

// //example cases 
// //validAnagram("hello", "olleh") true
// //validAnagram("hello", "ollehh") false 

// // function validAnagram(str1, str2){
// //     //do something 
// //     //compare two objects 
    
// //     //check length of strings 
// //     if(str1.length != str2.length){
// //         return false; 
// //     }
    
// //     //create our objects
// //     let str1Obj = {};
// //     let str2Obj = {};

    
// //     //loop through str1 and update object with character frequencies 
// //     for(let char of str1){
// //         //if char doesn;t exist create key value pair, otherwise update value at that key 
// //         str1Obj[char] = (str1Obj[char] || 0) + 1; 
// //     }
// //     for(let char of str2){
// //         str2Obj[char] = (str2Obj[char] || 0) + 1; 
// //     }
    
// //     //Loop through object and test if key value pairs are the same
// //     for(let char in str1Obj){
// //         //compare to str2Obj
        
// //         if(str1Obj[char] === str2Obj[char]){
// //           continue; 
// //         }
// //         else {
// //             return false; 
// //         }
// //     }
    
// //     //return true or false 
// //     return true; 
// // }

// // console.log(validAnagram("hello", "ollih"));

// //Count unique values in sorted Array 

// //Examples
// //-----------
// // countUniqueValues([-1,-1,-1,0,0,0,0,0,5,5,9])  //return 4

// // function countUniqueValues(sortedArray){
// //     //do something 
// //     //move througth the array and compare values 
    
// //     //Check if array has at least 2 values or if array is empty
    
// //     if(sortedArray.length === 0){
// //         return 0; 
// //     }
// //     if(sortedArray.length === 1) {
// //         return 1; 
// //     }
    
// //     //create 2 indexes 
// //     let first = 0; 
// //     let second = 1; 
    
// //     //create unique value counter 
// //     let uniqueValues = 0;
    
// //     //move through the array over iterables (which are our numbers)
// //     while(!(second > sortedArray.length)){
// //         //check if second is equal to first 
// //         if(sortedArray[first] === sortedArray[second]){
// //             second++; 
// //         }
// //         //if not set first equal to second and increment second 
// //         else {
// //             first = second;
// //             second++;
// //             uniqueValues++; 
// //         }
// //     }
    
// //     //return #ofuniquevalues 
// //     return uniqueValues;
// // }

// // console.log(countUniqueValues([-5,-1,-1,-1,0,0,0,0,0,5,5,9]));

// // //write factorial recursively 
// // function computeFactorial(num){
// //     //do something
// //     //base case
// //     if(num <= 1){
// //         return 1; 
// //     }
// //     //recursive component which returns our factorial 
// //     return num * computeFactorial(num - 1); 
  
// // }

// // console.log(computeFactorial(10)); 

// //Same frequency 

// // function sameFrequency(num1, num2){
// //     //do something 
    
// //     //Converting integer value into string for string methods 
// //     var num1String = "" + num1; 
// //     var num2String = "" + num2;
    
// //     //Check if numbers are of same length 
// //     if(num1String.length !== num2String.length){
// //         return false; 
// //     }
        
// //     //Create two objects for each input to keep track of frequencies
// //     let firstNumberFrequency= {};
// //     let secondNumberFrequency = {}; 
    
// //     //looping through number 1 string and filling num1 object
// //     for(let value of num1String){
// //         firstNumberFrequency[value] ? firstNumberFrequency[value]++ : firstNumberFrequency[value] = 1; 
// //     }
// //     //loop through number 2 string and place into object
// //     for(let value of num2String){
// //         secondNumberFrequency[value] ? secondNumberFrequency[value]++ : secondNumberFrequency[value] = 1; 
// //     }
    
// //     //Compare key value pairs in object 
// //     for(let key in firstNumberFrequency){
// //         if(firstNumberFrequency[key] === secondNumberFrequency[key]){
// //             continue; 
// //         }
// //         else {
// //             return false; 
// //         }
// //     }
    
    
// //     //return true
// //     return true; 
// // }

// // console.log(sameFrequency(8155557, 5185557)); 

// //Function to check if there are duplicates in the arguments list 

// //(4,4,1,2,3) true 
// //('hello', 5 ,6 ,7 ,8 , 'hello' ) true 
// //(1,2,3,4,'4') //false 


// function areThereDuplicates () {
//     //do something 
//     let argumentObject = {};
    
//     for(let i = 0; i < arguments.length; i++){
//         arguments[i] += typeof arguments[i]; 
//         argumentObject[arguments[i]] ? argumentObject[arguments[i]]++ : argumentObject[arguments[i]] = 1; 
//     }
    
//     for(let key in argumentObject){
//         if(argumentObject[key] >= 2){
//             return true;
//         }
//     }
    
//     //return true or false
//     return false; 
// }

// // console.log(areThereDuplicates(3,2,1,'x','x','5'));

// //Eden Corbin
// //Cosmos Corbin
// //(names) 

// //()

// // var LastNames = [	"Dunn", "Thomas", "Watkins", "Cannon", "Wood", "Reeves", "Miller", "Ramsey", "Martin"]
// // var FirstNames = ["Brett",	
// // "Felicia",	
// // "Laurie",	
// // "Roman",	
// // "Ronald",	
// // "Edna",	
// // "Paula",	
// // "Darren",	
// // "Jonathon"	]  





// // function sortedNames(firstName, lastName){
    
// //     //do something
// //     //Sort the lastnames
    
// //     let fullName = [];
    
// //     //loop through last name array and append firstname 
// //     for(let index in lastName){
// //         fullName[index] = lastName[index] + " " + firstName[index]; 
// //     }
    
// //     //Sort our full name array by last name 
// //     fullName.sort(); 
    
    
// //     //return names
// //     return fullName

// // }


// // //Function to call every third name
// // function callEveryThirdName(fullname){
// //     //do something
    
// //     let thirdName =  [];
    
// //     //loop through fullname array
// //     for(let index in fullname){
// //         //check if index is at thiird position 
// //         if(index % 3 === 0){
// //             thirdName.push(fullname[index]);
// //         }
// //         else {
// //             continue
// //         }
// //     }
    
// //     //return every third name 
// //     return thirdName; 
// // }

// // console.log(sortedNames(FirstNames, LastNames));
// // console.log(callEveryThirdName(sortedNames(FirstNames, LastNames)));

// //average pair function 
// //find a a pair of values that equals the value of the average value provided using the multiple pointers pattern  
// //the input is a sorted array and a target value 

// // function averagePair(arr, target) {
    
// //     let first = 0;
// //     let second = 1;
// //     let avg = Number.NEGATIVE_INFINITY; 
    
// //     function average(num1, num2){
// //         return (num1 + num2)/2
// //     }

// //     while(true){
// //         if((avg < target) && (second < arr.length)){
// //             avg = average(arr[first], avg[second]);
// //             if(avg === target){
// //                 return avg; 
// //             }
// //             else{
// //                 second++;
// //             }
// //         }
// //         else if(f){
            
// //         }
// //     }
    
// // }