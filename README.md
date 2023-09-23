

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
$ DEBUG=<nombre_aplicacion>:* npm start
$ DEBUG=nodeapp:* npm start

# añado en packeage.json "dev": "cross-env DEBUG=nodeapp:* nodemon ./bin/www"

$ npm install nodemon
$ npm i nodemon # es lo mismo

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


npm install cross-env
# crea
  "devDependencies": {
    "cross-env": "^7.0.3",
    "nodemon": "^3.0.1"
  }

# le pongo cross-env en "dev": "cross-env DEBUG=nodeapp:* nodemon ./bin/www"
# esto hará que funcione en cualquier sistema operativo, linus, microsoft , etc
  "scripts": {
    "start": "node ./bin/www",
    "dev": "cross-env DEBUG=nodeapp:* nodemon ./bin/www"
  },

```






