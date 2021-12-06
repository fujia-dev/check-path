/*
 * @Author: fujia
 * @Date: 2021-12-06 14:59:01
 * @LastEditTime: 2021-12-06 15:07:23
 * @LastEditors: fujia(as default)
 * @Description: Check if a path exists
 * @FilePath: /stage/utils/check-path/src/index.ts
 */
import { accessSync } from 'fs';
import { access } from 'fs/promises';

export async function pathExist(path: string) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

export function pathExistSync(path: string) {
  try {
    accessSync(path);
    return true;
  } catch {
    return false;
  }
}
