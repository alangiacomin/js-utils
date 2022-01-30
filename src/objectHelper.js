/**
 * @module objectHelper
 */

/**
 * Gets empty object if it's null
 * @param {object|null} obj - The object
 * @returns {object} - Input object or empty one
 */
const emptyObjectIfNull = (obj) => obj || {};

// eslint-disable-next-line import/prefer-default-export
export { emptyObjectIfNull };
