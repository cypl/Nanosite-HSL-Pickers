import { useState, createContext } from 'react'
import PropTypes from 'prop-types'
import { colorStarter } from './colorStarter'

export const ColorContext = createContext()

export const ColorProvider = ({ children }) => {
  const [colorPrimaire1, setColorPrimaire1] = useState(colorStarter.primary1)
  const [colorPrimaire, setColorPrimaire] = useState(colorStarter.primary)
  const [colorPrimaire2, setColorPrimaire2] = useState(colorStarter.primary2)
  const [colorSecondaire1, setColorSecondaire1] = useState(
    colorStarter.secondary1
  )
  const [colorSecondaire, setColorSecondaire] = useState(colorStarter.secondary)
  const [colorSecondaire2, setColorSecondaire2] = useState(
    colorStarter.secondary2
  )
  const [colorClair, setColorClair] = useState(colorStarter.clair)
  const [colorClair2, setColorClair2] = useState(colorStarter.clair2)

  function backToTheBegining() {
    setColorPrimaire1(colorStarter.primary1)
    setColorPrimaire(colorStarter.primary)
    setColorPrimaire2(colorStarter.primary2)
    setColorSecondaire1(colorStarter.secondary1)
    setColorSecondaire(colorStarter.secondary)
    setColorSecondaire2(colorStarter.secondary2)
    setColorClair(colorStarter.clair)
    setColorClair2(colorStarter.clair2)
  }

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
        setColorPrimaire1,
        setColorPrimaire,
        setColorPrimaire2,
        setColorSecondaire1,
        setColorSecondaire,
        setColorSecondaire2,
        setColorClair,
        setColorClair2,
        backToTheBegining,
      }}
    >
      {children}
    </ColorContext.Provider>
  )
}

ColorProvider.propTypes = {
  children: PropTypes.any,
}
