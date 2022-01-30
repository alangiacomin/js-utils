/**
 * @module stringHelper
 */

/**
 * Detects if string is empty
 * @param value The string
 * @returns {boolean} True if null, undefined or empty string
 */
const isEmptyString = (value = '') => value === null || value === undefined || value === '';

/**
 * Trim left chars in string
 * @param value The string
 * @param chars Chars to trim
 * @returns {string} The result string
 */
const trimStart = (value, chars = ' ') => {
  if (typeof value !== 'string' || isEmptyString(value)) {
    return '';
  }

  const charsToRemove = Array.isArray(chars) ? chars : [chars];
  let newValue = value;

  let restart = false;
  do {
    restart = false;
    for (let index = 0; !restart && index < charsToRemove.length; index++) {
      if (!isEmptyString(charsToRemove[index]) && newValue.startsWith(charsToRemove[index])) {
        newValue = newValue.substring(charsToRemove[index].length);
        restart = true;
      }
    }
  } while (restart);

  return newValue;
};

/**
 * Converts uppercase first letter of string
 * @param value The string
 * @returns {string} The result string
 */
const upperFirst = (value) => {
  if (isEmptyString(value) || typeof value !== 'string') {
    return '';
  }
  if (value.length === 1) {
    return value.toUpperCase();
  }
  return value.substring(0, 1).toUpperCase() + value.substring(1).toLowerCase();
};

export {
  isEmptyString,
  trimStart,
  upperFirst,
};
