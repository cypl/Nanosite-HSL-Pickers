import styled from 'styled-components'
import ColorPickerHSL from './ColorPickerHSL'
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
          setColorHex={setColorPrimaire1}
        />
        <ColorPickerHSL
          className={'primaire'}
          sizeW={'100%'}
          sizeH={'33.33%'}
          colorName={'$primaire'}
          colorHex={colorPrimaire}
          setColorHex={setColorPrimaire}
        />
        <ColorPickerHSL
          sizeW={'100%'}
          sizeH={'33.33%'}
          colorName={'$primaire2'}
          colorHex={colorPrimaire2}
          setColorHex={setColorPrimaire2}
        />
      </Column>
      <Column className="column_38">
        <ColorPickerHSL
          sizeW={'100%'}
          sizeH={'33.33%'}
          colorName={'$secondaire1'}
          colorHex={colorSecondaire1}
          setColorHex={setColorSecondaire1}
        />
        <ColorPickerHSL
          className={'secondaire'}
          sizeW={'100%'}
          sizeH={'33.33%'}
          colorName={'$secondaire'}
          colorHex={colorSecondaire}
          setColorHex={setColorSecondaire}
        />
        <ColorPickerHSL
          sizeW={'100%'}
          sizeH={'33.33%'}
          colorName={'$secondaire2'}
          colorHex={colorSecondaire2}
          setColorHex={setColorSecondaire2}
        />
      </Column>
      <Column className="column_24">
        <ColorPickerHSL
          sizeW={'100%'}
          sizeH={'50%'}
          colorName={'$clair'}
          colorHex={colorClair}
          setColorHex={setColorClair}
        />
        <ColorPickerHSL
          sizeW={'100%'}
          sizeH={'50%'}
          colorName={'$clair2'}
          colorHex={colorClair2}
          setColorHex={setColorClair2}
        />
      </Column>
    </Content>
  )
}

export default ColorPickers

const Content = styled.div`
  width: 100vw;
  height: calc(100vh - 80px);
  background-color: #111;
  overflow: hidden;
  position: fixed;
  margin: 0;
  top: 80px;
  display: flex;
`
const Column = styled.div`
  &.column_38 {
    width: 38%;
  }
  &.column_24 {
    width: 24%;
  }
`
