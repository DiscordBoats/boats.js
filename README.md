[![NPM](https://nodei.co/npm/boats.js.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/boats.js/)

# Getting Started
Simply Run `npm install boats.js`

# Usage

**Posting bot servercount**

```js
const BOATS = require("boats.js");
const boats = new boats('Token');
boats.postStats('server count', 'bot id');
```

**Getting bot info**

```js
const Boats = require("boats.js");
const boats = new Boats('Token');
boats.getBot('bot id');
```

**Getting user info**

```js
const Boats = require("boats.js");
const boats = new Boats('Token');
boats.getUser('user id');
```
