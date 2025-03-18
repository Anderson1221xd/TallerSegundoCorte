📋 Requisitos Previos
Antes de comenzar, asegúrate de tener instalados:

Node.js 
Ionic CLI
npm install -g @ionic/cli
Angular CLI (opcional, pero útil)
npm install -g @angular/cli


--CUENTA EN FIREBASE--
Configuración de Firebase
Crea un proyecto en Firebase:
Ve a Firebase Console
Crea un nuevo proyecto y configura Firestore Database

Dentro del proyecto, ve a "Configuración del proyecto" → "Tus aplicaciones"
Agrega una nueva app y selecciona Web
Copia la configuración de Firebase y agrégala en src/environments/environment.ts:

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyAVr9FMVlE0oIfK56NwxXPmCStDY8k3xY8',
    authDomain: 'taller2-d7994.firebaseapp.com',
    projectId: 'taller2-d7994',
    storageBucket: 'taller2-d7994.appspot.com',

    messagingSenderId: '1092365493956',
    appId: '1:1092365493956:web:f6f5e7363cc432e068cb91',
    measurementId: 'G-1VHV7CCVJZ',
  },
};

Instala Firebase y AngularFire:

npm install firebase @angular/fire
🚀 Ejecutar la Aplicación
1️⃣ Instalar Dependencias
npm install
2️⃣ Ejecutar en modo desarrollo
ionic serve
Luego, abre en tu navegador http://localhost:8100


📂 Estructura del Proyecto

/src
│-- /app
│   |-- /core
│   │-- /home          # Páginas principales
│   │-- /models       # Servicios (ej. Firebase)
│   │-- /shared   
│   │-- |-- components    # Componentes reutilizables
│   │-- /tasks
│   └── app.module.ts
│-- /environments
│   ├── environment.ts  # Configuración de Firebase (desarrollo)
│   ├── environment.prod.ts # Configuración para producción
│-- index.html
│-- main.ts
│-- styles.css

 Autor
✍️ Desarrollado por Anderson Castilla Audivey

