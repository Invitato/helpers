# @invitato/helpers

![npm-badge](https://img.shields.io/npm/v/@invitato/helpers)

Is a common helpers for Invitato website purpose.

## Installation and Usage

Install via npm:

```
npm i @invitato/helpers
```

or Yarn:

```
yarn add @invitato/helpers
```

then import specific helper what you need

```js
import isDarkmode from '@invitato/helpers/dist/isDarkmode';

console.log('is darkmode active? ', isDarkmode());
```

## Available Helpers

| Helpers       | Result                               | Description                                                                 |
| ------------- | ------------------------------------ | --------------------------------------------------------------------------- |
| isDarkmode()  | return `boolean`                     | function to get darkmode status activated or not by using window.matchMedia |
| getDeviceOS() | return `android`, `ios` or `unknown` | function to get to know is device UA android, ios or unknow                 |

## FAQ

Can we use this helpers outside Invitato project?

- Sure. you can use this helper if this helpers can fullfil your requirement.

## Author

Initiated by [@idindrakusuma](https://github.com/idindrakusuma) and maintained by Invitato team
