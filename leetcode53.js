var maxSubArray = function(nums) {
    result=0
    negativenumber=[]
    for(i=0;i<nums.length;i++){
        if(nums[i]<0){
            negativenumber.push(nums[i]);
    }else{
      result+=nums[i];
    }
    }
    return result;
};
maxSubArray([-2,1,-3,4,-1,2,1,-5,4])//should return 6
maxSubArray([-1])//should return -1
maxSubArray([-1,-2])//should return -1