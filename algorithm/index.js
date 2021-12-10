function countIdenticalPairs(arr) {
  const countMap = {};

  arr.forEach((item) => {
    if (!countMap[item]) return (countMap[item] = 1);
    countMap[item]++;
  });

  let sum = 0;
  for (let count in countMap) {
    sum += (countMap[count] * (countMap[count] - 1)) / 2;
  }
  return sum;
}

console.log(countIdenticalPairs([1, 1, 1, 2, 2, 2, 2, 2, 3, 4, 6, 6, 6]));
