# skeleton-ts-express for fast build Backend

## Backend NodeJs con Express: ⚙️

- El servidor esta implementado con NodeJs, utilizando el framework **express**, se ha utilizado la estrategia de Modelo, Repositorio y Controlador.

- Tenemos un fichero de arranque de Express, **index.ts** y un fichero de configuracion de aplicaciones **app.ts**, para iniciar a desarrolar la primera vez hemos de crear el **build** del proyecto inicial en TypeScript con:

```bash
npm run build

```

- Una vez tenemos el primer **build** podremos arrancar el servidor express en modo desarrollo mediante el siguiente comando:

```bash
npm run dev

```

- Express es un framework modularizable y dividimos nuestras funcionalidades en Rutas ↔️ (Middlewares) ↔️ Controladores ↔️ Repositorios.

- Una carpeta donde alojaremos los modelos de base de datos. (**_Models_**)

- En database realizaremos la configuracion de nuestra base de datos (**_Ej. Postgres._**)

- La carpeta **_utils_** alojara todas las funciones de apoyo.

- Las variables de entonrno se aljaran en **.env** a la altura del arbol de nuestra app **_src_**

- Utilizamos la última version estable de **NodeJs (16.14.0 LTS)**

- Se utiliza un **ORM** para las consultas a base de datos, al utilizar Typescript, el **ORM** elegido ha sido **TypeOrm**, el cual genera los modelos de interaccion para el intercambio de datos a partir de las tablas previamente generadas en la base de datos.

- Link repositorio oficial:
  [https://github.com/Kononnable/typeorm-model-generator](https://github.com/Kononnable/typeorm-model-generator)

- Es un proyecto funcional con un endpoint de pruebas. _http://localhost:3000/api_ el cual devuelve un Json.

```sh
  Comando utilizado con las opciones correspondientes:

  npx typeorm-model-generator -h "ip_host" -d navantia -u navantia -x navantia -e postgres -o . -s alistamiento -p "port"

  -h, --host             IP address/Hostname for database server
  -d, --database         Database name(or path)
  -u, --user             Username for database server
  -x, --pass             Password for database server
  -e, --engine           Database engine
  -o, --output           Where to place generated models (. -> ./entities)
  -s, --schema           Schema name to create model from. Only for mssql and postgres.
  -p, --port             Port number for database server
```

<br>
