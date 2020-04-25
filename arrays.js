var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
  /*Can use: let newArray = array.concat(element).reverse()
    return newArray to pass this test but this is simpler. Both do not modify
    the original array*/
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  /*Told to modify the original array. unshift mutates the underlying array*/
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}
