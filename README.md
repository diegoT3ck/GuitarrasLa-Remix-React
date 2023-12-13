# Guitarras Remix - React

Guitarras Remix es una aplicación web desarrollada con [Remix](https://remix.run/), React y otras tecnologías que funciona como una tienda de guitarras, con un apartado de posts y cursos. Los usuarios pueden explorar, agregar productos al carrito y realizar órdenes de compra. A continuación, se presenta la documentación para el proyecto.

## Características Principales

- **Tienda de Guitarras:** Los usuarios pueden explorar y comprar guitarras de diferentes modelos y marcas.

- **Apartado de Posts:** La aplicación incluye un blog de posts relacionados con el mundo de las guitarras, donde los usuarios pueden leer y comentar.

- **Cursos:** Ofrece un área de cursos donde los usuarios pueden inscribirse y aprender más sobre el arte de tocar la guitarra.

- **Carrito de Compras:** Permite a los usuarios agregar productos al carrito y realizar órdenes de compra.

## Tecnologías Utilizadas

- **Remix:** La aplicación está desarrollada con Remix, un framework moderno para la construcción de aplicaciones web.

- **React:** Remix utiliza React para crear interfaces de usuario interactivas y eficientes.

- **React Router Dom:** Se utiliza para gestionar la navegación y habilitar la creación de rutas dentro de la aplicación.

- **Context API:** El Context de React se aprovecha para manejar el estado global de la aplicación y compartir datos entre componentes.

- **Hooks:** Se utilizan hooks de React para gestionar el estado local y realizar operaciones como la actualización del carrito de compras.

## Estructura del Proyecto

La estructura del proyecto sigue las convenciones de organización de un proyecto Remix. A continuación, se presenta la estructura de carpetas:


## Instalación

1. **Clonar el Repositorio:**
```bash
git clone https://github.com/diegoT3ck/GuitarrasLa-Remix-React.git
```

2. **Instalar Dependencias:**
```sh
cd guitarras-remix npm install
```

    
3. **Configurar la API:**
    
    - Asegúrate de tener la API Rest en funcionamiento y actualiza la configuración en archivos como `api/posts`, `api/guitarras` y `api/curso` según tus endpoints.
    - Agregar el endpoint  en el archivo ``.env``

```
API_URL=http://127.0.0.1:1337/api
```



1. **Iniciar la Aplicación:**
```sh
npm run dev
```
    
5. **Acceder a la Aplicación:** Abre la aplicación en tu navegador en [http://localhost:3000](http://localhost:3000/).
    

## Contribuciones

¡Contribuciones son bienvenidas! Si encuentras errores o mejoras posibles, siéntete libre de abrir un problema o enviar un pull request.
