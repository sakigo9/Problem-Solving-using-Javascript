

/**
 * Solution 1 : Brute Force
 */

var rearrangeArray = function(nums) {
    let positiveNumber=[],negativeNumber=[]
    let result=[]
    for(let i=0;i<nums.length;i++){
        nums[i]>=0?positiveNumber.push(nums[i]):negativeNumber.push(nums[i])
    }
    for(let i=0;i<nums.length/2;i++){
        result.push(positiveNumber[i]);
        result.push(negativeNumber[i]); 
    }
    return result
};


/**
 * Solution 2 : Slightly Modified
 */

var rearrangeArray = function(nums) {
    let positiveNumber=[],negativeNumber=[]
    for(let i=0;i<nums.length;i++){
        nums[i]>=0?positiveNumber.push(nums[i]):negativeNumber.push(nums[i])
    }
    for(let i=0;i<nums.length/2;i++){
        nums[i*2]=positiveNumber[i]
        nums[i*2+1]=negativeNumber[i]
    }
    return result
};

/***
 * Solution 3 : Optimal
 */

var rearrangeArray = function(nums) {
    let positivePointer=0,negativePointer=1
    let result=[]
    for(let i of nums){
        if(i>0){
            result[positivePointer]=i
            positivePointer+=2
        }else{
            result[negativePointer]=i
            negativePointer+=2
        }
    }
    return result
};
