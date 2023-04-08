##  Best Time to Buy and Sell Stock

### Question Link : [Description](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/)

### Solution 1 Description :

  * Intuition :
    - We wll first take a variable where we will be storing the buyPrice. Let's take first element from the array as the buyPrice.
    - Now, we take another variable(profit) where we will be storing our result. 
    - Now we will be iterating over the array.
    - While iterating if we find any value lesser than the butPrice then we will be updating that as we want the buyPrice to be as less as possible to maximize the profit.
    - Next step will be to update profit by picking the maximum value out of the current profit price or the difference between the buyPrice and current elememt of the array.
    - Finally, we will return profit.

  * Time Complexity : O(N)
  * Space Complexity : O(1)

