import { isNode, isWindow } from '@/env';

export const createElement = (str: string) => {
  if (isNode()) {
    return null;
  }
  const elDiv = document.createElement('div');
  elDiv.innerHTML = str;
  return elDiv.firstElementChild;
};
