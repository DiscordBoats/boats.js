[![NPM](https://nodei.co/npm/boats.js.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/boats.js/)

# Getting Started
Simply run `npm install boats.js@latest`

## Usage

**Example of posting bot servercount**

```javascript
const BOATS = require("boats.js");
const Boats = new BOATS("API TOKEN");

Boats.postStats(SERVER_COUNT, BOT_ID).then(() => {
    console.log('Successfully updated server count.');
}).catch((err) => {
    console.error(err);
});
```

**Example of getting bot info**

```javascript
const BOATS = require("boats.js");
const Boats = new BOATS("API TOKEN");

Boats.getBot('BOT_ID').then(bot => {
    console.log(bot);
}).catch((err) => {
    console.error(err);
});
```

**Example of getting user info**

```javascript
const BOATS = require("boats.js");
const Boats = new BOATS("API TOKEN");

Boats.getUser('USER_ID').then(user => {
    console.log(user);
}).catch((err) => {
    console.error(err);
});
```
