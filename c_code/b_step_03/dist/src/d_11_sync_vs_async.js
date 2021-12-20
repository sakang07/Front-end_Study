// d_11_sync_vs_async.js

let num = 0;

/*
// 순서의 흐름대로 처리
console.log(num);
console.log(num += 1);
console.log(num += 3);
console.log(num += 5);
console.log(num);
*/

console.log('1: ', num);
console.log('2: ', num += 1);

setTimeout(() => {
  console.log('3: ', num += 3);
}, 100);

setTimeout(() => {
  console.log('4: ', num += 3);
}, 300);

console.log('5: ', num);