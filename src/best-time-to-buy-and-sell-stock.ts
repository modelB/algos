// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

function maxProfit(prices: number[]): number {
  let lowestBuyPrice = prices[0];
  let maxProf = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < lowestBuyPrice) lowestBuyPrice = prices[i];
    else {
      maxProf = Math.max(prices[i] - lowestBuyPrice, maxProf);
    }
  }
  return maxProf;
}
