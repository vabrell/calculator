/**
 * Addition
 * @param {Number} num1
 * @param {Number} num2
 * 
 * @return num1 + num2
 */
function add( num1, num2 ) {
  return Number(num1) + Number(num2)
}

/**
 * Subtraction
 * @param {Number} num1
 * @param {Number} num2
 * 
 * @return num1 - num2
 */
function sub( num1, num2 ) {
  return Number(num1) - Number(num2)
}

module.exports = {
  add,
  sub
}