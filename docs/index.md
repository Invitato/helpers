# @invitato/helpers Documentation

`@invitato/helpers` is a common helpers which built to improve developer experience in Invitato Ecosystem.

## How to use

Basically, you can import directly like this:

```js
import { isDarkmode } from '@invitato/helpers';
```

But, that import not support the three-shaking mode. We recommend to import individually like this:

```js
import isDarkmode from '@invitato/helpers/dist/isDarkmode';
```

## Available Helpers
- isDarkmode
- getDeviceOS
- ...
