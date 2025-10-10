# Hostinger Deployment Guide for Next.js Static Export

## Pasos para desplegar en Hostinger:

### 1. Preparar el proyecto localmente:

```bash
# Instalar dependencias
npm install

# Generar build estático
npm run build
```

### 2. Subir archivos a Hostinger:

- Sube todo el contenido de la carpeta `out/` (no la carpeta `out` misma) al directorio `public_html` de tu hosting
- También sube el archivo `.htaccess` al directorio `public_html`

### 3. Estructura de archivos en Hostinger:

```
public_html/
├── .htaccess
├── index.html
├── _next/
│   ├── static/
│   └── ...
├── favicon.ico
└── otros archivos estáticos...
```

### 4. Verificar configuración:

- Asegúrate de que el archivo `.htaccess` esté en el directorio raíz
- Verifica que todos los archivos de la carpeta `out/` estén subidos correctamente

### 5. Comandos útiles:

```bash
# Para desarrollo local
npm run dev

# Para generar build de producción
npm run build

# Para verificar el build localmente
npx serve out
```

## Notas importantes:

- Esta configuración genera una versión estática de tu aplicación Next.js
- No funcionarán las funciones de servidor (API routes) con esta configuración
- Las imágenes están configuradas como `unoptimized: true` para compatibilidad con hosting estático
- El archivo `.htaccess` maneja el enrutamiento del lado del cliente para React Router
