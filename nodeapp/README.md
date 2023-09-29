
# NodeApp

Website and PAI application

## Install

INstall dependencies:

```sh
$ npm install
```

Review database connection on /lib/connectMongoose.js (see "Start a MongoDB Server in MacOS or Linux")

Load initial data:

```sh
# this command deletes all the data in the database and create default data
$ npm run init-db
```

## Start

In production:

```sh
npm start
```
In development:

```sh
npm run dev##
````

# mis notas

```bash
# descargo mongodb-macos-arm64-7.0.1.tgz
# descomprimo y en creo carpeta data y dentro creo carpeta /db aquí guardaremos los ficeros 
THIRD-PARTY-NOTICES
README
MPL-2
macos_mongodb.plist
LICENSE-Community.txt
data / db
bin


# en terminal en la carpeta mongodb
./bin/mongod --dbpath ./data/db

# se instalarán las dependencias en la carpeta db

# si quieres parar el servidor Ctrl + c
```

ahora descargo https://www.mongodb.com/try/download/shell
o tmabien desde % brew install mongosh

```bash
# con mongodb arrancado
% brew install mongosh

# lo instala en /usr/local/Cellar/mongosh/2.0.1
#me voy a la terminal de VSC
% cd /usr/local/Cellar/mongosh/2.0.1
% ./bin/mongosh

        Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.1
        Using MongoDB:          7.0.1
        Using Mongosh:          2.0.1


# muestra las bases de datos
test> show dbs;
admin   40.00 KiB
config  12.00 KiB
local   72.00 KiB

# creo base de datos
test> use cursonode
switched to db cursonode

# creo tabla
cursonode> db.agentes.insert({name: "Smith", age:24})
DeprecationWarning: Collection.insert() is deprecated. Use insertOne, insertMany, or bulkWrite.

    {
    acknowledged: true,
    insertedIds: { '0': ObjectId("6512b43ff5596c4de4ecf73e") }
    }

# le hago caso a DeprecationWarning:
cursonode> db.agentes.insertOne({name: "Alex", age:47})
    {
    acknowledged: true,
    insertedId: ObjectId("6512b4dff5596c4de4ecf73f")
    }

# veo qué tengo en agentes
cursonode> db.agentes.find()
cursonode> db.agentes.find()
    [
    { _id: ObjectId("6512b43ff5596c4de4ecf73e"), name: 'Smith', age: 24 },
    { _id: ObjectId("6512b4dff5596c4de4ecf73f"), name: 'Alex', age: 47 },
    { _id: ObjectId("6512b623f5596c4de4ecf741"), name: 'John', age: 7 }
    ]


# borramos 1 por id
cursonode> db.agentes.deleteOne( {_id: ObjectId("6512b535f5596c4de4ecf740")}  )

    { acknowledged: true, deletedCount: 1 }


# recupero a JOhn
cursonode> db.agentes.insertOne({name: "John", age:7})

# cambio edad con fallo
cursonode> db.agentes.updateOne( {_id: ObjectId("6512b535f5596c4de4ecf740")}, {age:66}  )
MongoInvalidArgumentError: Update document requires atomic operators
# cambio edad
cursonode> db.agentes.updateOne( {_id: ObjectId("6512b623f5596c4de4ecf741")}, { $set: {age:66} }  )
    {
    acknowledged: true,
    insertedId: null,
    matchedCount: 1,
    modifiedCount: 1,
    upsertedCount: 0
    }
cursonode> db.agentes.find()
    [
    { _id: ObjectId("6512b43ff5596c4de4ecf73e"), name: 'Smith', age: 24 },
    { _id: ObjectId("6512b4dff5596c4de4ecf73f"), name: 'Alex', age: 47 },
    { _id: ObjectId("6512b623f5596c4de4ecf741"), name: 'John', age: 66 }
    ]



cursonode> db.agentes.insertOne({name: "Nuria", age:7, address: { city: "Madrid" }, phones: [662152145, 32652154]})
    {
    acknowledged: true,
    insertedId: ObjectId("6512c00ef5596c4de4ecf742")
    }
cursonode> db.agentes.find()
[
  { _id: ObjectId("6512b43ff5596c4de4ecf73e"), name: 'Smith', age: 24 },
  { _id: ObjectId("6512b4dff5596c4de4ecf73f"), name: 'Alex', age: 47 },
  { _id: ObjectId("6512b623f5596c4de4ecf741"), name: 'John', age: 66 },
  {
    _id: ObjectId("6512c00ef5596c4de4ecf742"),
    name: 'Nuria',
    age: 7,
    address: { city: 'Madrid' },
    phones: [ 662152145, 32652154 ]
  }
]

```

Cliente gráfico para monodb https://nosqlbooster.com/ 


### mongoose

herramienta que nos permite trabajar más comodamente con mongodb

Al crear un modelo, por ejemplo este 

```js
var mongoose = require('mongoose');
var agenteSchema = mongoose.Schema({ 
    name: String,
    age: Number
});
mongoose.model('Agente', agenteSchema);
```
tenemos diferentes tipos String, Number ¿qué tipos podemos utilizar? Aquí tienes un resumen de los que piedes usar https://mongoosejs.com/docs/schematypes.html

String  -  
Number  -  
Date  -  
Buffer  -  
Boolean  -  
Mixed  - Una determinada propiedad puede tener cualquier cosa  
ObjectId  -  
Array  -  
Decimal128  -  
Map  -  
Schema  -  
UUID  -  
BigInt  - 




### API Endpoints

#### GET /api/agentes/(_id)
```json
    "results": [
        {
            "_id": "6512b43ff5596c4de4ecf73e",
            "name": "Smith",
            "age": 222
        }, ...
```


#### Consumir Api´s de terceros









