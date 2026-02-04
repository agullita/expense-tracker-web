# 🚀 Guía de Despliegue en Vercel

Esta guía te ayudará a desplegar tu aplicación Expense Tracker en Vercel paso a paso.

## Prerrequisitos

- ✅ Cuenta en [Vercel](https://vercel.com) (gratis)
- ✅ Cuenta en [GitHub](https://github.com) (gratis)
- ✅ API Key de [Google Gemini](https://makersuite.google.com/app/apikey) (gratis)

## Paso 1: Subir el Código a GitHub

### Opción A: Crear un nuevo repositorio

1. Ve a [GitHub](https://github.com) y crea un nuevo repositorio
2. En tu terminal, dentro de la carpeta del proyecto:

```bash
cd bot-tickets-web
git init
git add .
git commit -m "Initial commit: Expense Tracker Web"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git push -u origin main
```

### Opción B: Usar GitHub Desktop

1. Abre GitHub Desktop
2. File → Add Local Repository
3. Selecciona la carpeta `bot-tickets-web`
4. Publish repository

## Paso 2: Conectar con Vercel

1. Ve a [vercel.com](https://vercel.com) e inicia sesión
2. Click en **"Add New..."** → **"Project"**
3. **Import Git Repository**: Selecciona tu repositorio de GitHub
4. Click en **"Import"**

## Paso 3: Configurar el Proyecto

Vercel detectará automáticamente que es un proyecto Next.js. Configuración:

### Build & Development Settings
- **Framework Preset**: Next.js ✅ (auto-detectado)
- **Build Command**: `npm run build` (por defecto)
- **Output Directory**: `.next` (por defecto)
- **Install Command**: `npm install` (por defecto)

### Root Directory
- Deja en blanco o selecciona la carpeta del proyecto

## Paso 4: Configurar Variables de Entorno

**¡IMPORTANTE!** Antes de desplegar, agrega las variables de entorno:

1. En la sección **"Environment Variables"**
2. Agrega la siguiente variable:

| Name | Value |
|------|-------|
| `GEMINI_API_KEY` | Tu API key de Gemini |

3. Asegúrate de seleccionar todos los entornos:
   - ☑️ Production
   - ☑️ Preview
   - ☑️ Development

## Paso 5: Desplegar

1. Click en **"Deploy"**
2. Espera 1-2 minutos mientras Vercel construye tu aplicación
3. ¡Listo! Tu app estará disponible en una URL como: `https://tu-proyecto.vercel.app`

## Verificar el Despliegue

1. Click en **"Visit"** para abrir tu aplicación
2. Prueba subir una imagen de un ticket
3. Verifica que el análisis funcione correctamente

## Configuración de Dominio Personalizado (Opcional)

1. Ve a tu proyecto en Vercel Dashboard
2. Settings → Domains
3. Agrega tu dominio personalizado
4. Sigue las instrucciones para configurar DNS

## Actualizaciones Automáticas

Cada vez que hagas `git push` a GitHub:
- ✅ Vercel automáticamente desplegará la nueva versión
- ✅ Recibirás un preview URL para cada commit
- ✅ Los cambios en `main` se desplegarán a producción

## Comandos Útiles

### Ver logs en tiempo real
```bash
vercel logs
```

### Desplegar desde la terminal
```bash
npm i -g vercel
vercel login
vercel
```

### Desplegar a producción directamente
```bash
vercel --prod
```

## Solución de Problemas

### Error: "Module not found"
**Solución**: Verifica que todas las dependencias estén en `package.json`
```bash
npm install
git add package.json package-lock.json
git commit -m "Fix dependencies"
git push
```

### Error: "API key not configured"
**Solución**: 
1. Ve a Settings → Environment Variables en Vercel
2. Verifica que `GEMINI_API_KEY` esté configurada
3. Redeploy: Deployments → ⋯ → Redeploy

### Error de build
**Solución**: Revisa los logs de build en Vercel Dashboard
```bash
vercel logs --follow
```

## Límites del Plan Gratuito de Vercel

- ✅ 100 GB de ancho de banda/mes
- ✅ Builds ilimitados
- ✅ Deploy automático con Git
- ✅ HTTPS personalizado
- ✅ Serverless functions (hasta 10s de ejecución)

Para esta aplicación, el plan gratuito es más que suficiente para uso personal o pequeño equipo.

## Alternativas de Almacenamiento

El código actual usa archivos JSON locales, que **no persisten** en Vercel entre deploys.

### Para persistencia en producción, considera:

#### Opción 1: Vercel KV (Redis)
```bash
npm install @vercel/kv
```

#### Opción 2: Vercel Postgres
```bash
npm install @vercel/postgres
```

#### Opción 3: Supabase (PostgreSQL gratuito)
```bash
npm install @supabase/supabase-js
```

Ver `STORAGE_UPGRADE.md` para más detalles sobre migración.

## Monitoreo y Analytics

### Activar Vercel Analytics
1. Ve a tu proyecto en Vercel
2. Analytics → Enable
3. Gratis hasta 100,000 eventos/mes

### Logs de Serverless Functions
Los logs están disponibles en:
- Vercel Dashboard → Proyecto → Logs
- CLI: `vercel logs`

## Seguridad

### Proteger tu API Key
- ✅ Nunca commitees archivos `.env` o `.env.local`
- ✅ Usa variables de entorno de Vercel
- ✅ El `.gitignore` ya está configurado correctamente

### Rate Limiting (Opcional)
Para producción con tráfico alto, considera agregar rate limiting:
```bash
npm install @upstash/ratelimit @upstash/redis
```

## Soporte

- 📚 [Documentación de Vercel](https://vercel.com/docs)
- 💬 [Discord de Vercel](https://vercel.com/discord)
- 🐛 [GitHub Issues](https://github.com/vercel/next.js/issues)

---

**¡Felicidades! 🎉 Tu aplicación está desplegada y lista para usar.**
