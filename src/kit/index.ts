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
/**
 * 判断是否是个假值
 */
export const isFalsity = (value: any) => {
  return value === undefined || value === null || value === '';
};
/**
 * 获取进度信息
 */
export const calcProcess = (cur: any, total: any) => {
  return +((cur / total) * 100).toFixed(0) || 0;
};
/**
 * JSON序列化，支持函数和 undefined
 * @param data
 * @constructor
 */
export const JSONStringify = <T>(data: T) => {
  return JSON.stringify(
    data,
    (key, val) => {
      // 处理函数丢失问题
      if (typeof val === 'function') {
        return `${val}`;
      }
      // 处理 undefined 丢失问题
      if (typeof val === 'undefined') {
        return null;
      }
      return val;
    },
    2
  );
};

export const evalFn = (fn: string) => {
  let Fun = Function; // 一个变量指向Function，防止前端编译工具报错
  return new Fun(`return ${fn}`)();
};

/**
 * JSON反序列化，支持函数和 undefined
 * @param fn
 */
export const JSONParse = (data: string) => {
  return JSON.parse(data, (k, v) => {
    // 还原函数值
    if (typeof v === 'string' && v.indexOf && (v.includes('function') || v.includes('=>'))) {
      return evalFn(`(function(){return ${v}})()`);
    } else if (typeof v === 'string' && v.indexOf && v.includes('return ')) {
      const baseLeftIndex = v.indexOf('(');
      if (baseLeftIndex > -1) {
        const newFn = `function ${v.substring(baseLeftIndex)}`;
        return evalFn(`(function(){return ${newFn}})()`);
      }
    }
    return v;
  });
};
export class URLHelper {
  private url: URL;
  constructor(url_: string) {
    this.url = new URL(url_);
  }

  getQuery(key: string) {
    return this.url.searchParams.get(key);
  }

  setQuery(key: string, value: string) {
    this.url.searchParams.set(key, value);
  }

  // 删除查询
  deleteQuery(key: string) {
    this.url.searchParams.delete(key);
  }

  getURLString() {
    return this.url.toString();
  }

  getPath() {
    return this.url.pathname;
  }

  setPath(path: string) {
    this.url.pathname = path;
  }

  getHost() {
    return this.url.host;
  }

  getHostname() {
    return this.url.hostname;
  }

  getProtocol() {
    return this.url.protocol;
  }

  getPort() {
    return this.url.port;
  }

  getOrigin() {
    return this.url.origin;
  }

  getHash() {
    return this.url.hash;
  }

  setHash(hash: string) {
    this.url.hash = hash;
  }
}
