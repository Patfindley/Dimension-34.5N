import { Link } from 'react-router-dom';
import { gsap } from "gsap"
import styled from 'styled-components'

const NavMenu = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 86px;
  margin-right: 10px;
`
const Burger = styled.svg`
  margin-right: 10px;
  position: absolute;
  top: 30px;
  right: 40px;
`
const NavOpen = styled.div`
  opacity: 0;
  pointer-events: none;
  height: 80%;
  width: 10%;
  position: absolute;
  top: 86px;
  background-color: white;
  `
  const UL = styled.ul`
  display: flex;
  flex-direction: column;
  height: 75%;
  justify-content: space-evenly;
`
const LI = styled.li`
  list-style: none;
`
const Linky = styled(Link)`
  text-decoration: none;
  color: #A3DCF4;
`

const Nav = () => {
  return (
    <NavMenu>
        <Burger id="burger" width="30" className="burger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
          <path className="top" d="M0 9h30v2H0z"/>
          <line className="mid" x1="0" y1="15" x2="30" y2="15" stroke="black" strokeWidth="2" vectorEffect="non-scaling-stroke"/>
          <path className="bot" d="M0 19h30v2H0z"/>
        </Burger>
        <NavOpen>
          <UL>
           <Linky to='/characters'><LI>Characters</LI></Linky> 
           <Linky to='/episodes'><LI>Episodes</LI></Linky>
           <Linky to='/locations'><LI>Locations</LI></Linky>
          </UL>
        </NavOpen>
      </NavMenu>
  )
}

export default Nav;