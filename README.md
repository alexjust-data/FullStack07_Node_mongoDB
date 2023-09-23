# Fundamentos-Backend-Node.js-y-MongoDB

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




