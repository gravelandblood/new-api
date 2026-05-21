/**
 * Application-wide constants
 */

// System Configuration Defaults
export const DEFAULT_SYSTEM_NAME = 'VibeOpus'
export const DEFAULT_LOGO = '/vibeopus-logo-icon.png'
export const DEFAULT_LOGO_FULL = '/vibeopus-logo-full.png'

const LEGACY_LOGO_URLS = new Set([
  '/vibeopus-logo-icon-only.png',
  '/favicon.ico',
])

export function normalizeLogoUrl(url: string | undefined | null): string {
  const raw = (url || '').trim()
  if (!raw) return DEFAULT_LOGO
  if (LEGACY_LOGO_URLS.has(raw)) return DEFAULT_LOGO
  return raw
}

// LocalStorage Keys
export const STORAGE_KEYS = {
  SYSTEM_NAME: 'system_name',
  LOGO: 'logo',
  FOOTER_HTML: 'footer_html',
} as const
