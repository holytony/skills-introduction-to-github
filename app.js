function printFibonacciSequence(n) {
  let a = 0, b = 1, sequence = [a, b];

  while (b <= n) {
    let temp = b;
    b = a + b;
    a = temp;
    sequence.push(b);
  }

  console.log(`Fibonacci sequence up to ${n}: ${sequence.join(', ')}`);
}
