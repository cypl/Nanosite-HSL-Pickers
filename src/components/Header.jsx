import styled from 'styled-components'
import Logo from './Logo'

function Header() {
  return (
    <HeaderWrapper>
      <Logo />
      <Info></Info>
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
const Info = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 2px solid #111;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: #111;
  }
`
