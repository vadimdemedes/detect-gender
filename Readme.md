# detect-gender [![Circle CI](https://circleci.com/gh/vdemedes/detect-gender.svg?style=svg)](https://circleci.com/gh/vdemedes/detect-gender)

Detect gender from name using [genderize.io](https://genderize.io) API.


### Features

- Simple API
- Responses are cached, so one name won't be queried more than once


### Installation

```
$ npm install detect-gender --save
```


### Usage

```js
const detect = require('detect-gender');

// promises
detect('vadim').then(function (gender) {
  // gender = 'male'
});

// generators
let gender = yield detect('vadim'); // 'male'
```


### Tests

[![Circle CI](https://circleci.com/gh/vdemedes/detect-gender.svg?style=svg)](https://circleci.com/gh/vdemedes/detect-gender)

```
$ make test
```


### License

MIT © [Vadym Demedes](http://vadimdemedes.com)
