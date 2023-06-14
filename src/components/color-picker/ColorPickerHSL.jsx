import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PickerPanel from './PickerPanel'
import PickerInfos from './PickerInfos'
import { relativeLuminanceW3C } from '../../utils/colorTransform'
import { fromHexToRgb } from '../../utils/colorTransform'

function ColorPickerHSL({
  sizeH,
  sizeW,
  className,
  colorName,
  colorHex,
  setColorHex,
  showLightnessPicker,
  expectedLightness,
  roundedTop,
  roundedBottom,
}) {
  const [hover, setHover] = useState(false)

  const [colorLightness, setColorLightness] = useState()
  useEffect(() => {
    const RgB = fromHexToRgb(colorHex)
    setColorLightness(
      Math.round(relativeLuminanceW3C(RgB[0], RgB[1], RgB[2]) * 1000)
    )
  }, [colorHex])

  function testValidLightness(colorLightness, expectedLightness) {
    if (colorLightness - expectedLightness < -15) {
      // console.log('trop bas') // = il faut augmenter la luminosité
      return false
    } else if (colorLightness - expectedLightness > 15) {
      // console.log('trop haut') // = il faut baisser la luminosité
      return false
    } else {
      // console.log("c'est bon !")
      return true
    }
  }

  const [validLightness, setValidLightness] = useState()
  useEffect(() => {
    setValidLightness(testValidLightness(colorLightness, expectedLightness))
  }, [colorLightness, expectedLightness])

  return (
    <PickerWrapper
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={className}
      style={{ height: sizeH, width: sizeW }}
    >
      <PickerBody
        style={{
          backgroundColor: colorHex,
          borderRadius: `${
            roundedTop ? '5px 5px 0 0' : roundedBottom ? '0 0 5px 5px' : '0'
          }`,
        }}
      >
        {hover && (
          <LightnessRatio>
            <span className={validLightness ? 'valid' : 'not-valid'}></span>
            {colorLightness} / {expectedLightness}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88.66 88.66">
              <path d="M44.33,22.95c-11.79,0-21.38,9.59-21.38,21.38s9.59,21.38,21.38,21.38,21.38-9.59,21.38-21.38-9.59-21.38-21.38-21.38Zm0,35.76c-7.93,0-14.38-6.45-14.38-14.38s6.45-14.38,14.38-14.38,14.38,6.45,14.38,14.38-6.45,14.38-14.38,14.38Z" />
              <path d="M44.33,17.17c1.93,0,3.5-1.57,3.5-3.5V3.5c0-1.93-1.57-3.5-3.5-3.5s-3.5,1.57-3.5,3.5V13.67c0,1.93,1.57,3.5,3.5,3.5Z" />
              <path d="M20.18,25.13c.68,.68,1.58,1.02,2.47,1.02s1.79-.34,2.48-1.03c1.37-1.37,1.37-3.58,0-4.95l-7.19-7.19c-1.37-1.37-3.58-1.37-4.95,0s-1.37,3.58,0,4.95l7.19,7.19Z" />
              <path d="M17.17,44.33c0-1.93-1.57-3.5-3.5-3.5H3.5c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5H13.67c1.93,0,3.5-1.57,3.5-3.5Z" />
              <path d="M20.18,63.53l-7.19,7.19c-1.37,1.37-1.37,3.58,0,4.95,.68,.68,1.58,1.03,2.48,1.03s1.79-.34,2.47-1.03l7.19-7.19c1.37-1.37,1.37-3.58,0-4.95-1.37-1.37-3.58-1.37-4.95,0Z" />
              <path d="M44.33,71.49c-1.93,0-3.5,1.57-3.5,3.5v10.17c0,1.93,1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5v-10.17c0-1.93-1.57-3.5-3.5-3.5Z" />
              <path d="M68.48,63.53c-1.37-1.37-3.58-1.37-4.95,0-1.37,1.37-1.37,3.58,0,4.95l7.19,7.19c.68,.68,1.58,1.03,2.47,1.03s1.79-.34,2.47-1.03c1.37-1.37,1.37-3.58,0-4.95l-7.19-7.19Z" />
              <path d="M85.16,40.83h-10.17c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5h10.17c1.93,0,3.5-1.57,3.5-3.5s-1.57-3.5-3.5-3.5Z" />
              <path d="M66.01,26.15c.9,0,1.79-.34,2.47-1.03l7.19-7.19c1.37-1.37,1.37-3.58,0-4.95-1.37-1.37-3.58-1.37-4.95,0l-7.19,7.19c-1.37,1.37-1.37,3.58,0,4.95,.68,.68,1.58,1.02,2.47,1.02Z" />
            </svg>
          </LightnessRatio>
        )}
        <PickerInfos colorName={colorName} hexValue={colorHex} hover={hover} />
        <PickerPanel
          hover={hover}
          colorHex={colorHex}
          setColorHex={setColorHex}
          showLightnessPicker={showLightnessPicker}
        />
      </PickerBody>
    </PickerWrapper>
  )
}
export default ColorPickerHSL

ColorPickerHSL.propTypes = {
  sizeH: PropTypes.string,
  sizeW: PropTypes.string,
  className: PropTypes.string,
  colorName: PropTypes.string,
  colorHex: PropTypes.string,
  setColorHex: PropTypes.func,
  showLightnessPicker: PropTypes.bool,
  expectedLightness: PropTypes.number,
  roundedTop: PropTypes.bool,
  roundedBottom: PropTypes.bool,
}

const LightnessRatio = styled.p`
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  right: 10px;
  top: 10px;
  color: #fff;
  font-size: 10px;
  line-height: 10px;
  height:20px;
  padding: 5px 20px 5px 6px;
  border-radius: 11px;
  & span {
    width: 10px;
    height: 10px;
    border-radius: 5px;
    display: inline-block;
    vertical-align: -1px;
    margin-right: 7px;
    outline: 2px solid rgba(0, 0, 0, 0.2);
    position:relative;
    &.valid {
      background-color: #00ef25;
    }
    &.not-valid {
      background-color: #ff6a6a;
    }
  }
  & svg {
    height: 12px;
    width: 12px;
    display: block;
    position:absolute;
    top:4px;
    right:5px;
    & path {
      fill: rgba(255, 255, 255, 0.7);
    }
`
const PickerWrapper = styled.div`
  position: relative;
`
const PickerBody = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
`
