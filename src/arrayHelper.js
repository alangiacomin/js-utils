/**
 * @module arrayHelper
 */

/**
 * Gets empty array if it's null
 * @param {array|null} arr - The array
 * @returns {array} - Input array or empty one
 */
const emptyArrayIfNull = (arr) => arr || [];

// eslint-disable-next-line import/prefer-default-export
export { emptyArrayIfNull };
