import styled from 'styled-components'
import ColorPickerHSL from './color-picker/ColorPickerHSL'
import { useContext } from 'react'
import { ContextHSL } from '../utils/ContextHSL'

function ColorPickers() {
  const {
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
  } = useContext(ContextHSL)

  return (
    <Content>
      <Column className="column_38">
        <ColorPickerHSL
          sizeW={'100%'}
          sizeH={'33.33%'}
          colorName={'$primaire1'}
          colorHSL={colorPrimaire1}
          setColorHSL={setColorPrimaire1}
          showLightness={true}
        />
        <ColorPickerHSL
          className={'primaire'}
          sizeW={'100%'}
          sizeH={'33.33%'}
          colorName={'$primaire'}
          colorHSL={colorPrimaire}
          setColorHSL={setColorPrimaire}
          showLightness={true}
        />
        <ColorPickerHSL
          sizeW={'100%'}
          sizeH={'33.33%'}
          colorName={'$primaire2'}
          colorHSL={colorPrimaire2}
          setColorHSL={setColorPrimaire2}
          showLightness={true}
        />
      </Column>
      <Column className="column_38">
        <ColorPickerHSL
          sizeW={'100%'}
          sizeH={'33.33%'}
          colorName={'$secondaire1'}
          colorHSL={colorSecondaire1}
          setColorHSL={setColorSecondaire1}
          showLightness={true}
        />
        <ColorPickerHSL
          className={'secondaire'}
          sizeW={'100%'}
          sizeH={'33.33%'}
          colorName={'$secondaire'}
          colorHSL={colorSecondaire}
          setColorHSL={setColorSecondaire}
          showLightness={true}
        />
        <ColorPickerHSL
          sizeW={'100%'}
          sizeH={'33.33%'}
          colorName={'$secondaire2'}
          colorHSL={colorSecondaire2}
          setColorHSL={setColorSecondaire2}
          showLightness={true}
        />
      </Column>
      <Column className="column_24">
        <ColorPickerHSL
          sizeW={'100%'}
          sizeH={'50%'}
          colorName={'$clair'}
          colorHSL={colorClair}
          setColorHSL={setColorClair}
          showLightness={true}
        />
        <ColorPickerHSL
          sizeW={'100%'}
          sizeH={'50%'}
          colorName={'$clair2'}
          colorHSL={colorClair2}
          setColorHSL={setColorClair2}
          showLightness={true}
        />
      </Column>
    </Content>
  )
}

export default ColorPickers

const Content = styled.div`
  width: calc(100vw - 60px);
  height: calc(100vh - 110px);
  background-color: #111;
  // overflow: hidden;
  position: fixed;
  margin: 0;
  top: 80px;
  left: 30px;
  display: flex;
  // border-radius: 7px;
  outline: 3px solid rgba(0, 0, 0, 0.2);
`
const Column = styled.div`
  &.column_38 {
    width: 38%;
  }
  &.column_24 {
    width: 24%;
  }
`
