# Reloj Digital PWA

Aplicación web progresiva (PWA) que muestra la hora actual del sistema en tiempo real, actualizándose automáticamente cada segundo y permitiendo su instalación en dispositivos móviles como si fuera una aplicación nativa.

---

## Características

* Muestra la hora actual del sistema
* Actualización automática cada segundo
* Instalación en dispositivos móviles
* Funciona sin conexión (modo offline)
* Interfaz sencilla y clara
* Implementación de Service Worker

---

## Estructura del proyecto

```bash
reloj-pwa/
│── index.html
│── style.css
│── app.js
│── manifest.json
│── service-worker.js
│── img/
    ├── vector.png
    
```

---

## Instalación y uso

1. Clona este repositorio:

```bash
git clone https://github.com/tu-usuario/reloj-pwa.git
```

2. Accede a la carpeta del proyecto:

```bash
cd reloj-pwa
```

3. Abre el archivo `index.html` en tu navegador
   o ejecuta un servidor local.

---

## Despliegue en GitHub Pages

1. Sube tu proyecto a un repositorio en GitHub
2. Ve a **Settings → Pages**
3. Selecciona la rama `main` y la carpeta raíz (`/root`)
4. Guarda los cambios

Tu aplicación estará disponible en:

```
https://tu-usuario.github.io/reloj-pwa/
```

---

## Instalación como aplicación

En navegadores compatibles:

1. Abre la aplicación
2. Selecciona **"Agregar a pantalla de inicio"**
3. O usa la opción **"Instalar aplicación"**

---

El archivo manifest.json incluye la configuración necesaria para permitir la instalación de la PWA en dispositivos móviles. A continuación, se muestran los elementos solicitados:

Nombre de la aplicación
Íconos
Color de fondo
Color del tema
Orientación preferida

Ejemplo de implementación
{ 
"name": "Reloj Digital PWA", 
"short_name": "Reloj", 
"background_color": "#222222", 
"theme_color": "#000000", 
"orientation": "portrait", 
"icons": [
{ 
"src": "icons/icono-192.png", 
"sizes": "192x192", 
"type": "image/png" }, 
{
"src": "icons/icono-512.png", 
"sizes": "512x512", 
"type": "image/png" 
}
] 
}
Descripción de los elementos
name: Nombre completo de la aplicación que se muestra al instalarla.

short_name: Nombre corto utilizado debajo del ícono.

background_color: Color de fondo al abrir la aplicación.

theme_color: Color de la barra superior del sistema.

orientation: Define la orientación preferida (en este caso, vertical).


icons: Imágenes utilizadas como ícono de la aplicación en el dispositivo.
---


## Service Worker

El Service Worker permite que la aplicación funcione sin conexión, almacenando en caché los archivos necesarios.

---

## Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript
* Progressive Web Apps (PWA)

---

## Requisitos

* Navegador moderno (Chrome, Edge, etc.)
* Conexión HTTPS o localhost para instalación
* Soporte para Service Workers

---



