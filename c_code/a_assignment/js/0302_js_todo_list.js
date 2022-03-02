// 0302_js_todo_list.js
// 1. form에 입력한 value 값을 버튼 누르면 아래의 list로 추가
// - 버튼을 누르면 value값을 가져와서 변수에 할당 후, list에 요소 추가

// 변수
const todoBox = document.querySelector("#todoBox");
const todoInput = todoBox.querySelector(".todo_input");
const inputBtn = todoInput.querySelector(".btn");

const todoPrint = todoBox.querySelector(".todo_print");
const printFormUl = todoPrint.querySelector("form > ul");

let [listNum, listVal] = [0, 0, 0];

// 함수
const addTodoHandler = () => {
  const inputVal = todoInput.querySelector("#todoInput");
  listVal = inputVal.value;

  if (!!listVal) {
    listNum += 1;
    console.log(listVal);
    const mkLi = document.createElement("li");
    mkLi.setAttribute("class", `list_${listNum}`);

    // 내부 element 생성
    const ADD_TODO = `<fieldset>
                    <legend class="blind">print box ${listNum}</legend>
                    <input type="checkbox" name="todo__Print__${listNum}" id="todoPrint-${listNum}" value="" />
                    <label for="todoPrint-${listNum}">${listVal}</label>
                  </fieldset>`;

    mkLi.innerHTML = ADD_TODO;
    printFormUl.append(mkLi);
  }
};

// 이벤트
inputBtn.addEventListener("click", addTodoHandler);
printFormUl.addEventListener("click", e => {
  console.log(e.target.parentNode);
  const printFormLi = printFormUl.querySelectorAll("li");
  const printFormArr = [...printFormLi];
  printFormLi.forEach((el, idx) => {
    console.log(el);
    if (el === e.target.parentNode) {
      el.remove();
    }
  });
});
