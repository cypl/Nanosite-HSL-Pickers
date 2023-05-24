import { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PickerInfos from './PickerInfos'
import PickerPanel from './PickerPanel'

function ColorPickerHSL({
  sizeH,
  sizeW,
  sizeRatio,
  className,
  colorName,
  colorHex,
  setColorHex,
}) {
  const [hover, setHover] = useState(false)
  return (
    <PickerWrapper
      sizeH={sizeH}
      sizeW={sizeW}
      sizeRatio={sizeRatio}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={className}
    >
      <PickerBody
        style={{
          backgroundColor: colorHex,
        }}
      >
        <PickerInfos colorName={colorName} hexValue={colorHex} hover={hover} />
        <PickerPanel
          hover={hover}
          colorHex={colorHex}
          setColorHex={setColorHex}
        />
      </PickerBody>
    </PickerWrapper>
  )
}
export default ColorPickerHSL

ColorPickerHSL.propTypes = {
  sizeH: PropTypes.string,
  sizeW: PropTypes.string,
  sizeRatio: PropTypes.string,
  className: PropTypes.string,
  colorName: PropTypes.string,
  colorHex: PropTypes.string,
  setColorHex: PropTypes.func,
}

const PickerWrapper = styled.div`
  position: relative;
  width: ${(props) => props.sizeW || 'auto'};
  height: ${(props) => props.sizeH || 'auto'};
  aspect-ratio: ${(props) => props.sizeRatio || 'auto'};
  &.primaire {
    // border-top: 5px solid #111;
    // border-bottom: 5px solid #111;
  }
  &.secondaire {
    // border-top: 5px solid #111;
    // border-right: 5px solid #111;
    // border-bottom: 5px solid #111;
  }
`
const PickerBody = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
`
