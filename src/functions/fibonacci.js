export const fibonacci = (n) => {
  const phi = (1 + Math.sqrt(5))/2;
  const asymp = Math.pow(phi, n) / Math.sqrt(5);
  return Math.round(asymp);
};

export const fibonacciSequence = (l) => {
  const fib = [];
  let i = 0;
  for(i = 0; i < l; i++) {
    fib.push(fibonacci(i));
  }
  return fib;
};
