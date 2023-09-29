
"use strict";

// podrías usar fetch API también

const axios = require("axios");


main().catch(err => console.log("Hubo un error", err));


async function main() {
    // const response = await axios.get('https://swapi.dev/api/people?page=2')  <-- te permite paginacion , etc
    // const response = await axios.get('https://swapi.dev/api/people')

    const response = await axios.get('http://127.0.0.1:3000/api/agentes')

    console.log(response.data)
}

/**DE TODA LA RESPUESTA DE LA TERMINA SÓLO ME INTERESA:
 * },
    data: {
    count: 82,
    next: 'https://swapi.dev/api/people/?page=2',
    previous: null,
    results: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ]
  }
}
 */
