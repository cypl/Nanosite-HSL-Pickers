import Convert from '@alchemyalcove/rgb-to-hsl'

/**
 * Fonction pour convertir la valeur d'une couleur héxadécimale, en tableau RGB
 * @param {string} h correspond à la valeur hexadecimale de la couleur à convertir
 * @returns
 */
export function hexToRgb(h) {
  return [
    ('0x' + h[1] + h[2]) | 0,
    ('0x' + h[3] + h[4]) | 0,
    ('0x' + h[5] + h[6]) | 0,
  ]
}

/**
 * Fonction pour convertir la valeur d'une couleur héxadécimale, en tableau HSL
 * @param {string} hex correspond à la valeur hexadecimale de la couleur à convertir
 * @returns
 */
export function fromHexToHSL(hex) {
  const colorRGB = hexToRgb(hex)
  const colorHSL = Convert(colorRGB)
  const H = Math.round(colorHSL[0])
  const S = Math.round(colorHSL[1])
  const L = Math.round(colorHSL[2])
  return [H, S, L]
}
