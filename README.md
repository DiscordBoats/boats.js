[![NPM](https://nodei.co/npm/boats.js.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/boats.js/)

# Getting Started
Simply Run `npm install boats.js`

## Usage

**Example of posting a bots servercount to the API**

```javascript
const BOATS = require("boats.js");
const boats = new boats('Your Token');
boats.postStats('your server count', 'your bot id');
```

**Example of getting bot info**

```javascript
const BOATS = require("boats.js");
const boats = new boats('Your Token');
boats.getBot('bot-id');
```
