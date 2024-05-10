export const executeFunc = (func: Function, ...args: any[]) => {
  try {
    func && func(...args);
  } catch (e) {}
};

export const waitTime = (delay = 200) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, delay);
  });
};
