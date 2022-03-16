# Esqueleto de proyecto React con TypeScript y Vite buenas prácticas 📓

Jerarquía del proyecto y buenas prácticas

## Instalación ⚙️

Con este comando se instalan todas las dependencias del proyecto (package.json). La bandera "--legacy-peer-deps" evita posibles conflictos de versiones

```bash
npm i --legacy-peer-deps
```

Si se requieren nuevas dependencias, se deberán de instalar (IMPORTANTE : **Comprobar versiones y compatibilidades**)

```bash
npm i "DEPENDENCIA1" "DEPENDENCIA2" ... --save
```

Para iniciar el proyecto de React TS basta con ejecutar los comandos contenido en el package.json: - Modo desarrollador:

```bash
    npm run dev
```

## Jerarquía de directorios 🗂️

1. **Directorio "public"**
   En este directorio se definen los assets (todos los elementos estáticos, imágenes, vectores...), trabajando con Vite, el único archivo estático que esta fuera de este directorio es **index.html** que está alojado a la misma altura que public o sur.

2. **Directorio "src"**
   Aloja toda la lógica de nuestra aplicación frontend en React.
   Inicialmente contiene un árbol de directorios definido para todos nuestros proyectos (para seguir siempre la misma metodología de trabajo). Se describen los directorios, tratando de seguir la guía de buenas Prácticas de React:

   1 - **auth**

   - Se crearán todos los ficheros relacionados con la autenticación en la app.

   2- **components**

   - Carpeta donde irán todos los componentes, se crearan en PascalCase.

   3- **context**

   - Zona donde crearemos los distintos contextos de nuestra app, (según sea necesario)

   4- **helpers**

   - Códigos reutilizables y no relacionados directamente con las vistas u otros componentes.

   5- **interfaces**

   - Al utilizar **_TypeScript_** trataremos de centralizar los interfaces en este directorio.

   6- **i18n**

   - Pre-configuracion para el multi-idioma de nuestras apps.

   7- **hooks**

   - Los hooks son funciones directamente relacionadas con las vistas y los componentes, pero son elementos reutilizables, siguen la lógica de React. Estos hooks se crearán en camelCase.

   8- **pages**

   - Las vistas principales de la app, ejemplo **_LoginPage.tsx_**. Todas las vistas se crearán en PascalCase y con el apellido Page, para diferenciar de un vistazo de un componente.

   9- **reducers / store**

   - Dependiendo de la funcionalidad de la app, utilizaremos Redux o el API propio de react con sus reducers (ambos puedes convivir) En estas carpetas se manejará el estado global de la aplicación.

   10- **routers**

   - Seguiremos el siguiente patrón, para verificar los distintos accesos a las partes de la aplicación, según los roles de los usuarios. Tenemos un interceptor de rutas Públicas y Privadas, un Enrutador general **_AppRouter.tsx_**, otro personalizado **_DashboardRouter.tsx_** que es quien comprueba los roles y redirige.

   11- **styles**

   - Los ficheros de estilos scss irán alojadas en este directorio, trataremos de seguir un orden parecido a la estructura de componentes que seguimos en el proyecto.

   12- **types**

   - Contiene los distintos tipos de acciones relacionadas con los reducers.
