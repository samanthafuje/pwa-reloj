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

## Manifest de la PWA

El archivo `manifest.json` permite que la aplicación sea instalable y define su apariencia y comportamiento.

```json
{
  "name": "Reloj Digital PWA",
  "short_name": "Reloj",
  "description": "Aplicación de reloj digital que muestra la hora actual en tiempo real.",
  "start_url": "./",
  "scope": "./",
  "display": "standalone",
  "orientation": "portrait",
  "background_color": "#222222",
  "theme_color": "#000000",
  "lang": "es-MX",
  "icons": [
    {
      "src": "icons/icono-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "icons/icono-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

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



