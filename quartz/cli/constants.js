import path from "path"
import { readFileSync } from "fs"

/**
 * All constants relating to helpers or handlers
 */
export const ORIGIN_NAME = "origin"
export const UPSTREAM_NAME = "upstream"
export const QUARTZ_SOURCE_BRANCH = "v4"
export const cwd = process.cwd()
export const cacheDir = path.join(cwd, ".quartz-cache")
export const cacheFile = "./quartz/.quartz-cache/transpiled-build.mjs"
export const fp = "./quartz/build.ts"
// Use hardcoded Quartz version instead of project package.json version
export const version = "4.5.1"
export const contentCacheFolder = path.join(cacheDir, "content-cache")
