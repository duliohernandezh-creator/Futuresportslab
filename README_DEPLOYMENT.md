# 🚀 Despliegue Automático en Hostinger con GitHub Actions

## ✅ Configuración Completada

Tu proyecto ya está configurado para despliegue automático. Solo necesitas seguir estos pasos:

## 🔧 Pasos de Configuración

### 1. Obtener Credenciales FTP de Hostinger

En tu panel de Hostinger:

- Ve a **"FTP"** o **"File Manager"**
- Anota estos datos:
  - **Servidor FTP**: `ftp.tudominio.com` (o similar)
  - **Usuario FTP**: Tu usuario de Hostinger
  - **Contraseña FTP**: Tu contraseña de Hostinger

### 2. Configurar Secrets en GitHub

1. Ve a tu repositorio: `https://github.com/duliohernandezh-creator/Futuresportslab`
2. Haz clic en **"Settings"** (pestaña superior)
3. En el menú izquierdo, haz clic en **"Secrets and variables"** → **"Actions"**
4. Haz clic en **"New repository secret"**
5. Agrega estos 3 secrets:

   | Nombre               | Valor             |
   | -------------------- | ----------------- |
   | `HOSTINGER_FTP_HOST` | Tu servidor FTP   |
   | `HOSTINGER_FTP_USER` | Tu usuario FTP    |
   | `HOSTINGER_FTP_PASS` | Tu contraseña FTP |

### 3. Hacer Commit de los Cambios

```bash
git add .
git commit -m "Add GitHub Actions deployment"
git push origin main
```

### 4. Verificar el Despliegue

1. Ve a la pestaña **"Actions"** en tu repositorio GitHub
2. Verás que se ejecuta automáticamente el workflow **"Deploy to Hostinger"**
3. Espera a que termine (2-3 minutos)
4. ¡Tu sitio estará desplegado automáticamente!

## 🔄 Cómo Funciona

Cada vez que hagas `git push origin main`:

1. **GitHub Actions** detecta el cambio
2. **Instala Node.js** y dependencias
3. **Ejecuta** `npm run build` (genera archivos estáticos)
4. **Sube automáticamente** la carpeta `out/` a tu `public_html/` en Hostinger
5. **Tu sitio se actualiza** instantáneamente

## 📁 Archivos Importantes

- ✅ `.github/workflows/deploy.yml` - Configuración de despliegue automático
- ✅ `next.config.mjs` - Configurado para exportación estática
- ✅ `.htaccess` - Configuración para hosting compartido
- ✅ `package.json` - Scripts de build actualizados

## 🎯 Resultado Final

- ✅ **Despliegue automático** en cada push
- ✅ **Sin errores 403** (archivos estáticos)
- ✅ **Funciona en Hostinger** (hosting compartido)
- ✅ **Gratis** (GitHub Actions es gratuito)

## 🆘 Si Algo Sale Mal

1. **Revisa los logs** en la pestaña "Actions" de GitHub
2. **Verifica los secrets** están configurados correctamente
3. **Confirma las credenciales FTP** de Hostinger
4. **Asegúrate** de que la rama sea `main` (no `principal`)

¡Listo! Tu aplicación Next.js se desplegará automáticamente en Hostinger. 🎉
