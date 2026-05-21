$ErrorActionPreference = 'Stop'

Set-Location (Join-Path $PSScriptRoot '..\web\default')
bun install
bun run build
