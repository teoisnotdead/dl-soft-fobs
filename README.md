# Modulo

Desafío - Soft Jobs

## Descripción

Se crea un proyecto de Node.js con Express, el cual permite gestionar usuarios y autenticación mediante JWT, soportando registro, inicio de sesión y obtención de datos del usuario autenticado.

## Instalación

Para levantar el proyecto, se debe ejecutar los sgtes comandos:

```
npm install
npm run dev
```

## Endpoints

### **`POST /usuarios`**
**Descripción:** Registro de nuevos usuarios.  
```json
{
    "email": "docente@desafiolatam.com",
    "password": "123456",
    "rol": "Full Stack Developer",
    "lenguage": "JavaScript"
}
```
### **`POST /login`**
**Descripción:** Autenticación de usuarios.   
```json
{
  "email": "docente@desafiolatam.com",
  "password": "123456"
}
```
### **`GET /usuarios`**
**Descripción:** Obtención de datos del usuario autenticado.  
```json
{
    "id": 2,
    "email": "docente@desafiolatam.com",
    "rol": "Full Stack Developer",
    "lenguage": "JavaScript"
}
```