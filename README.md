# 🌟 Future Sports Lab - Guía Completa

## 📖 ¿Qué es este proyecto?

**Future Sports Lab** es una página web moderna que presenta "Supersport: una nueva forma de competencia". Es una aplicación web construida con tecnología Next.js que se despliega automáticamente en Hostinger.

**🌐 Sitio web:** `https://futuresportslab.tech`

## 🎯 ¿Para quién es esta guía?

Esta guía está diseñada para **cualquier persona** que quiera hacer cambios al sitio web, incluso si no tiene conocimientos técnicos de programación.

---

## 🚀 Cómo Hacer Cambios al Sitio Web

### 📝 **Opción 1: Editar directamente en GitHub (Más fácil)**

#### Paso 1: Acceder al proyecto

1. Ve a: `https://github.com/duliohernandezh-creator/Futuresportslab`
2. Inicia sesión con tu cuenta de GitHub

#### Paso 2: Editar archivos

1. Haz clic en el archivo que quieres cambiar (ej: `app/page.tsx`)
2. Haz clic en el ícono de **lápiz** (✏️) en la esquina superior derecha
3. Realiza tus cambios en el editor
4. Haz clic en **"Commit changes"** al final de la página
5. Escribe un mensaje describiendo qué cambiaste (ej: "Actualicé el texto del título")
6. Haz clic en **"Commit changes"**

#### Paso 3: ¡Listo!

- Los cambios se subirán automáticamente
- El sitio web se actualizará en 2-3 minutos
- Puedes ver tu sitio en: `https://futuresportslab.tech`

---

### 💻 **Opción 2: Usar tu computadora (Para cambios más complejos)**

#### Requisitos previos:

- Una computadora con Windows, Mac o Linux
- Conexión a internet

#### Paso 1: Instalar herramientas necesarias

1. **Instalar Node.js:**

   - Ve a: `https://nodejs.org`
   - Descarga la versión LTS (recomendada)
   - Instala siguiendo las instrucciones

2. **Instalar Git:**
   - Ve a: `https://git-scm.com`
   - Descarga e instala Git
   - Reinicia tu computadora

#### Paso 2: Descargar el proyecto

1. Abre la terminal/comando:

   - **Windows**: Busca "Command Prompt" o "PowerShell"
   - **Mac**: Busca "Terminal"
   - **Linux**: Abre la terminal

2. Navega a donde quieres guardar el proyecto:

   ```bash
   cd Desktop
   ```

3. Descarga el proyecto:

   ```bash
   git clone https://github.com/duliohernandezh-creator/Futuresportslab.git
   ```

4. Entra al proyecto:
   ```bash
   cd Futuresportslab
   ```

#### Paso 3: Instalar dependencias

```bash
npm install
```

#### Paso 4: Ver el sitio localmente

```bash
npm run dev
```

- Abre tu navegador en: `http://localhost:3000`
- Verás tu sitio web funcionando localmente

#### Paso 5: Hacer cambios

1. Abre el proyecto en cualquier editor de texto (VS Code recomendado)
2. Edita los archivos que necesites
3. Guarda los cambios
4. El sitio se actualizará automáticamente en `http://localhost:3000`

#### Paso 6: Subir cambios

```bash
git add .
git commit -m "Descripción de tus cambios"
git push origin main
```

---

## 📁 Estructura del Proyecto

### 🎨 **Archivos principales para editar:**

#### `app/page.tsx` - Página principal

- Contiene todo el contenido de la página de inicio
- Aquí puedes cambiar textos, imágenes, colores

#### `app/layout.tsx` - Diseño general

- Configuración del sitio (título, fuentes, etc.)
- Cambios globales que afectan toda la página

#### `components/` - Componentes reutilizables

- `hero-section.tsx` - Sección principal con imagen grande
- `mission-section.tsx` - Sección de misión
- `traction-section.tsx` - Sección de tracción/estadísticas
- `architecture-section.tsx` - Sección de arquitectura
- `invitation-section.tsx` - Sección de invitación

#### `public/` - Imágenes y archivos estáticos

- Aquí puedes subir nuevas imágenes
- Las imágenes deben tener nombres descriptivos

#### `app/globals.css` - Estilos globales

- Colores, fuentes, estilos generales
- Cambios de diseño que afectan toda la página

---

## 🎨 Cómo Cambiar Contenido Específico

### 📝 **Cambiar textos:**

1. Busca el archivo correspondiente (ej: `app/page.tsx`)
2. Busca el texto que quieres cambiar
3. Reemplázalo con tu nuevo texto
4. Guarda y sube los cambios

### 🖼️ **Cambiar imágenes:**

1. Ve a la carpeta `public/`
2. Sube tu nueva imagen
3. En el código, cambia la referencia a la imagen:

   ```jsx
   // Cambiar esto:
   <img src="/imagen-vieja.jpg" />

   // Por esto:
   <img src="/tu-nueva-imagen.jpg" />
   ```

