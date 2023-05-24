import { useState, createContext } from 'react'
import PropTypes from 'prop-types'
import { colorStarter } from './colorStarter'

export const ColorContext = createContext()

export const ColorProvider = ({ children }) => {
  // $primaire1
  const [colorPrimaire1, setColorPrimaire1] = useState(colorStarter.primary1)

  // $primaire
  const [colorPrimaire, setColorPrimaire] = useState(colorStarter.primary)

  // $primaire2
  const [colorPrimaire2, setColorPrimaire2] = useState(colorStarter.primary2)

  // $secondaire1
  const [colorSecondaire1, setColorSecondaire1] = useState(
    colorStarter.secondary1
  )

  // $secondaire
  const [colorSecondaire, setColorSecondaire] = useState(colorStarter.secondary)

  // $secondaire2
  const [colorSecondaire2, setColorSecondaire2] = useState(
    colorStarter.secondary2
  )

  // $clair
  const [colorClair, setColorClair] = useState(colorStarter.clair)

  // $clair2
  const [colorClair2, setcColorClair2] = useState(colorStarter.clair2)

  return (
    <ColorContext.Provider
      value={{
        colorPrimaire1,
        colorPrimaire,
        colorPrimaire2,
        colorSecondaire1,
        colorSecondaire,
        colorSecondaire2,
        colorClair,
        colorClair2,
      }}
    >
      {children}
    </ColorContext.Provider>
  )
}

ColorProvider.propTypes = {
  children: PropTypes.any,
}
