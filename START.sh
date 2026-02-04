#!/bin/bash

echo "===================================="
echo " Expense Tracker - Inicio"
echo "===================================="
echo ""

# Verificar si existen node_modules
if [ ! -d "node_modules" ]; then
    echo "[1/3] Instalando dependencias..."
    npm install
    echo ""
fi

# Verificar si existe .env.local
if [ ! -f ".env.local" ]; then
    echo "[ERROR] No se encontró el archivo .env.local"
    echo ""
    echo "Por favor crea un archivo .env.local con:"
    echo "GEMINI_API_KEY=tu_api_key_aqui"
    echo ""
    exit 1
fi

echo "[2/3] Iniciando servidor de desarrollo..."
echo ""
echo "La aplicación estará disponible en:"
echo "http://localhost:3000"
echo ""
echo "Presiona Ctrl+C para detener el servidor"
echo ""

npm run dev
