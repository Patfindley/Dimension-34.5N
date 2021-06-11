import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from "gsap"
import styled from 'styled-components'

const NavMenu = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 86px;
  margin-right: 10px;
`
const BurgerContainer = styled.div`
  // display: grid;
  height: 85px;
  top: 23px;
  // right: 2%;
  position: absolute;
  background-color: #C4EEB3;
  // background-color: #F2C9D9; //dark pink
  border-radius: 50%;
  box-shadow: 0px 0px 8px 2px rgba(173,211,158,0.88)
`
const Patty = styled.span`
  display: block;
  position: relative;
  top: 23px;
  height: 4px;
  width: 40px;
  background-color: #8ADD69;
  border-radius: 10px;
  margin: 5px 20px;
  transition: background-color .5s;
    ${BurgerContainer}:hover & {
      background-color: #A3DCF4;
    }
`
const NavOpen = styled.div`
  opacity: 0;
  pointer-events: none;
  height: 80%;
  width: 10%;
  right: 2%;
  position: absolute;
  top: 86px;
  // background-color: #C4EEB3;
  // box-shadow: 0px 4px 8px 2px rgba(173,211,158,0.88)
  `
  const UL = styled.ul`
  font-family: 'Press Start 2P', cursive;
  font-size: .7em;
  display: flex;
  flex-direction: column;
  height: 75%;
  justify-content: space-around;
`
const LI = styled.li`
  list-style: none;
`
const Linky = styled(Link)`
  text-decoration: none;
  // color: #A3DCF4;
  color: black;
  `

const Nav = () => {

  const [burgerActive, setBurgerActive] = useState(false)
  const [tl] = useState(gsap.timeline({paused: true}))

  useEffect(() => {
  tl.to('.top', .5, {y:'-9px', rotationZ: '90', x: '30px'}, 'open')
  .to('.top', .1, { y: '9px'})
  .to('.bottom', .5, {y: '9px', rotationZ: '-90', x: '-30px'}, 'open')
  .to('.bottom', .1, { y: '-9px'})
  .to('.mid', .2, {opacity: 0})
  .to('.burger-container', .5, {borderRadius: '10px', width: '10%', height: '95%'})
  .to('.top', .3, {rotationZ: '45'})
  .to('.bottom', .3, {x: '30px', rotationZ: '135'})
  .to('.nav-open', .2, {opacity: 1, pointerEvents: 'auto'})
  }, [])

  useEffect(() => {
    tl.reversed() ? tl.play() : tl.reverse()
  }, [burgerActive])

  return (
    <NavMenu>
      <BurgerContainer className='burger-container' onClick={() => setBurgerActive(!burgerActive)}>
          <Patty className='top'></Patty>
          <Patty className='mid'></Patty>
          <Patty className='bottom'></Patty>
      </BurgerContainer>
        <NavOpen className='nav-open'>
          <UL>
           <Linky to='/characters'><LI>Characters</LI></Linky> 
           <Linky to='/episodes'><LI>Episodes</LI></Linky>
           <Linky to='/locations'><LI>Locations</LI></Linky>
           <Linky to='/'><LI>Home</LI></Linky>
          </UL>
        </NavOpen>
      </NavMenu>
  )
}

export default Nav;
