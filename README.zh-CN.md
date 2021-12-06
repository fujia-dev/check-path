<div align="center">
  <img alt="hammer logo" width="200" src="./assets/Paths.svg"/>
</div>

<div align="center">
  <h1>@fujia/check-path</h1>
</div>

<div align="center">

检查一个路径是否存在。

</div>

<div align="center">

English | [简体中文](./README.zh-CN.md)

</div>


## Installation

```bash
npm i @fujia/check-path

# or use yarn
yarn add @fujia/check-path
```

## Usage

```javascript
import { pathExist, pathExistSync } from '@fujia/check-path'

console.log(await pathExist('example.js')); // 如果存在，返回Promise<true>, 否则返回Promise<false>

console.log(pathExistSync('example.js')); // 如果存在，返回true, 否则返回false

```

## API

### pathExists(path)

返回一个 Promise<boolean> 类型的值.

### pathExistsSync(path)

返回一个 boolean 类型值.



