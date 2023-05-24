import styled from 'styled-components'
import Logo from './Logo'

function Header() {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <Info>Test RGAA</Info>
        <Info>Exporter</Info>
        <Info>Réinitialiser</Info>
        <Info>?</Info>
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
  font-size: 10px;
  line-height: 1;
`
const Info = styled.li`
  display: inline-block;
  font-size: 10px;
  line-height: 1;
  border-radius: 20px;
  padding: 10px 15px;
  color: #fff;
  margin-left: 10px;
  border: 2px solid #111;
  text-transform: uppercase;
  letter-spacing: 1px;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: #111;
  }
`
