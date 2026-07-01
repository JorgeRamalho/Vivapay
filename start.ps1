# VivaPay - Iniciar servidor local
Set-Location $PSScriptRoot

Write-Host ""
Write-Host "  VivaPay - Iniciando servidor local..." -ForegroundColor Cyan
Write-Host ""

if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
  Write-Host "  ERRO: Node.js/npm nao encontrado. Instale em https://nodejs.org" -ForegroundColor Red
  Read-Host "Pressione Enter para sair"
  exit 1
}

if (-not (Test-Path "node_modules")) {
  Write-Host "  Instalando dependencias..." -ForegroundColor Yellow
  npm install
  if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
}

Write-Host "  Abrindo http://localhost:5173 no navegador..." -ForegroundColor Green
Write-Host "  Pressione Ctrl+C para encerrar." -ForegroundColor Gray
Write-Host ""

npm run start
