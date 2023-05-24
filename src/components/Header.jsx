import styled from 'styled-components'
import Logo from './Logo'

function Header() {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <ItemNav className="inactive">Test RGAA</ItemNav>
        <ItemNav className="inactive">Exporter</ItemNav>
        <ItemNav>Réinitialiser</ItemNav>
        <ItemNav className="inactive">?</ItemNav>
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
  padding: 10px 15px;
  color: #fff;
  margin-left: 12px;
  border: 2px solid #111;
  text-transform: uppercase;
  letter-spacing: 1px;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: #111;
  }
  &.inactive {
    opacity: 0.4;
    pointer-events: none;
  }
`
