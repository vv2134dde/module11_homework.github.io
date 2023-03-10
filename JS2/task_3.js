function func1 (x) {
    return 2;
};
function sum (func2, x) {
  return func2(x) + x;
};
console.log(sum(func1, 11));