### 🎨 **Cambiar colores:**

1. Abre `app/globals.css`
2. Busca las variables de color:
   ```css
   :root {
     --primary-color: #tu-color-aqui;
   }
   ```
3. Cambia el valor del color
4. Guarda y sube los cambios

### 📱 **Cambiar secciones:**

1. Cada sección está en su propio archivo en `components/`
2. Abre el archivo de la sección que quieres cambiar
3. Modifica el contenido
4. Guarda y sube los cambios

---

## ⚠️ ARCHIVOS QUE NO DEBES MODIFICAR

### 🚫 **Archivos críticos del sistema (NO TOCAR):**

#### `next.config.mjs` - Configuración de Next.js

- **¿Por qué no tocarlo?** Contiene configuraciones críticas para el despliegue
- **¿Qué pasa si lo modificas?** El sitio puede dejar de funcionar
- **Contiene:** `output: 'export'`, `trailingSlash: true`, `distDir: 'out'`

#### `.htaccess` - Configuración del servidor

- **¿Por qué no tocarlo?** Maneja el enrutamiento y optimización del sitio
- **¿Qué pasa si lo modificas?** Errores 404/403 en el sitio
- **Contiene:** Reglas de reescritura y compresión

#### `.github/workflows/deploy.yml` - Despliegue automático

- **¿Por qué no tocarlo?** Configura el despliegue automático
- **¿Qué pasa si lo modificas?** El sitio puede dejar de actualizarse
- **Contiene:** Configuración de GitHub Actions

#### `package.json` - Dependencias del proyecto

- **¿Por qué no tocarlo?** Define las librerías necesarias
- **¿Qué pasa si lo modificas?** Errores de instalación
- **Contiene:** Lista de dependencias y scripts

#### `tsconfig.json` - Configuración de TypeScript

- **¿Por qué no tocarlo?** Configuración del compilador
- **¿Qué pasa si lo modificas?** Errores de compilación
- **Contiene:** Configuración de TypeScript

### ✅ **Archivos SÍ puedes modificar:**

- `app/page.tsx` - Contenido principal
- `app/layout.tsx` - Diseño general
- `components/*.tsx` - Componentes individuales
- `app/globals.css` - Estilos
- `public/*` - Imágenes y archivos estáticos

---

## 🔧 Configuración Técnica (Solo para desarrolladores)

### 📦 **Scripts disponibles:**

- `npm run dev` - Ejecutar en modo desarrollo
- `npm run build` - Construir para producción
- `npm run start` - Ejecutar versión de producción

### 🚀 **Despliegue automático:**

- Los cambios se despliegan automáticamente en Hostinger
- Cada vez que haces push a GitHub, el sitio se actualiza
- No necesitas hacer nada manual para el despliegue

### 🔑 **Configuración de GitHub Actions:**

- El proyecto está configurado para desplegarse automáticamente
- Los secrets están configurados para Hostinger
- El proceso toma 2-3 minutos

---

## 🆘 Solución de Problemas

### ❌ **"No puedo ver mis cambios"**

- Espera 2-3 minutos después de hacer push
- Verifica que hiciste commit correctamente
- Revisa la pestaña "Actions" en GitHub para ver si hay errores

### ❌ **"Error al instalar dependencias"**

- Asegúrate de tener Node.js instalado
- Ejecuta: `npm install --legacy-peer-deps`

### ❌ **"No puedo acceder al sitio"**

- Verifica que el dominio esté funcionando: `https://futuresportslab.tech`
- Revisa si hay errores en GitHub Actions

### ❌ **"No sé qué archivo editar"**

- Usa la función de búsqueda en GitHub (Ctrl+F)
- Busca el texto que quieres cambiar
- Edita el archivo donde aparece

### ❌ **"El sitio dejó de funcionar"**

- Verifica que no modificaste archivos críticos
- Revisa los logs en GitHub Actions
- Contacta al desarrollador si es necesario

---

## 📞 Contacto y Soporte

### 🆘 **Si necesitas ayuda:**

1. Revisa esta guía primero
2. Busca en los issues de GitHub
3. Contacta al desarrollador principal

### 📚 **Recursos útiles:**

- [Documentación de Next.js](https://nextjs.org/docs)
- [Guía de GitHub](https://docs.github.com)
- [Tutorial de HTML/CSS básico](https://www.w3schools.com)

---

## 🎉 ¡Felicidades!

Ahora sabes cómo hacer cambios a tu sitio web de forma segura. Recuerda:

- ✅ Los cambios se despliegan automáticamente
- ✅ Siempre puedes revertir cambios
- ✅ Puedes experimentar sin miedo
- ✅ El sitio está respaldado en GitHub
- ⚠️ **NO modifiques archivos críticos del sistema**

**¡Empieza a personalizar tu sitio web!** 🚀
