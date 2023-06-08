import { useState, createContext } from 'react'
import PropTypes from 'prop-types'
import { colorStarterHSL } from './colorStarter'

export const ContextHSL = createContext()

export const HSLProvider = ({ children }) => {
  const [colorPrimaire1, setColorPrimaire1] = useState(colorStarterHSL.primary1)
  const [colorPrimaire, setColorPrimaire] = useState(colorStarterHSL.primary)
  const [colorPrimaire2, setColorPrimaire2] = useState(colorStarterHSL.primary2)
  const [colorSecondaire1, setColorSecondaire1] = useState(
    colorStarterHSL.secondary1
  )
  const [colorSecondaire, setColorSecondaire] = useState(
    colorStarterHSL.secondary
  )
  const [colorSecondaire2, setColorSecondaire2] = useState(
    colorStarterHSL.secondary2
  )
  const [colorClair, setColorClair] = useState(colorStarterHSL.clair)
  const [colorClair2, setColorClair2] = useState(colorStarterHSL.clair2)

  function backToTheBegining() {
    setColorPrimaire1(colorStarterHSL.primary1)
    setColorPrimaire(colorStarterHSL.primary)
    setColorPrimaire2(colorStarterHSL.primary2)
    setColorSecondaire1(colorStarterHSL.secondary1)
    setColorSecondaire(colorStarterHSL.secondary)
    setColorSecondaire2(colorStarterHSL.secondary2)
    setColorClair(colorStarterHSL.clair)
    setColorClair2(colorStarterHSL.clair2)
  }

  return (
    <ContextHSL.Provider
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
    </ContextHSL.Provider>
  )
}

HSLProvider.propTypes = {
  children: PropTypes.any,
}
