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
            {colorLightness} / {expectedLightness}
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
  font-size: 11px;
  line-height: 1;
  padding: 5px 10px;
  border-radius: 11px;
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
