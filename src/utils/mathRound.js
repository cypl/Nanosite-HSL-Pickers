/**
 * Get the rounded value of a number with decimals
 * @param {number} value = the value you want to transform
 * @param {number} precision = the number of decimals you want after the comma
 * @returns {number}
 */
export function getRoundedValue(value, precision) {
  var multiplier = Math.pow(10, precision || 0)
  return Math.round(value * multiplier) / multiplier
}
