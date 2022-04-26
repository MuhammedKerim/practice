function fib(n, memo = []) {
    // if you have the value do not recaculate it
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2) return 1;
    var res = fib(n - 2, memo) + fib(n - 1, memo);
    memo[n] = res;
    return res;
}

function fibR(n) {
    if (n <= 2) return 1;
    var fibNums = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i - 2] + fibNums[i - 1]
    }
    return fibNums[n];
}