<div align="center">
  <img alt="hammer logo" width="200" src="./assets/Paths.svg"/>
</div>

<div align="center">
  <h1>@fujia/check-path</h1>
</div>

<div align="center">

Check if a path exists.

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

console.log(await pathExist('example.js')); // Returns true if exist, otherwise return false

console.log(pathExistSync('example.js')); // Returns true if exist, otherwise return false

```

## API

### pathExists(path)

Returns a Promise<boolean>.

### pathExistsSync(path)

Returns a boolean.



