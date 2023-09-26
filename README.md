

# Fundamentos-Backend-Node.js-y-MongoDB

## node.js
&nbsp;
&nbsp;


**ADMINISTRADOR DE VERSIONES**

Recomiendo instalar **node.js** con administradores de versiones, por ejemplo con **nvm**: 

* En linux/mac - https://github.com/nvm-sh/nvm
* En windows - https://github.com/coreybutler/nvm-windows  

Tip adicional para usuarios de linux/mac (f en el chat para windows) 
* https://github.com/nvm-sh/nvm#deeper-shell-integration

```bash
nvm list  
nvm install \<version>  
nvm use \<version>  
nvm use system (en linux)  

 # nvm cambio de versión automático  
 echo "12.13.1" > .nvmrc  

 # posteriormente, tras entrar a la carpeta  
 nvm use  

 # tras salir de la carpeta para volver a la versión default  
 nvm use default  
```

---

**UTILIDAD MODEMON**

Cada vez que hacemos cambios en nuestra en nuestro script, que para que se apliquen esos cambios, desde la terminal estamos parando con control c y volviendo a arrancar para que coja la nueva aplicación (con esto pues hago hincapié en que cuando ejecutamos una aplicación mientras está ejecutando se está en memoria), nuestro código está en memoria y no vuelve a leerlo del disco por mucho que lo cambiemos, no va a cambiar. No va a cambiar la aplicación que está ejecutándose en ese momento.Tenemos que pararlo y volver a arrancar para hacer eso más cómodo, hay una utilidad que se llama Nodemont.

```bash
# para instalarlo de forma global
npm install nodemon -g
nodemon

# para ejecutarlo sin tener que instalarlo
npx nodemon <archivo que estás ejecutando>
```
también puedes hacerlo así

```BASH
node --watch <archivo que estás ejecutando>

node --watch index.js
```

esto hará que cada vez que guardas el trabajo realizado él solo reinicia el archivo con los cambios en el servidor abierto.

---

**GESTOR DE PAQUETES**


**Node Package Manager** es un gestor de paquetes que nos ayuda a gestionar las dependencias de nuestro proyecto. Generalmente se instala conjuntamente con Node.js de forma automática.

aquí tienes un montón de librerías que la comunidad ya ha creado, úsalas https://www.npmjs.com/ 

```bash
npm init
```

Entre otras cosas nos permite:
* Instalar librerías o programas de terceros 
* Eliminarlas
* Mantenerlas actualizadas

Se apoya en un fichero llamado package.json para guardar el estado de las librerías.

Crea este fichero. Documentación en https://docs.npmjs.com/files/package.json

```bash
# Instalar una librería (como por ejemplo chance)
npm install chance --save

---

{  
  "name": "myapp",  
  "version": "1.0.0",  
  "description": "Esta es la descripción",  
  "main": "index.js",  
  "scripts": {  
  "test": "echo \"Error: no test specified\" && exit 1"  
  },  
  "author": "Javier Miguel", 
  "license": "ISC" 
  "dependencies": {  
    "chance": "^0.8.0"  
  }  
}  
```



Instalación local, en la carpeta del proyecto

```bash
npm install <paquete> [--save]
```

Instalación global (en /usr/local/lib/node_modules) 

```bash
npm install -g <paquete>
```

Si el paquete tiene ejecutables hará un vínculo a ellos en /usr/local/ bin


---
&nbsp;
&nbsp;
## Express.js

Express es un framework web para Node.js http://expressjs.com/ , para hacer servidores para http. Podemos revisar toda la funcionalidad en:
http://expressjs.com/api.html


**Usando Express Generator**

Express Generator nos crea una estructura base para una aplicación.

```bash
$ [sudo] npm install express-generator -g
$ express -h  # nos dará la lista de opciones
$ express <nombreApp> [--ejs]
$ cd <nombreApp>
$ npm install
```
pero lo ideal es 

```bash
# así controlarás las versiones automaticamente
$ npx express-generator
$ express
```

Como arrancar nuestra aplicación:

