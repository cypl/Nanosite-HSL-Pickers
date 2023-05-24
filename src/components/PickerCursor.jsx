import { useState, useRef, useLayoutEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Draggable from 'react-draggable'
import { useViewportWidth } from '../hooks/useViewportWidth'

function PickerCursor({ showData, cssClass, colorH, colorS, colorL }) {
  //showData = false
  const viewportWidth = useViewportWidth() // détermine la largeur du viewport (on load + on resize)
  const refCursorDirection = useRef(null) // ajoute une ref sur la trajectoire du curseur
  const [width, setWidth] = useState(0) // définit la largeur de la trajectoire du curseur

  // met à jour la largeur de la trajectoire du curseur,
  // en fonction de la taille du viewport (resize)
  useLayoutEffect(() => {
    setWidth(refCursorDirection.current.clientWidth)
  }, [viewportWidth])

  // détermine la position du curseur
  const [cursorPosition, setCursorPosition] = useState(0)

  // Calcul de la position du curseur à partir de la valeur initiale de H, S ou L
  useLayoutEffect(() => {
    // calculer la position du curseur à partir de la valeur
    function calculatePositionFormValue(value, width) {
      if (cssClass === 'hue') {
        return Math.round((width - 1) * (value / 360))
      }
      if (cssClass === 'saturation' || cssClass === 'lightness') {
        return Math.round((width - 1) * (value / 100))
      }
    }
    // retour de la valeur au setter
    if (cssClass === 'hue') {
      setCursorPosition(calculatePositionFormValue(colorH, width))
    }
    if (cssClass === 'saturation') {
      setCursorPosition(calculatePositionFormValue(colorS, width))
    }
    if (cssClass === 'lightness') {
      setCursorPosition(calculatePositionFormValue(colorL, width))
    }
  }, [colorH, colorS, colorL, cssClass, width])

  // Calcul de la nouvelle valeur de H, S ou L à partir de la nouvelle position du curseur
  useLayoutEffect(() => {
    function calculateValueFormPosition(position, width) {
      if (cssClass === 'hue') {
        return Math.round((position / width) * 360)
      }
      if (cssClass === 'saturation' || cssClass === 'lightness') {
        return Math.round((position / width) * 100)
      }
    }
    // si on modifie une position, on calcule la nouvelle valeur,

    console.log(calculateValueFormPosition(cursorPosition, width))
  }, [cursorPosition, cssClass, width])

  const handleDrag = (e, { deltaX }) => {
    const newPosition = cursorPosition + deltaX
    // Limiter le mouvement horizontal dans WrapCursor
    const minPosition = 0
    const maxPosition = width - 1 // largeur de la barre - largeur du curseur

    // Vérifier si la nouvelle position dépasse les limites
    if (newPosition >= minPosition && newPosition <= maxPosition) {
      setCursorPosition(newPosition) // en changeant la position du curseur, on doit récupérer un nouvelle valeur de colorH ou colorS ou colorL
    }
  }

  // dégadés de couleur à l'intérieur de CursorWrapper
  const gradientSaturation = `linear-gradient(to right,
    hsl(${colorH}, 0%, ${colorL}%) 0%, 
    hsl(${colorH}, 50%, ${colorL}%) 50%,
    hsl(${colorH}, 100%, ${colorL}%) 100%)`
  const gradientLightness = `linear-gradient(to right,
    hsl(${colorH}, ${colorS}%, 0%) 0%, 
    hsl(${colorH}, ${colorS}%, 50%) 50%,
    hsl(${colorH}, ${colorS}%, 100%) 100%)`

  return (
    <CursorWrapper
      className={cssClass}
      style={{
        background:
          (cssClass === 'saturation' && gradientSaturation) ||
          (cssClass === 'lightness' && gradientLightness),
      }}
    >
      {showData && (
        <PTest>
          {cssClass === 'hue' && 'H :' + colorH}{' '}
          {cssClass === 'saturation' && 'S : ' + colorS}{' '}
          {cssClass === 'lightness' && 'L : ' + colorL}
        </PTest>
      )}
      <CursorDirection width={width} ref={refCursorDirection}>
        <Draggable
          axis="x"
          onDrag={handleDrag}
          position={{ x: cursorPosition, y: 0 }}
        >
          <Cursor />
        </Draggable>
      </CursorDirection>
    </CursorWrapper>
  )
}

export default PickerCursor

PickerCursor.propTypes = {
  showData: PropTypes.bool,
  cssClass: PropTypes.string,
  colorH: PropTypes.number,
  colorS: PropTypes.number,
  colorL: PropTypes.number,
}

const CursorWrapper = styled.div`
  position: relative;
  height: 16px;
  width: 100%;
  border-radius: 8px;
  margin: 7px 0;
  padding: 3px 8px;
  &.hue {
    background: linear-gradient(
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
    );
  }
`
const CursorDirection = styled.div`
  width: 100%;
  height: 8px;
`
const Cursor = styled.div`
  width: 2px;
  height: 16px;
  position: relative;
  top: -3px;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  &::before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    position: absolute;
    border-radius: 5px;
    top: 50%;
    margin-top: -4px;
    left: 50%;
    margin-left: -4px;
    background-color: #fff;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }
`
const PTest = styled.p`
  position: absolute;
  top: 1px;
  left: 5px;
  font-size: 10px;
  color: #fff;
  text-shadow: 0 0 5px #000;
`
