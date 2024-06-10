const objectToString = Object.prototype.toString;
const toTypeString = (value: any) => objectToString.call(value);
/**
 * 是否是数组
 */
export const isArray = Array.isArray;
/**
 * 是否是map
 * @param val
 */
export const isMap = (val: any) => toTypeString(val) === '[object Map]';
/**
 * 是否是set
 * @param val
 */
export const isSet = (val: any) => toTypeString(val) === '[object Set]';
/**
 * 是否是date
 * @param val
 */
export const isDate = (val: any) => toTypeString(val) === '[object Date]';
/**
 * 是否是正则对象
 * @param val
 */
export const isRegExp = (val: any) => toTypeString(val) === '[object RegExp]';
/**
 * 是否是方法
 * @param val
 */
export const isFunction = (val: any) => typeof val === 'function';
/**
 * 是否是字符串
 * @param val
 */
export const isString = (val: any) => typeof val === 'string';
/**
 * 是否是 symbol
 * @param val
 */
export const isSymbol = (val: any) => typeof val === 'symbol';
/**
 * 是否是对象
 * @param val
 */
export const isObject = (val: any) => val !== null && typeof val === 'object';
/**
 * 是否是promise
 * @param val
 */
export const isPromise = (val: any) => {
  return (isObject(val) || isFunction(val)) && isFunction(val.then) && isFunction(val.catch);
};
