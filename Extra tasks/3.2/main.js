/* eslint-disable prefer-rest-params */

function mySum(a, b) {
  return a + b;
}
function mySub(a, b) {
  return a - b;
}
function mySubReverse(a, b) {
  return -a + b;
}
function myMul(a, b) {
  return a * b;
}
function myDiv(a, b) {
  return a / b;
}
function myDivReverse(a, b) {
  return b / a;
}
function add(...args) {
  if (args.length === 2) {
    return mySum(args[0], args[1]);
  } if (args.length === 1) return mySum.bind(null, args[0]);
  return false;
}
function sub(...args) {
  if (args.length === 2) {
    return mySub(args[0], args[1]);
  } if (args.length === 1) return mySubReverse.bind(null, args[0]);
  return false;
}
function mul(...args) {
  if (args.length === 2) {
    return myMul(args[0], args[1]);
  } if (args.length === 1) return myMul.bind(null, args[0]);
  return false;
}
function div(...args) {
  if (args.length === 2) {
    return myDiv(args[0], args[1]);
  } if (args.length === 1) return myDivReverse.bind(null, args[0]);
  return false;
}
function pipe(...args) {
  return (initValue) => args.reduce((acc, el) => el(acc), initValue);
}

const sum1 = add(1);
const c = sum1(2);
console.log(add(2, 3));
console.log(c);
const sub1 = sub(1);
const b = sub1(2);
console.log(sub(45, 3));
console.log(b);
const mul1 = mul(5);
const f = mul1(2);
console.log(mul(4, 3));
console.log(f);
const div1 = div(5);
const g = div1(2);
console.log(div(12, 3));
console.log(g);
const n1 = 5;
const n2 = 2;
const n3 = 3;
const n4 = 2;
const doSmth = pipe(add(n1), sub(n2), mul(n3), div(n4));
const result = doSmth(0);
console.log(result);
const x = pipe(add(1), mul(2))(3);
console.log(x);
