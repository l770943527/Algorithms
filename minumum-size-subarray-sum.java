public class Solution {
    // 窗口法
    public int minSubArrayLen(int s, int[] nums) {
        if(nums == null|| nums.length ==0)return 0;
        int j =0;
        int sum = 0;
        int ans = Integer.MAX_VALUE;
        for(int i = 0;i < nums.length;i++){
            while( j<nums.length && sum<s){
                sum+=nums[j];
                j++;
            }
            if(sum>=s)ans = Math.min(ans,j-i);
             //窗口左侧移动
             sum -=nums[i];
        }
        if(ans== Integer.MAX_VALUE)return 0;
        return ans;
    }
}