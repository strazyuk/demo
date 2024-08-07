class Solution(object):
    def removeDuplicates(self, nums):
        j = 0
        for i in range(0, len(nums)):
            if nums[j] != nums[i]:
                j += 1
                nums[j] = nums[i]
                

        return j + 1  
        
s=Solution()
print(s.removeDuplicates([1,1,2,3,3,3,3,4,5,6,6,7]))
