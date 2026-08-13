$ErrorActionPreference = 'Stop'
$workspace = Split-Path -Parent $PSScriptRoot
$server = Start-Process -FilePath node -ArgumentList 'node_modules/vite/bin/vite.js','--host','127.0.0.1','--port','4173' -WorkingDirectory $workspace -WindowStyle Hidden -PassThru
try {
  $ready = $false
  for ($attempt = 0; $attempt -lt 30; $attempt++) {
    try {
      Invoke-WebRequest -Uri 'http://127.0.0.1:4173' -UseBasicParsing -TimeoutSec 2 | Out-Null
      $ready = $true
      break
    } catch {
      Start-Sleep -Milliseconds 500
    }
  }
  if (-not $ready) { throw 'Vite server did not start.' }
  & "$workspace\node_modules\.bin\playwright.cmd" test @args
  if ($LASTEXITCODE -ne 0) { throw "Playwright exited with code $LASTEXITCODE." }
} finally {
  Stop-Process -Id $server.Id -Force -ErrorAction SilentlyContinue
}
