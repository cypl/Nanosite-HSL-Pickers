import styled from 'styled-components'
import Logo from './Logo'
import { useContext } from 'react'
import { ColorContext, ModalContext } from '../utils/Context'
import Export from './modal-contents/Export'

function Header() {
  const { backToTheBegining } = useContext(ColorContext)
  const { openModal } = useContext(ModalContext)

  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <ItemNav className="inactive">Test RGAA</ItemNav>
        <ItemNav onClick={() => openModal(<Export />)}>Exporter</ItemNav>
        <ItemNav onClick={() => backToTheBegining()}>Réinitialiser</ItemNav>
        <ItemNav className="inactive">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 110">
              <path d="M74.26,8.62c-7.03-4.8-16.32-7.2-27.86-7.2-10.28,0-19.06,1.89-26.33,5.67-7.27,3.78-12.9,9.07-16.87,15.86l21.67,11.64c1.94-3.3,4.48-5.87,7.64-7.71,3.15-1.84,6.67-2.76,10.55-2.76s6.86,.85,9.24,2.55c2.38,1.7,3.56,3.95,3.56,6.76,0,2.04-.68,3.95-2.04,5.75-1.36,1.8-3.44,4-6.26,6.62-4.07,3.78-7.18,7.25-9.31,10.4-2.13,3.15-3.2,7.15-3.2,12h25.89c0-2.62,.78-4.92,2.33-6.91,1.55-1.99,3.98-4.39,7.27-7.2,3-2.62,5.46-4.97,7.35-7.05,1.89-2.08,3.51-4.66,4.87-7.71,1.36-3.05,2.04-6.57,2.04-10.55,0-8.63-3.52-15.35-10.55-20.15Z" />
              <circle cx="48.25" cy="93.39" r="15.19" />
            </svg>
          </span>
        </ItemNav>
      </Nav>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
`
const Nav = styled.ul`
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 11px;
  line-height: 1;
`
const ItemNav = styled.li`
  display: inline-block;
  font-size: 11px;
  line-height: 1;
  border-radius: 20px;
  padding: 10px 12px;
  color: #fff;
  margin-left: 12px;
  border: 2px solid #222;
  text-transform: uppercase;
  letter-spacing: 1px;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: #222;
  }
  &.inactive {
    opacity: 0.3;
    pointer-events: none;
  }
  & span {
    height: 11px;
    width: 9px;
    display: inline-block;
    position: relative;
    & svg {
      fill: #fff;
      width: 120%;
      height: auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`
