



```bash

cd ejemplo-request 

# creo json dependencias
npm init -y

# instalo libreria
npm install axios
```

en index

```js
"use strict";

const axios = require("axios");


main().catch(err => console.log("Hubo un error", err));


async function main() {
    const response = await axios.get('https://swapi.dev/api/people')
}
```

```bash
npx nodemon
```