import { useState, useEffect } from 'react'
import { fromHexToHsl, fromHslToHex } from '../utils/colorTransform'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import PickerCursor from './PickerCursor'

function PickerPanel({ hover, colorHex, setColorHex, showLightness }) {
  // on récupère les valeurs de H, S, L à partir de colorHex
  const [colorH, setColorH] = useState(fromHexToHsl(colorHex)[0])
  const [colorS, setColorS] = useState(fromHexToHsl(colorHex)[1])
  const [colorL, setColorL] = useState(fromHexToHsl(colorHex)[2])

  // lorsque colorHex est modifié (ex : bouton "réinitialiser") les valeurs de H,S ou L sont modifiées
  useEffect(() => {
    setColorH(fromHexToHsl(colorHex)[0])
    setColorS(fromHexToHsl(colorHex)[1])
    setColorL(fromHexToHsl(colorHex)[2])
  }, [colorHex])

  // lorsqu'une valeur de H,S ou L est modifiée, on retourne la nouvelle couleur Hex correspondante
  useEffect(() => {
    setColorHex(fromHslToHex(colorH, colorS, colorL))
  }, [colorH, colorS, colorL, setColorHex])

  return (
    <PickerSettingsPanel className={hover ? 'active' : ''}>
      <PickerCursor
        showData={false}
        cssClass={'hue'}
        colorH={colorH}
        colorS={colorS}
        colorL={colorL}
        onChange={setColorH}
      />
      <PickerCursor
        showData={false}
        cssClass={'saturation'}
        colorH={colorH}
        colorS={colorS}
        colorL={colorL}
        onChange={setColorS}
      />
      {showLightness && (
        <PickerCursor
          showData={false}
          cssClass={'lightness'}
          colorH={colorH}
          colorS={colorS}
          colorL={colorL}
          onChange={setColorL}
        />
      )}
    </PickerSettingsPanel>
  )
}

export default PickerPanel

PickerPanel.propTypes = {
  hover: PropTypes.bool,
  colorHex: PropTypes.string,
  setColorHex: PropTypes.func,
  showLightness: PropTypes.bool,
}

const PickerSettingsPanel = styled.div`
  width: calc(100% - 20px);
  background-color: rgba(0, 0, 0, 0.4);
  right: 10px;
  bottom: 10px;
  position: absolute;
  border-radius: 4px;
  padding: 2px 7px;
  visibility: hidden;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
  &.active {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
  }
`
