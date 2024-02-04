
# Actividad Práctica 9: Implementación de Autenticación en una Aplicación React con Firebase
### Nombres: Alexander Guacan, Mateo Barriga
### NRC: 14956
### Fecha: 04/02/2024


## Instalacion: 
Clonamos el repositorio del siguinte link: https://github.com/M4t3B4rriga/PROYECTO_MUSICA
1. Instalacion de dependencias 
``` cmd 
npm install
```
2. Instalar tailwindcss
``` cmd 
npm install -D tailwindcss postcss autoprefixer
```
3. Instalar Firebase
```cmd
npm i firebase
```
En caso de que quiera crear su propia base de datos tendria que ir a la apartado de firebase.js que esta dentro de la carpeta src para poder modifivar el enrutamiento. 
Esta parte de aqui es la que debe modificar el momento que crea una base de datos en firebase
```js
const firebaseConfig = {
  apiKey: "AIzaSyDNjgAvEvEzgNkNlCNQrcpaxiRogekYnfI",
  authDomain: "react-login-app-49af0.firebaseapp.com",
  projectId: "react-login-app-49af0",
  storageBucket: "react-login-app-49af0.appspot.com",
  messagingSenderId: "795779259715",
  appId: "1:795779259715:web:bf9aa1367c0a43c7d663f6",
  measurementId: "G-GTJPL6KW1E"
};
```
## Pasos para crear una su propia base de datos 
1. Nos registramos en Firebase en el siguiente link: https://firebase.google.com/?hl=es
2. Creamos un nuevo proyecto: 

![GET-imagen1](/img/nuevabase.png)

3. Cuando creamos nos parecera en los pasos que demos el codigo de conexion para nuestra base de datos 
![GET-imagen1](/img/codigo.png)
4. Con eso le ingresamos en la el apartado de firebase.js que esta dentro de la parpeta src para poderlo modificar, cabe recalcar que solo se modifica esa parte del codigo nada mas.
5. Iniciamos el programa con el comando
```cmd
npm start
``` 
