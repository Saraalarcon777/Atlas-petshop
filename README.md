# Atlas PetShop

Proyecto de e-commerce hecho con React para el curso. Es una tienda de productos para perros y gatos.

## Instalación y ejecución

1. Clonar el repositorio
2. Entrar a la carpeta del proyecto
3. Correr `npm install` para instalar las dependencias
4. Correr `npm run dev` para levantar el proyecto
5. Abrir la url que aparece en la terminal 

## Variables de entorno

El proyecto usa Firebase para la base de datos. Las variables van en un archivo `.env` en la raíz del proyecto:

VITE_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID

Estas se sacan de la consola de Firebase, en configuración del proyecto. Ya están incluidas en el .env de este repositorio para facilitar la corrección.

## Flujo de la app

El usuario entra al catálogo y puede filtrar por categoría (perros o gatos). Al hacer clic en un producto entra al detalle, donde elige cantidad y lo agrega al carrito. Desde el carrito puede ir a finalizar la compra, completa sus datos en el checkout, y al confirmar se genera una orden que se guarda en Firestore, mostrando el id de esa orden en pantalla.