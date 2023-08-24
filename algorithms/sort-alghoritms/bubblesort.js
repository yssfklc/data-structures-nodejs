const swap = require('./swap.js');

const bubbleSort = (array)=>{
    let swapping = true;

    while(swapping){
        swapping=false;
        for(i=0;i<array.length;i++){
            if(array[i]>array[i+1]){
                swap(array, i, i+1);
                swapping = true;
            }
        }
    }
    return array;

};

console.log(bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9]));

let array = [9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(array.sort());


module.exports = bubbleSort;