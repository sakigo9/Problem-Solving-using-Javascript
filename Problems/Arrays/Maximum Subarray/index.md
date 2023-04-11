##  Maximum Subarray

### Question Link : [Description](https://leetcode.com/problems/maximum-subarray/)

### Solution Brute Force Solution Description :

  * Intuition :
    - Here, we will find all possible subarrays using two loops.
    - One loop will be dedicated to find the subarray sum of a given subarray.
    - We can take a global variable and once we find any greater value then we will update it.
    - Return the globally maintained value.

  * Time Complexity : O(N^3)
  * Space Complexity : O(1)


### Optimal Solution Descriptions : Kadane's Alogorithm

  * Intuition :
     - We will take variable(res) and assign some big number.
     - We will maintain a temporary variable called temp.
     - We will start iterating over the given array and keep adding one element at a time.
     - Once we find any greater value then res, then we will update it.
     - Now, keep doing this until we find that temp is less than zero. Reason is that we have to maximize the sum.
     - Once we will complete the iteration, res will be having the desired result.

  * Time Complexity : O(N)
  * Space Complexity : O(1)





