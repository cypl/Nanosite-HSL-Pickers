import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import { ModalContext } from '../utils/Context'

function Modal({ content }) {
  const { isOpen, closeModal } = useContext(ModalContext)

  return (
    <ModalContainer className={isOpen ? 'open' : 'close'}>
      <Background>
        <ModalMarginTop>
          <ModalContent>{content}</ModalContent>
          <Close onClick={() => closeModal()}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </Close>
        </ModalMarginTop>
      </Background>
    </ModalContainer>
  )
}
export default Modal

Modal.propTypes = {
  content: PropTypes.element,
}

const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  &.open {
    display: block;
  }
  &.close {
    display: none;
  }
`
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
`
const ModalMarginTop = styled.div`
  width: 600px;
  padding: 60px 0;
  position: relative;
`
const ModalContent = styled.div`
  height: 300px;
  background-color: #222;
  border-radius: 5px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
`
const Close = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 30px;
  right: -30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & svg {
    fill: #666;
    position: absolute;
    height: 110%;
    width: auto;
    transition: 0.1s fill ease-in-out;
  }
  &:hover svg {
    fill: #999;
    transition: 0.1s fill ease-in-out;
  }
`