```bash
$ npm start

# entorno desarrollo, puerto por defecto (3000)

```


Podemos establecer variables de entorno para variar la forma de arranque:

```bash
$ NODE_ENV=production npm start

# entorno producción
```

Podemos establecer variables de entorno para variar la forma de arranque:

```bash
$ DEBUG=nombreApp:* PORT=3001 NODE_ENV=production npm start

# con log debug activado
# puerto 3001
# entorno producción
```

Si queremos podríamos incluir esto en el comando start de npm, especificándolo en el package.json

```bash
npm install --save-dev nodemon cross-env
...
  "scripts": {
    "dev": "DEBUG=nombreApp:* PORT=3000 nodemon"
  },
...
```

ejemplo

```bash
 # Creo desde terminal archivo package.json con las dependencias en ejemplo-express/
 $ cd ejemplo-express/
 $ npm init -y               # creo package.json
 $ npm install express       # le añado una dependencia    "dependencies": {"express": "^4.18.2"}
 $ npx nodemon index.js 
```

creando una aplicación

```bash
$ cd ..
$ cd FULLSTACK_NODE_MONGODB
$ npx express-generator --ejs <nombre_aplicacion>
$ npx express-generator --ejs nodeapp
# ha creado la app en la carpeta nodeapp
# ha definido unas dependencias en package.json
$ cd nodeapp
$ npm install # instalo las dependencias que necesito
# ha instalado carpeta node_modules
```

si yo ahora pusiera directamente 

```bash
$ npm start

# se iría a leer packeage.json "scripts": {"start": "node ./bin/www"}
# y ejecutaría el path, arrancaría la app http://127.0.0.1:3000
```

Arrancamos desde mac

```bash
# DEBUG=<nombre_aplicacion>:* npm start
$ DEBUG=nodeapp:* npm start

# podemos arrancar desde terminal con 
$ npx nodemon ./bin/www

# podemos arrancar añadiendo en package.json :
  "scripts": {
    "start": "node ./bin/www",
    "dev": "nodemon ./bin/www"

$ npm i


# podemos también instalar nodemon
$ npm install nodemon # npm i nodemon (es lo mismo)

# en produccion no me hará falta esta dependencia, entonces es mejor instalarla en devDependencies

  "Dependencies": {
    "cookie-parser": "~1.4.4",
    "nodemon": "^3.0.1"
  }

# lo quito de dependencies
npm uninstall nodemon
# lo instalo en dependencias de desarrollador
npm i nodemon --save-dev

  "devDependencies": {
    "nodemon": "^3.0.1"
  }

# Arrancamos ahora con modemon
$ npm run dev

# esto hará que funcione en cualquier platadorma
npm install cross-env
# crea
  "devDependencies": {
    "cross-env": "^7.0.3",
    "nodemon": "^3.0.1"
  }

# le pongo cross-env en "dev": 
# "cross-env DEBUG=nodeapp:* nodemon ./bin/www"
# esto hará que funcione en cualquier sistema operativo, linus, microsoft , etc
  "scripts": {
    "start": "node ./bin/www",
    "dev": "cross-env DEBUG=nodeapp:* nodemon ./bin/www"
  },


# arrancamos http://127.0.0.1:3000 a través de ./bin/www
npm run dev   

```

Podemos establecer variables de entorno para variar la forma de arranque:

```bash
$ DEBUG=nombreApp:* PORT=3001 NODE_ENV=production npm start
# con log debug activado
# puerto 3001
# entorno producción
```

en ./bin/www podemos ver que usa

```bash
var app = require('../app');
```

para arrancar, pues vete a ver el archivo y verás los **middlewares**. Los middelware son toda aquella pieza o bloques de código que se ejecuta en el trancurso de una petición hasta que responde. Los dividmos por funcionalidades. 

Debe **responder** a la petición (cuando un middelware responde ya no se evalúa ninguno más porque ya ha respondido) o llamar a **next()**, pero no hace más cosas. Además usan callbacks por defecto. Y si llamas a next() seguirá evaluando el siguiente middelware... pero cuando intente responder por segunda vez : `Cannot set headers after they are sento to the client`. En el browser no verásnada, pero si en la terminal.


