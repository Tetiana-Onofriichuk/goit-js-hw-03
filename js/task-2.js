"use strict";
function makeArray(firstArray, secondArray, maxLength) {
  let firstElement = [];
  let secondElement = [];

  for (let i = 0; i < firstArray.length; i++) {
    firstElement.push(firstArray[i]);
  }
  for (let i = 0; i < secondArray.length; i++) {
    secondElement.push(secondArray[i]);
  }
  let totalElements = firstElement.concat(secondElement);

  if (totalElements.length < maxLength) {
    return totalElements;
  } else {
    return totalElements.slice(0, maxLength);
  }
}

// 2-ий варіант
function makeArray(firstArray, secondArray, maxLength) {
  let totalArray = firstArray.concat(secondArray);

  return totalArray.length > maxLength
    ? totalArray.slice(0, maxLength)
    : totalArray;
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
