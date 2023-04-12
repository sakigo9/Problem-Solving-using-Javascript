##  Rearrange Array Elements by Sign

### Question Link : [Description](https://leetcode.com/problems/rearrange-array-elements-by-sign/description/)

### Solution 1 (Brute Force) Description :

  * Intuition :
    - We will take 2 arrays for storing negative numbers and positive numbers respectively.
    - Iterate over the array and separate the positive and negative numbers.
    - Then, take result array to push elements into the array accordingly.
    - Return the result array.

  * Time Complexity : O(N) + O(N) 
  * Space Complexity : O(N) + O(N)



  ### Solution 2 (Slightly Modified) Description :
    
     * Intuition :
      - Here, we will not take additional arrays for stroring our results.
      - Will modify the main array that is provided in the question.
      - When comparing this with aforementioned solutions, we will now take less memory.
      
    * Time Complexity : O(N) + O(N) 
    * Space Complexity : O(N)

  ### Solution 3 (Optimal) Description :
    
     * Intuition :
     - If look closer to aforementioned solutions we need to traverse the array twice which makes the complexity O(2N).
     - We will try to bring down that complexity.
     - If we see the description, then we can figure out that indexes has a crucial role in the arrangment required.
     - All Odd index positions are alloted for Postive Numbers while the even index positions are for negative numbers.
     - We will make use of this information to pan out a solution.
     - For all positive elements we allot the odd index and update the positivePointer and negativePointer for negative numbers.
     - Do observe that for each assignment we have update the positive and negative pointers.
      
    * Time Complexity : O(N) 
    * Space Complexity : O(N)


## Special Challange for Contributors : [Status : Pending]

    - Let's suppose we have an array with positive and negative numbers. This time the frequencies of positive and negative numbers are equal. Your task is to follow the same rearrangement of numbers but this time add additional elements at the end of the result array.

    Test Case 1 : [4,-1,-8,3,-2,-7,-9] 
    Expecetd Solution : [4,-1,3,-8,-2,-7,-9]