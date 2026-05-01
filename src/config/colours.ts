/**
 * Pixel Agency brand colour tokens.
 * Single source of truth — mirrors the --color-pixel-* values in global.css.
 * Any change to a colour value must be made in BOTH this file and global.css.
 *
 * Use the `pixel-*` key name wherever a component accepts a colour string,
 * and call resolvePixelColour() to convert it to a hex value for inline styles.
 */
export const PIXEL_COLOURS = {
  'pixel-cream': '#cab38f',
  'pixel-light-cream': '#eae7e4',
  'pixel-off-cream': '#ebe7e4',

  'pixel-blue': '#63a3d2',
  'pixel-dark-blue': '#386b92',
  'pixel-light-blue': '#dfe9fd',

  'pixel-red': '#e9504c',
  'pixel-dark-red': '#8c291c',

  'pixel-rosy': '#f37992',
  'pixel-lte-rosy': '#F3C8DA',

  'pixel-orange': '#f09339',
  'pixel-light-orange': '#f4b865',

  'pixel-yellow': '#f5c844',
  'pixel-light-yellow': '#fcebad',

  'pixel-green': '#479f82',
  'pixel-dark-green': '#2a6351',

  'pixel-off-white': '#f5f3f2',

  'pixel-brown': '#c9b58d',

  // UI utility — not a brand colour
  'pixel-placeholder-grey': '#d9d9d9'
} as const

export type PixelColourKey = keyof typeof PIXEL_COLOURS

/**
 * Resolve a pixel-* colour name to its hex value.
 * Passes raw hex strings through unchanged.
 * Returns the input unchanged if unrecognised (allows graceful fallback).
 */
export function resolvePixelColour(value: string): string {
  return (PIXEL_COLOURS as Record<string, string>)[value] ?? value
}

/** Convert a hex colour string to an {r, g, b} object. */
export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const h = hex.replace('#', '')
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16)
  }
}

/** Colour keys used by the flow-field accent system. Subset of brand palette. */
export const ACCENT_COLOUR_KEYS: PixelColourKey[] = [
  'pixel-blue',
  'pixel-dark-blue',
  'pixel-red',
  'pixel-rosy',
  'pixel-orange',
  'pixel-yellow',
  'pixel-green',
  'pixel-dark-green',
  'pixel-brown',
  'pixel-cream'
]
