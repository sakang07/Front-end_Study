"use strict";

// d_05_promise.js
var fnOne = function fnOne(data, fn) {
  var rel3 = data * data;
  return rel3;
};

var fnTwo = function fnTwo(data, fn) {
  var rel2 = data / 2;
  return fn(rel2);
};

var fnThree = function fnThree(data, fn) {
  var rel1 = data * 5;
  return fn(rel1, fnOne);
};

var valueResult = fnThree(4, fnTwo);
console.log(valueResult); // GamepadButton.addEventListner('click', function(){})