import { isNode, isWindow } from '@/env';

export const createElement = (str: string) => {
  if (isNode()) {
    console.warn('该方法不适合在node环境下使用');
    return null;
  }
  const elDiv = document.createElement('div');
  elDiv.innerHTML = str;
  return elDiv.firstElementChild;
};
