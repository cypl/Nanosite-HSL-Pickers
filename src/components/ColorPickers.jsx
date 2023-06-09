import styled from 'styled-components'
import ColorPickerHSL from './color-picker/ColorPickerHSL'
import { useContext } from 'react'
import { ColorContext } from '../utils/Context'

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
  } = useContext(ColorContext)
  return (
    <Content>
      <Column className="column_38">
        <ColorPickerHSL
          sizeW={'100%'}
          sizeH={'33.33%'}
          colorName={'$primaire1'}
          colorHex={colorPrimaire1}
          expectedLightness={390}
          setColorHex={setColorPrimaire1}
          showLightnessPicker={true}
          roundedTop={true}
          roundedBottom={false}
        />
        <ColorPickerHSL
          className={'primaire'}
          sizeW={'100%'}
          sizeH={'33.33%'}
          colorName={'$primaire'}
          colorHex={colorPrimaire}
          expectedLightness={190}
          setColorHex={setColorPrimaire}
          showLightnessPicker={true}
          roundedTop={false}
          roundedBottom={false}
        />
        <ColorPickerHSL
          sizeW={'100%'}
          sizeH={'33.33%'}
          colorName={'$primaire2'}
          colorHex={colorPrimaire2}
          expectedLightness={15}
          setColorHex={setColorPrimaire2}
          showLightnessPicker={true}
          roundedTop={false}
          roundedBottom={true}
        />
      </Column>
      <Column className="column_38">
        <ColorPickerHSL
          sizeW={'100%'}
          sizeH={'33.33%'}
          colorName={'$secondaire1'}
          colorHex={colorSecondaire1}
          expectedLightness={390}
          setColorHex={setColorSecondaire1}
          showLightnessPicker={true}
          roundedTop={true}
          roundedBottom={false}
        />
        <ColorPickerHSL
          className={'secondaire'}
          sizeW={'100%'}
          sizeH={'33.33%'}
          colorName={'$secondaire'}
          colorHex={colorSecondaire}
          expectedLightness={190}
          setColorHex={setColorSecondaire}
          showLightnessPicker={true}
          roundedTop={false}
          roundedBottom={false}
        />
        <ColorPickerHSL
          sizeW={'100%'}
          sizeH={'33.33%'}
          colorName={'$secondaire2'}
          colorHex={colorSecondaire2}
          expectedLightness={15}
          setColorHex={setColorSecondaire2}
          showLightnessPicker={true}
          roundedTop={false}
          roundedBottom={true}
        />
      </Column>
      <Column className="column_24">
        <ColorPickerHSL
          sizeW={'100%'}
          sizeH={'50%'}
          colorName={'$clair'}
          colorHex={colorClair}
          expectedLightness={950}
          setColorHex={setColorClair}
          showLightnessPicker={true}
          roundedTop={true}
          roundedBottom={false}
        />
        <ColorPickerHSL
          sizeW={'100%'}
          sizeH={'50%'}
          colorName={'$clair2'}
          colorHex={colorClair2}
          expectedLightness={600}
          setColorHex={setColorClair2}
          showLightnessPicker={true}
          roundedTop={false}
          roundedBottom={true}
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
  position: fixed;
  margin: 0;
  top: 80px;
  left: 30px;
  display: flex;
  justify-content: space-between;
`
const Column = styled.div`
  &.column_38 {
    width: calc(38% - 10px);
  }
  &.column_24 {
    width: calc(24% - 10px);
  }
`
