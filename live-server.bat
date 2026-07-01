@echo off
title VivaPay - Live Server
cd /d "%~dp0"

echo.
echo  ==========================================
echo    VivaPay - Live Server (porta 5500)
echo  ==========================================
echo.

where npm >nul 2>nul
if errorlevel 1 (
  echo  [ERRO] Node.js nao encontrado. Instale em: https://nodejs.org
  pause
  exit /b 1
)

if not exist "node_modules" (
  echo  Instalando dependencias...
  call npm install
)

echo  1. Gerando build do site...
echo  2. Iniciando Live Server em http://localhost:5500
echo  3. Atualizando automaticamente ao salvar arquivos
echo.
echo  Pressione Ctrl+C para encerrar.
echo.

call npm run live

pause
