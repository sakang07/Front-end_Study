// d_08_for_of.js

const arr = [1,2,3,4,5,6,7, '-----'];
console.log(arr);

// for
for(let i = 0; i < arr.length; i++){
  console.log(arr[i])
}

// forEach
arr.forEach((d,i) => {
  console.log(d);
});

// for-in : 객체의 순환에서 사용하므로 배열에서는 오작동. index만 출력된다.
for(let i in arr){
  console.log(i)
}

// for-of : 해당하는 변수의 값이 순환처리가 되어야 동작
// 
for(let i of arr){
  console.log(i)
}

// -----------------------------------

// 문자열의 순환
let text = 'javascript';
// console.log(text[0]);

// for: 작동
for(let i = 0; i < text.length; i++){
  console.log(text[i]);
}

// for-of : 작동
for(let i of text) {
  console.log(i);
}

// forEach로는 TypeError
// text.forEach((d,i) => {console.log(d)})

// --------------------------------------

// 객체의 상태로는 for-of 문으로 순환시킬 수 없다
const obj = {
  'samsung' : 'galaxy',
  'apple' : 'iphone',
  'lg' : 'wing',
  'nokia' : 'N series'
};

// Object.keys() : 객체의 프로퍼티 키만 뽑아서 배열화
const key = Object.keys(obj);
// Object.values() : 객체의 프로퍼티 값만 뽑아서 배열화
const val = Object.values(obj);
// Object.entries() : 객체의 [키, 값]을 뽑아 배열화
const ent = Object.entries(obj);
console.log(key, val, ent);

// 배열화 시킨 객체를 순환
for(let [i,v] of ent) {
  console.log(`${i}, ${v}`);
}

// obj[Symbol.iterator] = function() {
//   return {
//     current: this.samsung,
//     last: this.lg,

//     next() {
//       if (this.samsung <= this)
//     }
//   }
// }