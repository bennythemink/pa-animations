/**
 * Pixel Agency brand colour tokens.
 * Single source of truth — mirrors the --color-pixel-* values in global.css.
 * Any change to a colour value must be made in BOTH this file and global.css.
 *
 * Use the `pixel-*` key name wherever a component accepts a colour string,
 * and call resolvePixelColour() to convert it to a hex value for inline styles.
 */
export const PIXEL_COLOURS = {
  'pixel-rosy': '#f37992',
  'pixel-lte-rosy': '#F3C8DA',

  'pixel-teal': '#00a180',
  'pixel-drk-teal': '#006550',

  'pixel-cream': '#CFB28A',
  'pixel-light-cream': '#eae7e4',
  'pixel-off-cream': '#ebe7e4',

  'pixel-poppy': '#fd3f44',
  'pixel-drk-poppy': '#991c12',

  'pixel-celestial': '#4ba5d7',
  'pixel-drk-celestial': '#216d96',
  'pixel-lte-celestial': '#dfe9fd',

  'pixel-fire': '#FF8D11',
  'pixel-lte-fire': '#ffb554',

  'pixel-solar': '#FEC601',
  'pixel-lte-solar': '#FFEAA1',

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
  'pixel-celestial',
  'pixel-drk-celestial',
  'pixel-poppy',
  'pixel-rosy',
  'pixel-fire',
  'pixel-solar',
  'pixel-teal',
  'pixel-drk-teal',
  'pixel-brown',
  'pixel-cream'
]
