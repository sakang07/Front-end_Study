// d_10_scrollMove_002.js

// * 브라우저에서 스크롤이 얼만큼 움직였는가에 따라 그 값을 가지고 이미지를 변경하게 처리
/**
 * 1. img 모두 첨부 후 1장 제외 display:none;
 * 2. 스크롤시 이동값
 * 3. 스크롤을 내려 이미지를 다 보여주고 나면 이후의 내용이 보이도록 처리
 */

const elViewBox = document.querySelector('#viewBox');
const elImgArea = elViewBox.querySelector('.img_area');
const COUNT_NUM = 80;
const OPTION_ON = 'on';

// 이미지 첨부 함수

const fnImgInsert = n => {
  const converStr = '000000' + (n + 1); // 문자열로 만들기
  const cutNum = converStr.slice(-3); // 뒷자리에서 세번째까지 가져오기

  const [url, alt] = [`../multi/img/clean_machine/`, `청소기 광고`];
  let fileName = `${url}clean_${cutNum}.png`;
  
  const mkImg = document.createElement('img');
  if(n === 0) {mkImg.classList.add(OPTION_ON)}

  mkImg.setAttribute('src', fileName);
  mkImg.setAttribute('alt', alt);
  elImgArea.append(mkImg);
};

for(let i = 0; i < COUNT_NUM; i++) {
  // fnImgInsert('001'); // 숫자는 00으로 시작할 수 없으므로 문자열로 넣어야 한다
  // 방법 1
  // i < 9 ? console.log(`00${i + 1}`) : console.log(`0${i + 1}`);

  // 방법 2
  // let num = i + 1;
  // let converStr = num.toString();
  // console.log(converStr.padStart(3, '0'));

  // 방법 3
  // let converStr = '000000' + (i + 1); // 문자열로 만들기
  // let cutNum = converStr.slice(-3); // 뒷자리에서 세번째까지 가져오기
  // // console.log(cutNum);
  fnImgInsert(i);
}

// 기능처리 후 변수
const elImg = elImgArea.children;
const elImgArr = [...elImg];

// 이벤트 -----------------------------------------------
// 브라우저에서 스크롤이 실행되었을 때
window.addEventListener('scroll', e => {
  // 브라우저(this === e.currentTarget)에서 스크롤이 움직인 값 파악(scrollY)
  const targetScroll = e.currentTarget.scrollY;  
  let moveScroll = parseInt(targetScroll / 30); // 스크롤 값을 나눠서 숫자를 작은 값으로 제한

  // moveScroll의 최대값은 COUNT_NUM을 넘기지 않게
  // if(moveScroll >= COUNT_NUM) { moveScroll = COUNT_NUM - 1 }
  let scrollN = moveScroll >= COUNT_NUM ? COUNT_NUM - 1 : moveScroll;
  
  // 이미지 중에서 moveScroll의 값에 해당하는 이미지가 나타나고, 나머지는 사라지게 수행
  elImgArr.forEach((img,idx) => {
    idx !== scrollN ? img.classList.remove(OPTION_ON) : img.classList.add(OPTION_ON); 
  });
  // 이미지 할당 요소 이동 수행(topMove가 음수로 나타나는 시점)  
  // 이미지가 모두 처리된 시점을 기준으로 해당 요소는 위로 올라가게
  let topMove = COUNT_NUM + 20 - moveScroll; 
  if(topMove <= 0) {
    elViewBox.style.top = (topMove * 25) + 'px';
  }


});

