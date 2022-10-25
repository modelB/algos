// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
// TODO

function maxProfit2(prices: number[]): number {
  let buyPrice = Infinity;
  let prof = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < buyPrice) buyPrice = prices[i];
    else {
      prof += prices[i] - buyPrice;
      buyPrice = prices[i];
    }
  }
  return prof;
}

console.log(maxProfit2([4, 0, 1, 0, 0, 0, 6, 1, 4]));
