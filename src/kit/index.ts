import { Md5 } from 'ts-md5';
/**
 *执行一个方法
 * @param func
 * @param args
 */
export const executeFunc = (func: Function, ...args: any[]) => {
  try {
    func && func(...args);
  } catch (e) {}
};

/**
 *等待时间，默认是200毫秒
 * @param delay
 */
export const waitTime = (delay = 200) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, delay);
  });
};
/**
 * 获取一个随机key
 * @param code
 */
export const generateKey = (code?: string) => new Date().getTime() + code;

/**
 *求字符串的hash值
 * @param str
 */
export const hashString = (str: string) => {
  return Md5.hashStr(str);
};
