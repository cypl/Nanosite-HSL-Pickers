import Convert from '@alchemyalcove/rgb-to-hsl'

/**
 * Fonction pour convertir la valeur d'une couleur héxadécimale, en tableau RGB
 * @param {string} h correspond à la valeur hexadecimale de la couleur à convertir
 * @returns
 */
export function fromHexToRgb(h) {
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
export function fromHexToHsl(hex) {
  const colorRGB = fromHexToRgb(hex)
  const colorHSL = Convert(colorRGB)
  const H = Math.round(colorHSL[0])
  const S = Math.round(colorHSL[1])
  const L = Math.round(colorHSL[2])
  return [H, S, L]
}

// export function fromHslToRgb(h, s, l) {
//   s /= 100
//   l /= 100
//   const k = (n) => (n + h / 30) % 12
//   const a = s * Math.min(l, 1 - l)
//   const f = (n) =>
//     l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
//   return [
//     Math.round(255 * f(0)),
//     Math.round(255 * f(8)),
//     Math.round(255 * f(4)),
//   ]
// }

// const colorToHex = (color) => {
//   const hexadecimal = color.toString(16)
//   return hexadecimal.length == 1 ? '0' + hexadecimal : hexadecimal
// }
// export function fromRgbToHex(red, green, blue) {
//   return '#' + colorToHex(red) + colorToHex(green) + colorToHex(blue)
// }

export function fromHslToHex(h, s, l) {
  l /= 100
  const a = (s * Math.min(l, 1 - l)) / 100
  const f = (n) => {
    const k = (n + h / 30) % 12
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0') // convert to Hex and prefix "0" if needed
  }
  return `#${f(0)}${f(8)}${f(4)}`
}

export function calculateColorLightness(hex) {
  const rbgArray = fromHexToRgb(hex)
  const lightness = rbgArray.reduce((a, b) => a + b)
  return Math.round((lightness / 765) * 100) // lightness is a ratio from 0 to 100
}

// from http://www.w3.org/TR/WCAG20/#relativeluminancedef
export function relativeLuminanceW3C(R8bit, G8bit, B8bit) {
  var RsRGB = R8bit / 255
  var GsRGB = G8bit / 255
  var BsRGB = B8bit / 255

  var R =
    RsRGB <= 0.03928 ? RsRGB / 12.92 : Math.pow((RsRGB + 0.055) / 1.055, 2.4)
  var G =
    GsRGB <= 0.03928 ? GsRGB / 12.92 : Math.pow((GsRGB + 0.055) / 1.055, 2.4)
  var B =
    BsRGB <= 0.03928 ? BsRGB / 12.92 : Math.pow((BsRGB + 0.055) / 1.055, 2.4)

  // For the sRGB colorspace, the relative luminance of a color is defined as:
  var L = 0.2126 * R + 0.7152 * G + 0.0722 * B

  return L
}
