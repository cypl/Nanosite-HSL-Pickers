import { useState, useRef, useLayoutEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

function PickerInfos({ colorName, hexValue, hover }) {
  const ref = useRef(null)
  const [width, setWidth] = useState(0)
  useLayoutEffect(() => {
    setWidth(ref.current.clientWidth)
  }, [])

  return (
    <PickerColorInfos width={width} className={hover ? 'active' : ''}>
      <PickerColorInfosName>{colorName}</PickerColorInfosName>
      <PickerColorInfosAnim
        width={width}
        className={hover ? 'active' : ''}
        ref={ref}
      >
        <PickerColorInfosSep className={hover ? 'active' : ''}>
          :
        </PickerColorInfosSep>
        <PickerColorInfosValue className={hover ? 'active' : ''}>
          {hexValue}
        </PickerColorInfosValue>
      </PickerColorInfosAnim>
    </PickerColorInfos>
  )
}
export default PickerInfos

PickerInfos.propTypes = {
  colorName: PropTypes.string,
  hexValue: PropTypes.string,
  hover: PropTypes.bool,
}

const PickerColorInfos = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  font-size: 10px;
  line-height: 1;
  padding: 5px 10px;
  transition: 0.2s padding-right ease-in-out;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  &.active {
    padding-right: ${(props) => props.width + 12}px;
    transition: 0.1s padding-right ease-in-out;
  }
`
const PickerColorInfosName = styled.div`
  color: #fff;
`
const PickerColorInfosAnim = styled.div`
  display: flex;
  position: absolute;
  right: 12px;
  transition: 0.2s right ease-in-out;
  transform: translate(100%, 0);
  &.active {
    right: ${(props) => props.width + 12}px;
    transition: 0.1s right ease-in-out;
  }
`
const PickerColorInfosSep = styled.div`
  color: #fff;
  margin: 0 3px;
  opacity: 0;
  transition: opacity 0.05s ease-in-out 0s;
  &.active {
    opacity: 1;
    transition: opacity 0.05s ease-in-out 0.15s;
  }
`
const PickerColorInfosValue = styled.div`
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  opacity: 0;
  transition: opacity 0.05s ease-in-out 0s;
  &.active {
    opacity: 1;
    transition: opacity 0.05s ease-in-out 0.15s;
  }
`
