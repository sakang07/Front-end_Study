// b_04_js_nesting_object.js

var arr = [];   // 참조변수

// arr이 배열인지 확인하는 3항 연산자
var ck = (arr.constructor === Array) ? 'array' : 'other';
console.log(typeof arr, ck);    // object array

// new 생성자 함수 : 사용 권장 X prototype과 연관
var arr2 = new Array();

arr = ['과일', '고기', '깐풍기', '회', '냉면'];
console.log(arr[2]);    // 깐풍기

arr2 = ['포도', '사과', '배', '감', '귤', '자몽'];

arr3 = ['냉면', '라면', '우동', '회냉면', '쫄면', '밀면', '야끼우동', '국수'];


// arr과 arr2의 이중 배열
// [
//   ['과일', '고기', '깐풍기', '회', '냉면'],
//   ['포도', '사과', '배', '감', '귤', '자몽'],
//   '회',
//   ['냉면', '라면', '우동', '회냉면', '쫄면', '밀면', '야끼우동', '국수']
// ]
var arrList = [arr, arr2, '회', arr3];

console.log(arrList[0][2]);   // 깐풍기
console.log(arrList[2], arrList[0][3]);   // 회 회
console.log(arrList[0][4], arrList[3][0]);   // 냉면 냉면

var phone = '010-0000-0000';
var addr = '서울시 어쩌구'

// '-'로 이어진 부분을 쪼개서 배열로 만들기
var myArr = phone.split('-');
console.log(myArr);


// ===========================================================
console.clear();

var obj = {};
var objCk = (obj.constructor === Object) ? 'object' : 'other';
console.log(typeof obj, objCk);

// new 생성자 함수 
var objOrigin = new Object();
console.log(objOrigin);

// { property: value } // property와 value를 합쳐서 attribute
// 객체 안에 들어가는 따옴표는 쌍따옴표("") 권장 : JSON과 연동 편의성을 위해
obj = { meat: "채끝살", fruit: "샤인머스캣", noodle: "쫄면", "mobile phone": "samsung" }

// 프로퍼티 선택
console.log(obj.fruit);   // 샤인머스캣
console.log(obj["mobile phone"]);   // samsung

// 이중 객체
var obj2 = { web: "frontEnd", myObj: obj };

console.log(obj2);  
console.log(obj2.myObj.meat);   // 채끝살
console.log(obj2["myObj"]["meat"]);   // 채끝살

// ===========================================================
console.clear();

// 배열 내부에 객체 내부에 배열
var drink = [
  {'coffee': ['americano', 'esspresso', 'latte', 'mocha', 'choco latte'] },
  {'alcole': ['맥주', '소주', '막걸리', '청주', '데킬라'] },
  {'juice': ['오렌지', '포도', '자몽', '망고'] },
  {'tea': ['breakfast', 'green', 'red', 'lemon', 'earl gray', 'peppermint'] },
  {'ade': ['자몽', '키위', '레몬'] }
];

// 중첩된 배열과 객체 내부에서 원하는 값 찾기
console.log(drink[3].tea[5]);   // peppermint

// ===========================================================
console.clear();

// 객체 안에 신상명세를 입력하는 함수
var data = {};
var mySet = {
  name: function(d) {
    return data.user = d;
  },
  old: function(d) {
    return data.old = d;
  },
  gender: function(d) {
    return data.gender = d;
  }
};

console.log(data);

// 이름 삽입
mySet.name('seula');
console.log(data);    // {user: "seula"}

// 나이 삽입
mySet.old(20);
console.log(data);    // {user: "seula", old: 20}

// 성별 삽입
mySet.gender('female');
console.log(data);    // {user: "seula", old: 20, gender: "female"}

// for... in 문 : 배열 요소를 하나하나 꺼내서 문장을 실행
// for (var 반복변수 in 배열 또는 객체) {
//   문장
// }
for (sam in data) {
  console.log(sam + ':' + data[sam]);
}

var js = 'javascript';
var jsArr = js.split('').reverse().join('');
console.log(jsArr);

