import { useState, useEffect, createContext } from 'react'
import PropTypes from 'prop-types'
import { colorStarter } from './colorStarter'
import { fromHexToHSL } from './colorTransform'

export const ColorContext = createContext()

export const ColorProvider = ({ children }) => {
  // $primaire1
  const [colorPrimaire1, setColorPrimaire1] = useState(colorStarter.primary1)
  const [colorPrimaire1H, setColorPrimaire1H] = useState(
    fromHexToHSL(colorPrimaire1)[0]
  )
  const [colorPrimaire1S, setColorPrimaire1S] = useState(
    fromHexToHSL(colorPrimaire1)[1]
  )
  const [colorPrimaire1L, setColorPrimaire1L] = useState(
    fromHexToHSL(colorPrimaire1)[2]
  )
  // useEffect(() => {
  //   const newColor = '#000000'
  //   setColorPrimaire1(newColor)
  // }, [colorPrimaire1H, colorPrimaire1S, colorPrimaire1L])

  // $primaire
  const [colorPrimaire, setColorPrimaire] = useState(colorStarter.primary)
  const [colorPrimaireH, setColorPrimaireH] = useState(
    fromHexToHSL(colorPrimaire)[0]
  )
  const [colorPrimaireS, setColorPrimaireS] = useState(
    fromHexToHSL(colorPrimaire)[1]
  )
  const [colorPrimaireL, setColorPrimaireL] = useState(
    fromHexToHSL(colorPrimaire)[2]
  )

  // $primaire2
  const [colorPrimaire2, setColorPrimaire2] = useState(colorStarter.primary2)
  const [colorPrimaire2H, setColorPrimaire2H] = useState(
    fromHexToHSL(colorPrimaire2)[0]
  )
  const [colorPrimaire2S, setColorPrimaire2S] = useState(
    fromHexToHSL(colorPrimaire2)[1]
  )
  const [colorPrimaire2L, setColorPrimaire2L] = useState(
    fromHexToHSL(colorPrimaire2)[2]
  )

  // $secondaire1
  const [colorSecondaire1, setColorSecondaire1] = useState(
    colorStarter.secondary1
  )
  const [colorSecondaire1H, setColorSecondaire1H] = useState(
    fromHexToHSL(colorSecondaire1)[0]
  )
  const [colorSecondaire1S, setColorSecondaire1S] = useState(
    fromHexToHSL(colorSecondaire1)[1]
  )
  const [colorSecondaire1L, setColorSecondaire1L] = useState(
    fromHexToHSL(colorSecondaire1)[2]
  )

  // $secondaire
  const [colorSecondaire, setColorSecondaire] = useState(colorStarter.secondary)
  const [colorSecondaireH, setColorSecondaireH] = useState(
    fromHexToHSL(colorSecondaire)[0]
  )
  const [colorSecondaireS, setColorSecondaireS] = useState(
    fromHexToHSL(colorSecondaire)[1]
  )
  const [colorSecondaireL, setColorSecondaireL] = useState(
    fromHexToHSL(colorSecondaire)[2]
  )

  // $secondaire2
  const [colorSecondaire2, setColorSecondaire2] = useState(
    colorStarter.secondary2
  )
  const [colorSecondaire2H, setColorSecondaire2H] = useState(
    fromHexToHSL(colorSecondaire2)[0]
  )
  const [colorSecondaire2S, setColorSecondaire2S] = useState(
    fromHexToHSL(colorSecondaire2)[1]
  )
  const [colorSecondaire2L, setColorSecondaire2L] = useState(
    fromHexToHSL(colorSecondaire2)[2]
  )

  // $clair
  const [colorClair, setColorClair] = useState(colorStarter.clair)
  const [colorClairH, setColorClairH] = useState(fromHexToHSL(colorClair)[0])
  const [colorClairS, setColorClairS] = useState(fromHexToHSL(colorClair)[1])
  const [colorClairL, setColorClairL] = useState(fromHexToHSL(colorClair)[2])

  // $clair2
  const [colorClair2, setcColorClair2] = useState(colorStarter.clair2)
  const [colorClair2H, setColorClair2H] = useState(fromHexToHSL(colorClair2)[0])
  const [colorClair2S, setColorClair2S] = useState(fromHexToHSL(colorClair2)[1])
  const [colorClair2L, setColorClair2L] = useState(fromHexToHSL(colorClair2)[2])

  return (
    <ColorContext.Provider
      value={{
        colorPrimaire1,
        colorPrimaire1H,
        setColorPrimaire1H,
        colorPrimaire1S,
        setColorPrimaire1S,
        colorPrimaire1L,
        setColorPrimaire1L,
        colorPrimaire,
        colorPrimaireH,
        setColorPrimaireH,
        colorPrimaireS,
        setColorPrimaireS,
        colorPrimaireL,
        setColorPrimaireL,
        colorPrimaire2,
        colorPrimaire2H,
        setColorPrimaire2H,
        colorPrimaire2S,
        setColorPrimaire2S,
        colorPrimaire2L,
        setColorPrimaire2L,
        colorSecondaire1,
        colorSecondaire1H,
        setColorSecondaire1H,
        colorSecondaire1S,
        setColorSecondaire1S,
        colorSecondaire1L,
        setColorSecondaire1L,
        colorSecondaire,
        colorSecondaireH,
        setColorSecondaireH,
        colorSecondaireS,
        setColorSecondaireS,
        colorSecondaireL,
        setColorSecondaireL,
        colorSecondaire2,
        colorSecondaire2H,
        setColorSecondaire2H,
        colorSecondaire2S,
        setColorSecondaire2S,
        colorSecondaire2L,
        setColorSecondaire2L,
        colorClair,
        colorClairH,
        setColorClairH,
        colorClairS,
        setColorClairS,
        colorClairL,
        setColorClairL,
        colorClair2,
        colorClair2H,
        setColorClair2H,
        colorClair2S,
        setColorClair2S,
        colorClair2L,
        setColorClair2L,
      }}
    >
      {children}
    </ColorContext.Provider>
  )
}

ColorProvider.propTypes = {
  children: PropTypes.any,
}
