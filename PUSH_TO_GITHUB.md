# 🚀 Instrucciones para Subir a GitHub

## ✅ Estado actual:
- ✅ Repositorio Git local creado
- ✅ Commit inicial realizado (39 archivos, 9,074 líneas)
- ✅ Rama: main
- ✅ Todo listo para subir

---

## 📝 PASO 1: Crear repositorio en GitHub

### 1.1 Abre tu navegador y ve a:
```
https://github.com/new
```

### 1.2 Completa el formulario:
- **Repository name**: `expense-tracker-web`
- **Description**: `💰 Gestor inteligente de gastos con IA - Analiza tickets automáticamente con Gemini AI`
- **Visibilidad**: elige **Public** o **Private** (tu decisión)
- ⚠️ **IMPORTANTE**: NO marques estas opciones:
  - ❌ Add a README file
  - ❌ Add .gitignore
  - ❌ Choose a license
  
  (Ya los tenemos en el proyecto)

### 1.3 Click en **"Create repository"**

---

## 📝 PASO 2: Conectar y subir el código

Después de crear el repo, GitHub te mostrará instrucciones. Usa estas:

### 2.1 Copia la URL de tu repositorio
Verás algo como:
```
https://github.com/TU-USUARIO/expense-tracker-web.git
```

### 2.2 Ejecuta estos comandos en la terminal:

```bash
cd GeminiCli/bot-tickets-web

# Conectar con tu repositorio de GitHub
git remote add origin https://github.com/TU-USUARIO/expense-tracker-web.git

# Subir el código
git push -u origin main
```

⚠️ **Reemplaza `TU-USUARIO`** con tu nombre de usuario de GitHub

---

## 📝 PASO 3: Autenticación

Si es tu primera vez, GitHub te pedirá autenticación:

### Opción A: GitHub CLI (recomendada)
```bash
gh auth login
```

### Opción B: Personal Access Token
1. Ve a: https://github.com/settings/tokens
2. Generate new token (classic)
3. Selecciona: `repo` (full control)
4. Copia el token generado
5. Cuando Git pida contraseña, usa el token

### Opción C: SSH (alternativa)
Si prefieres SSH, cambia la URL:
```bash
git remote set-url origin git@github.com:TU-USUARIO/expense-tracker-web.git
```

---

## ✅ PASO 4: Verificar

Después de hacer `git push`:

1. Refresca la página de tu repositorio en GitHub
2. Deberías ver todos los archivos
3. El README.md se mostrará automáticamente

---

## 🎯 Comandos Completos (Copia y Pega)

Reemplaza `TU-USUARIO` con tu usuario real:

```bash
cd GeminiCli/bot-tickets-web
git remote add origin https://github.com/TU-USUARIO/expense-tracker-web.git
git push -u origin main
```

---

## 📋 Ejemplo Real

Si tu usuario es `johndoe`:

```bash
cd GeminiCli/bot-tickets-web
git remote add origin https://github.com/johndoe/expense-tracker-web.git
git push -u origin main
```

---

## 🆘 Solución de Problemas

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/TU-USUARIO/expense-tracker-web.git
```

### Error: "Permission denied"
Necesitas configurar autenticación (ver Paso 3)

### Error: "Updates were rejected"
```bash
git pull origin main --rebase
git push -u origin main
```

---

## 🎉 ¡Listo!

Cuando veas esto en tu terminal:
```
Enumerating objects: 44, done.
Counting objects: 100% (44/44), done.
...
To https://github.com/TU-USUARIO/expense-tracker-web.git
 * [new branch]      main -> main
```

✅ **Tu código está en GitHub!**

---

## 📝 Siguiente Paso: Desplegar en Vercel

Una vez en GitHub, lee `DEPLOYMENT.md` para desplegar en Vercel.

```bash
# Ver guía de despliegue
cat DEPLOYMENT.md
```

---

## 🔗 URLs Útiles

- Crear repo: https://github.com/new
- Tu perfil: https://github.com/TU-USUARIO
- Settings tokens: https://github.com/settings/tokens
- GitHub CLI: https://cli.github.com/

---

**¿Necesitas ayuda?** Abre un issue o consulta la documentación de GitHub.
