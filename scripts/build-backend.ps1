$ErrorActionPreference = 'Stop'

$out = Join-Path $PSScriptRoot '..\dist'
New-Item -ItemType Directory -Force -Path $out | Out-Null
go build -o (Join-Path $out 'new-api.exe') .
