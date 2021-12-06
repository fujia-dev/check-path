import { pathExist, pathExistSync } from '../src/index';

describe('check-path', () => {
  it('pathExist', async () => {
    expect(await pathExist('./__tests__/check-path.test.ts')).toBeTruthy();
    expect(await pathExist('./example.ts')).toBeFalsy();
  });

  it('pathExistSync', () => {
    expect(pathExistSync('./__tests__/check-path.test.ts')).toBeTruthy();
    expect(pathExistSync('./example.ts')).toBeFalsy();
  });
});