### Vistas

ejemplo

```JS
// /routes/index.js

/* GET home page. */
router.get('/', function(req, res, next) {
  
  // 2jemplo 1
  res.locals.texto = 'Hola';
  // ejemplo 2
  res.locals.nombre = '<script>alert("inyeccion codigo")</script>';
  // ejemplo 3
  const ahora = new Date();
  res.locals.esPar = (ahora.getSeconds() % 2) === 0;
  res.locals.segundoActual = ahora.getSeconds();
  // ejemplo 4
  res.locals.usuarios = [
    { nombre: "Smith", edad: 32 },
    { nombre: "John", edad: 3 }
  ]
  
  res.render('index');
  // le puse esto
  // app.locals.title = "NodeApp - mi aplicación"
});
```

abro la vista `views/index.ejs` y añado la linea que quiero ver `<p><%= texto %></p> `

```html

    <!-- Ejemplo 1-->
    <p><%= texto %></p> 
    <p><%= texto + '!' %></p> 
    
    <!-- Ejemplo 2 :
         el valor será escapado para evitar la inyección. Si queremos incluir html usaríamos <%- %>
    -->
    <p><%- nombre %></p> 
    
    <!-- Ejemplo 3-->
    <h2>Condicionales</h2>
      <% if (esPar) { %>
        <p>El segundo actual es par</p> 
      <% } else { %>
        <p>El segundo actual es impar</p> 
      <% } %>

    <p>Segundo actual : <%= segundoActual %></p>


    <!-- Ejemplo 4-->
    <% usuarios.forEach(usuario => { %>
      <p>El agente <%= usuario.nombre %>
         tiene <%= usuario.edad %> años.
      </p> 
    <% }) %>  


    <!-- Ejemplo 5
         He creado un archivo nuevo cabecera.ejs
    -->
    <% include cabecera.ejs %>
```

Has de intentar meter la menor funcionalidad en las vistas, las funcionalidades han de estar en otro lado, en el **modelo**, y si no se puede en el modelo en el **controlador** y por último si no podemos lo metemos en la **vista**. En las vistas usa html, css, cosas de las vistas pero no codigo que pueda fallar.

### Recibiendo parámetros


route/index.js

