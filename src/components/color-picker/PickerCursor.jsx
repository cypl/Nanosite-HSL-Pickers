import { useState, useEffect } from 'react'
import { Slider } from '@mantine/core'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { getRoundedValue } from '../../utils/mathRound'

function PickerCursor({ cssClass, colorH, colorS, colorL, onChange }) {
  // dégadés de couleur à l'intérieur de CursorWrapper
  const gradientHue = `linear-gradient(
    to right,
    hsl(0, 100%, 50%) 0%,
    hsl(35, 100%, 50%) 11%,
    hsl(71, 100%, 50%) 22%,
    hsl(107, 100%, 50%) 33%,
    hsl(143, 100%, 50%) 44%,
    hsl(179, 100%, 50%) 55%,
    hsl(215, 100%, 50%) 66%,
    hsl(232, 100%, 50%) 77%,
    hsl(268, 100%, 50%) 88%,
    hsl(304, 100%, 50%) 99%
  )`
  const gradientSaturation = `linear-gradient(to right,
    hsl(${colorH}, 0%, ${colorL}%) 0%, 
    hsl(${colorH}, 50%, ${colorL}%) 50%,
    hsl(${colorH}, 100%, ${colorL}%) 100%)`
  const gradientLightness = `linear-gradient(to right,
    hsl(${colorH}, ${colorS}%, 0%) 0%, 
    hsl(${colorH}, ${colorS}%, 50%) 50%,
    hsl(${colorH}, ${colorS}%, 100%) 100%)`

  const [value, setValue] = useState()
  useEffect(() => {
    if (cssClass === 'hue') {
      //console.log(Math.round((value / 100) * 360))
      onChange(getRoundedValue((value / 100) * 360, 1))
    } else if (cssClass === 'saturation') {
      //console.log(Math.round(value))
      onChange(getRoundedValue(value, 1))
    } else if (cssClass === 'lightness') {
      //console.log(Math.round(value))
      onChange(getRoundedValue(value, 1))
    } else {
      console.log(
        "La valeur de couleur n'a pas pu être calculée, parce que la classe CSS sur un des color picker n'est pas bonne (hue, saturation ou lightness)."
      )
    }
  }, [value])

  function setDefaultValue() {
    if (cssClass === 'hue') {
      return getRoundedValue((colorH / 360) * 100, 1)
    } else if (cssClass === 'saturation') {
      return colorS
    } else if (cssClass === 'lightness') {
      return colorL
    } else {
      return 0
    }
  }

  return (
    <>
      <SliderHSL
        style={{
          background:
            (cssClass === 'hue' && gradientHue) ||
            (cssClass === 'saturation' && gradientSaturation) ||
            (cssClass === 'lightness' && gradientLightness),
        }}
        step={0.05}
        label={(value) =>
          (cssClass === 'hue' &&
            `Teinte : ${getRoundedValue((value / 100) * 360, 1)}°`) ||
          (cssClass === 'saturation' &&
            `Saturation : ${getRoundedValue(value, 1)}%`) ||
          (cssClass === 'lightness' &&
            `Luminosité : ${getRoundedValue(value, 1)}%`)
        }
        defaultValue={setDefaultValue()}
        value={value}
        onChange={setValue}
        styles={() => ({
          root: {
            height: '16px',
          },
          track: {
            backgroundColor: 'transparent',
            borderRadius: '8px',
          },
          bar: {
            backgroundColor: 'transparent',
            height: '16px',
          },
          label: {
            fontSize: '12px',
            lineHeight: '1',
            marginBottom: 0,
            marginTop: 8,
            color: '#fff',
            backgroundColor: 'rgba(0,0,0,0.8)',
            zIndex: 9999,
          },
          thumb: {
            height: '12px',
            width: '12px',
            backgroundColor: '#fff',
            borderWidth: '1px',
            borderColor: '#333',
          },
        })}
      />
    </>
  )
}

export default PickerCursor

PickerCursor.propTypes = {
  cssClass: PropTypes.string,
  colorH: PropTypes.number,
  colorS: PropTypes.number,
  colorL: PropTypes.number,
  onChange: PropTypes.func,
}

const SliderHSL = styled(Slider)`
  position: relative;
  margin: 7px 0;
  padding: 2px;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
  & .mantine-Slider-track::before {
    background-color: transparent;
  }
`
// &::after {
//   content: '';
//   position: absolute;
//   width: calc(100% + 4px);
//   height: calc(100% + 4px);
//   background-color: rgba(0, 0, 0, 0.7);
//   left: -2px;
//   top: ${(props) =>
//     props.cssClass === 'lightness' ? '-2px' : '-200000px'};
//   border-radius: 10px;
//   z-index: 999;
