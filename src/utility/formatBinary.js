const createBinaryString = (nMask) => {
  // nMask must be between -2147483648 and 2147483647
  let nFlag = 0, nShifted = nMask, sMask = '';
  for (nFlag = 0; nFlag < 32;
       nFlag++, sMask += String(nShifted >>> 31), nShifted <<= 1);
  return sMask;
};

/**
 * Format a number into binary string at a set precision
 * @function formatBinary
 * @memberof Utility
 * @param {num} num The number to format
  * @param {pres} pres The bit precision
 * @returns {string} The formatted binary string
 */
const formatBinary = (num, pres) => {
  return createBinaryString(num).split("").reverse().join("").substring(0, pres);
};

export default formatBinary;
