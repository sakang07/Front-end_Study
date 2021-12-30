// import_before.js
const data = ['banana', 'melon'];

const codeFile = () => {
  return `
  <h1>hello</h1>
  <ul>
    <li>${data[0]}</li>
    <li>${data[1]}</li>
  </ul>
  `
};

export default codeFile;


// #wrap
  // #headBox
    // h1
    // nav
      // unb
      // gnb

  // changeArea - router(페이지 변환 역할)
    // #viewBox
    // #contentBox

  // #footBox

  // react의 핵심 : SPA(Single Page Application)
  // index.html의 한 페이지 내에서 모든 동작이 비동기적으로 수행된다
  // 모든 데이터를 한번에 불러오기 때문에 첫 로딩은 느리나 이후 로딩은 빠르다

  // virtual DOM : 가상 DOM
  // 웹페이지 전체에서 필요한 일부만 원하는 데이터로 바꾸는 기술

  // JSX - Javascript XML
  // component
  // 1. 열었으면 닫기 <div></div> <br /> <input />
  // 2. 직접 만든 코드는 첫글자를 대문자로 <Component></Component>
  // 3. export-import하는 코드명과 파일명은 똑같이 맞춘다
