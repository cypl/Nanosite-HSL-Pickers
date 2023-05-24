import styled from 'styled-components'
import ColorPickerHSL from './ColorPickerHSL'
import { useContext } from 'react'
import { ColorContext } from '../utils/Context'

function ColorPickers() {
  const {
    colorPrimaire1,
    colorPrimaire1H,
    colorPrimaire1S,
    colorPrimaire1L,
    colorPrimaire,
    colorPrimaireH,
    colorPrimaireS,
    colorPrimaireL,
    colorPrimaire2,
    colorPrimaire2H,
    colorPrimaire2S,
    colorPrimaire2L,
    colorSecondaire1,
    colorSecondaire1H,
    colorSecondaire1S,
    colorSecondaire1L,
    colorSecondaire,
    colorSecondaireH,
    colorSecondaireS,
    colorSecondaireL,
    colorSecondaire2,
    colorSecondaire2H,
    colorSecondaire2S,
    colorSecondaire2L,
    colorClair,
    colorClairH,
    colorClairS,
    colorClairL,
    colorClair2,
    colorClair2H,
    colorClair2S,
    colorClair2L,
  } = useContext(ColorContext)
  return (
    <Content>
      <Column className="column_38">
        <ColorPickerHSL
          sizeW={'100%'}
          sizeH={'33.33%'}
          colorName={'$primaire1'}
          colorHex={colorPrimaire1}
          colorH={colorPrimaire1H}
          colorS={colorPrimaire1S}
          colorL={colorPrimaire1L}
        />
        <ColorPickerHSL
          className={'primaire'}
          sizeW={'100%'}
          sizeH={'33.33%'}
          colorName={'$primaire'}
          colorHex={colorPrimaire}
          colorH={colorPrimaireH}
          colorS={colorPrimaireS}
          colorL={colorPrimaireL}
        />
        <ColorPickerHSL
          sizeW={'100%'}
          sizeH={'33.33%'}
          colorName={'$primaire2'}
          colorHex={colorPrimaire2}
          colorH={colorPrimaire2H}
          colorS={colorPrimaire2S}
          colorL={colorPrimaire2L}
        />
      </Column>
      <Column className="column_38">
        <ColorPickerHSL
          sizeW={'100%'}
          sizeH={'33.33%'}
          colorName={'$secondaire1'}
          colorHex={colorSecondaire1}
          colorH={colorSecondaire1H}
          colorS={colorSecondaire1S}
          colorL={colorSecondaire1L}
        />
        <ColorPickerHSL
          className={'secondaire'}
          sizeW={'100%'}
          sizeH={'33.33%'}
          colorName={'$secondaire'}
          colorHex={colorSecondaire}
          colorH={colorSecondaireH}
          colorS={colorSecondaireS}
          colorL={colorSecondaireL}
        />
        <ColorPickerHSL
          sizeW={'100%'}
          sizeH={'33.33%'}
          colorName={'$secondaire2'}
          colorHex={colorSecondaire2}
          colorH={colorSecondaire2H}
          colorS={colorSecondaire2S}
          colorL={colorSecondaire2L}
        />
      </Column>
      <Column className="column_24">
        <ColorPickerHSL
          sizeW={'100%'}
          sizeH={'50%'}
          colorName={'$clair'}
          colorHex={colorClair}
          colorH={colorClairH}
          colorS={colorClairS}
          colorL={colorClairL}
        />
        <ColorPickerHSL
          sizeW={'100%'}
          sizeH={'50%'}
          colorName={'$clair2'}
          colorHex={colorClair2}
          colorH={colorClair2H}
          colorS={colorClair2S}
          colorL={colorClair2L}
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
