const swap = (array, index1, index2)=>{
    let temp=array[index2];
    array[index2]=array[index1];
    array[index1]=temp
};

module.exports = swap;