function findOptimalChange(coins, amount) {
    const dp = new Array(amount + 1).fill(null);
    dp[0] = { count: 0, usedCoins: [] };
  
    for (let i = 1; i <= amount; i++) {
      dp[i] = { count: Infinity, usedCoins: [] };
  
      for (const coin of coins) {
        if (i - coin >= 0 && dp[i - coin].count + 1 < dp[i].count) {
          dp[i].count = dp[i - coin].count + 1;
          dp[i].usedCoins = [...dp[i - coin].usedCoins, coin];
        }
      }
    }
  
    return dp[amount].usedCoins;
  }
  
  const coinsAndBanknotes = [2, 5, 10];
  const targetAmount = process.argv[2];
  
  const optimalChange = findOptimalChange(coinsAndBanknotes, targetAmount);
  
  if (optimalChange.length === 0) {
    console.log(null);
  } else {
    const counts = {};
  
    for (const num of optimalChange) {
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
  
    console.log({
      two: counts['2'] ? counts['2'] : 0,
      five: counts['5'] ? counts['5'] : 0,
      ten: counts['10'] ? counts['10'] : 0
    });
  }