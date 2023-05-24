import styled from 'styled-components'
import PropTypes from 'prop-types'
import PickerCursor from './PickerCursor'

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

function PickerPanel({ hover, colorH, colorS, colorL }) {
  return (
    <PickerSettingsPanel className={hover ? 'active' : ''}>
      <PickerCursor
        showData={false}
        cssClass={'hue'}
        colorH={colorH}
        colorS={colorS}
        colorL={colorL}
      />
      <PickerCursor
        showData={false}
        cssClass={'saturation'}
        colorH={colorH}
        colorS={colorS}
        colorL={colorL}
      />
      <PickerCursor
        showData={false}
        cssClass={'lightness'}
        colorH={colorH}
        colorS={colorS}
        colorL={colorL}
      />
    </PickerSettingsPanel>
  )
}

export default PickerPanel

PickerPanel.propTypes = {
  hover: PropTypes.bool,
  colorH: PropTypes.number,
  colorS: PropTypes.number,
  colorL: PropTypes.number,
}
