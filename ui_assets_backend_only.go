//go:build !embedded_ui

package main

import "embed"

var buildFS embed.FS
var indexPage []byte
var classicBuildFS embed.FS
var classicIndexPage []byte