```JS
/**
 * creo un middelware en /route/index.js
 * al valor numero 66 de  /parametro_en_ruta/66
 * le podemos llamar por ejemplo numero:
 * '/parametro_en_ruta/:numero'
 * 
 *  Resultado en : http://127.0.0.1:3000/parametro_en_ruta/55
 */

// Get /parametro_en_ruta/66
router.get('/parametro_en_ruta/:numero', (req, res, next) => {
  // la varibale la sacamos de la petición req
  // .numero viene de :numero
  const numero = req.params.numero;

  // nos res responderá al browser esta frase.
  res.send("he recibido el número: " + numero);
})



/**
 * Creamos otro middelware con un parámetro opcional
 * Opcional quiere decir que puede venir o no un valor 
 * 
 * Resultado en : http://127.0.0.1:3000/parametro_opcional/66
 */

// Get /parametro_opcional/66
router.get('/parametro_en_ruta/:numero?', (req, res, next) => {
  // la varibale la sacamos de la petición req
  // .numero viene de :numero
  const numero = req.params.numero;

  // nos res responderá al browser esta frase.
  res.send("OPCIONAL : he recibido el número: " + numero);
})



/**
 * Creamos otro middelware con varios parámetros 
 * Resultado en : http://127.0.0.1:3000/producto/pantalones/talla/34/color/rojo
 */
// GET /producto/:nombre/talla/:talla/color/:color
router.get("/producto/:nombre/talla/:talla/color/:color", (req, res, next) => {
  console.log(req.params)
  // const nombre = req.params.nombre;
  // const talla = req.params.talla;
  // const color = req.params.color;

  // la linea de abajo sería exactamente lo mismo que las treslineas de arriba
  const {nombre, talla, color} = req.params;

  res.send(`Me pediste ${nombre} talla ${talla} color ${color}`)

})


/**
 * podemos añadir expresiones regulares para acotar
 * 
 * Resultado : http://127.0.0.1:3000/producto/pantalones/talla/XXL/color/rojo
 */
// GET /producto/:nombre/talla/:talla/color/:color
router.get("/producto/:nombre/talla/:talla([0-9]+)/color/:color", (req, res, next) => {
  console.log(req.params)
  // const nombre = req.params.nombre;
  // const talla = req.params.talla;
  // const color = req.params.color;

  // la linea de abajo sería exactamente lo mismo que las treslineas de arriba
  const {nombre, talla, color} = req.params;

  res.send(`Me pedista ${nombre} talla ${talla} color ${color}`)

})


/**
 * Vamos a conseguir una lista de usuarios
 * vamos a /routes/users.js
 * 
 * 
 */

// Get user listing
router.get('/', function(req, res, next) {
  const usuarios = [
    { nombre: 'alex', talla: '34', color: 'rojo' },
    { nombre: 'pantalon', talla: '34', color: 'rojo' }
  ]
  

  // mejor .json que .send
  res.json(usuarios);
})


/**
 * RECIBIENOD PARÁMETROS EN EL BODY
 * Los recibimos en req.body. Esta forma no la podemos usar en GET ya que no usa body
 * 
 * respuesta http://127.0.0.1:3000/users/anuncios
 */ 

/**
 * POSTMAN.COM nos permite hacer peticiones a servidores http como el nuestro y probar 
 * api´s app webs, etc
 */

// POST / users (body)
router.post('/', (req,res,next)=>{
  console.log(req.body);
  res.send('recibido');
})

/**
 * devuelve la cabecera
 * https://expressjs.com/en/4x/api.html#req.get
 */

```

### Validaciones


```bash
# https://github.com/ctavan/express-validator
npm install express-validator
```

una vez instalada vamos a validar :

```JS
/** 
 * /routers/users
 * añado estas lineas para validad este middelware
 */ 

// validaciones
const {query, validationResult } = require('express-validator');

// Get user listing
router.get('/', [    // defino la validaciones si es numerico
  query('talla').isNumeric.withMessage('debe tener valor numérico')
], function(req, res, next) {
  validationResult(req).throw();  // añadimos la linea de va
  const usuarios = [
    { nombre: 'alex', talla: '34', color: 'rojo' },
    { nombre: 'pantalon', talla: '34', color: 'rojo' }
  ]

  // query es un objeto del cual quier sacar la propiedad name
  const filtroName = req.query.name;

  if (filtroName) {
    res.json(usuarios.filter(usuarios => usuarios.nombre === filtroName))
  } else {
    res.json(usuarios);
  }
  // mejor .json que .send
});


/**
 *  voy a app.js
 * 
 * y compruebo si es un error de validación anadiendo estas lineas a error hadler
 */

// error handler
app.use(function(err, req, res, next) {
 //compruebo si esun error de validación
 if (err.array) {
   const errorInfo = err.errors[0]; // err.array( {onlyFirsrError: true} )[0]
   console.log(errorInfo) // si miras la terminal verás los errores y la info para rellenar la siguiente linea
   err.message = `Error en ${errorInfo.location}, parámetro ${errorInfo.path} ${errorInfo.msg}`
 }



  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

````

con esto de antes conseguimos que los errores se controlen en toda la valicacion.

###  Middlewares de terceros

Podemos instalarlos con npm y cargarlos como los anteriores.

```bash
$ npm install cookie-parser
```

```JS
var cookieParser = require('cookie-parser');
// load the cookie parsing middleware en la app.js
app.use(cookieParser());


// con esto nos aparecerá en el archivo package.json la dependencia:
  "dependencies": {
    "cookie-parser": "~1.4.4",

```

Hay una lista de los más usados en http://expressjs.com/resources/ middleware.html