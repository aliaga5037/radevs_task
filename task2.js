function queueTime(customers, cashiers) {
  if (customers.length === 0 || !cashiers) return 0;

  let cashiersQueue = new Array(cashiers).fill(0);

  while (customers.length > 0) {
    let min = Math.min(...cashiersQueue);
    let index = cashiersQueue.indexOf(min);
    cashiersQueue[index] += customers.shift();
  }

  return Math.max(...cashiersQueue);
}