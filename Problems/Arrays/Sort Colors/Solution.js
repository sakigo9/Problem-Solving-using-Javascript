var sortColors = function(nums) {
    let zeros=0,ones=0,twos=0;
    for(let i of nums){
        i===0?zeros++:i===1?ones++:twos++
    }
    for(let i=0;i<nums.length;i++){
        i<zeros?(nums[i]=0):i<zeros+ones?(nums[i]=1):nums[i]=2;
    }
    return nums
};