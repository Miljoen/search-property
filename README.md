# Search Property [![npm version](https://badgen.net/npm/v/search-property?label=npm%20package&color=green&cache=600)][npm]

Simple package that finds any property on an object.

`searchProperty()` does a nested search, so you don't have to implement any custom code for deep searches.

## Technology

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## Quick links

- Consult [CHANGELOG.md][changelog] for the project history.
- View [package repository][project] on GitHub.

## Installation

```
npm install search-property
```

## Examples

```typescript
import { searchProperty, searchPropertyAll, searchProperties, searchPropertiesAll } from 'search-property'

const myObject = {
    id: 1,
    name: 'someName',
    nestedObject: {
        id: 2,
        colour: 'red',
        anotherNest: {
            id: 3,
            name: 'anotherName',
            speed: '50 km/h'
        }
    }
}

searchProperty('id', myObject)      // 1
searchProperty('speed', myObject)   // '50 km/h'

searchPropertyAll('id', myObject)   // [1, 2, 3]
searchPropertyAll('name', myObject) // ['someName', 'anotherName']

searchProperties(['id', 'speed'], myObject)    // [1, '50 km/h']

searchPropertiesAll(['id', 'speed'], myObject) // [[ 1, 2, 3], ['50 km/h']]
```

## Contributors

View the full list of [contributors].

[npm]: https://www.npmjs.com/package/search-property

[changelog]: https://github.com/Miljoen/search-property/blob/master/CHANGELOG.md

[project]: https://github.com/Miljoen/search-property

[contributors]: https://github.com/Miljoen/search-property/graphs/contributors
