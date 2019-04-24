
// O(n^2)
// let minimumBribes = (q) => {
    
//     let pos = 0;
//     let posVal = 1; 
//     let bribe = 0;
//     let Q = q.slice();
    
//     while(pos !== q.length){
        
        
//         // console.log( pos + " " + q[pos] + ": " + (q[pos] - (posVal)));
//         if(q[pos] > posVal && (q[pos] - (posVal)) > 2){
//             return "Too chaotic"; 
//         }
        
//         for(let i = pos; i < q.length; i++){
//             if(Q[i] === (posVal)){
//                 bribe += (i - pos);
//                 //Remove value at i position 
//                 Q.splice(i, 1); 
//                 //Insert correct value to pos
//                 Q.splice(pos, 0, posVal);
//                 break; 
//             }
//         }
        
//         pos++; 
//         posVal++;
//     }
    
//     // console.log(Q);
//     return bribe;
// };

let minimumBribes = (q) => {
    
    let pos = 0;
    let posVal = 1; 
    let bribe = 0;
    let Q = q.slice();
    let currentIndex = 0; 
    
    for (let index in q){
        if(q[index] - index > 2){
            return "Too chaotic";
        }
    }

        for(let i = pos; i < q.length; i++){
            if(Q[i] === (posVal)){
                bribe += (i - pos);
                //Remove value at i position 
                Q.splice(i, 1); 
                //Insert correct value to pos
                Q.splice(pos, 0, posVal);
                break; 
            }
        }
        
        pos++; 
        posVal++;
    
    // console.log(Q);
    return bribe;
};

let arr = [2,5,1,3,4];

console.log(minimumBribes(arr));