

/**
 * Optimal Solution
 */

var maxSubArray = function(nums) {
    let res=-Number.MAX_VALUE
    let temp=0
    for(let i=0;i< nums.length;i++){
        temp=temp+nums[i];
       
        res=Math.max(res,temp)
         if(temp<0){
            temp=0;
        }
    }
    return res;
};