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
  height: 85px;
  top: 23px;
  position: absolute;
  background-color: #C4EEB3;
  border-radius: 50%;
  box-shadow: 0px 0px 8px 2px rgba(173,211,158,0.88);
  @media only screen and (max-width: 2560px) {
    width: 3%;
  }
  @media only screen and (max-width: 1440px) {
    right: 17px;
    width: 5.5%;
  }
  @media only screen and (max-width: 1024px) {
    right: -22px;
    width: 8%;
  }
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
  transition: box-shadow .5s;
    ${BurgerContainer}:hover & {
      background-color: #A3DCF4;
      box-shadow: 0px 0px 6px 2px rgba(182,227,246,0.49)

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
  z-index: 2;
  @media only screen and (max-width: 2560px) {
    right: -1%;
  }
  @media only screen and (max-width: 1440px) {
    right: 2%;
  }
  @media only screen and (max-width: 1024px) {
    right: 1%;
  }
  `
const UL = styled.ul`
  font-family: 'Press Start 2P', cursive;
  font-size: .7em;
  display: flex;
  flex-direction: column;
  height: 75%;
  justify-content: space-around;
  z-index: 2;
  @media only screen and (max-width: 1024px) {
    font-size: .5em;
  }
`
const LI = styled.li`
  list-style: none;
  transition: text-shadow .5s;
  transition: color .6s;
  z-index: 2;
`
const Linky = styled(Link)`
  text-decoration: none;
  color: black;
  `

const Nav = () => {

  const [burgerActive, setBurgerActive] = useState(false)
  const [tl] = useState(gsap.timeline({paused: true}))
 
  useEffect(() => {
    // let openWidth;
    // if (window.innerWidth > 1080) {
    //       console.log( '> 1080')
    //       openWidth = '10%'
    //     } else if (window.innerWidth < 1080) {
    //       console.log( '< 1080')
    //       openWidth = '12%'
    //     }
  tl.to('.top', .5, {y:'-9px', rotationZ: '90', x: '30px'}, 'open')
  .to('.top', .1, { y: '9px'})
  .to('.bottom', .5, {y: '9px', rotationZ: '-90', x: '-30px'}, 'open')
  .to('.bottom', .1, { y: '-9px'})
  .to('.mid', .2, {opacity: 0})
  .to('.burger-container', .5, {borderRadius: '10px', width: '10%', height: '95%'})
  .to('.top', .3, {rotationZ: '45'})
  .to('.bottom', .3, {x: '30px', rotationZ: '135'})
  .to('.nav-open', .2, {opacity: 1, pointerEvents: 'auto'})
  // console.log(openWidth, 'openwidth')
  }, [tl])

  useEffect(() => {
    tl.reversed() ? tl.play() : tl.reverse()
  }, [burgerActive, tl])

  return (
    <NavMenu>
      <BurgerContainer className='burger-container' onClick={() => setBurgerActive(!burgerActive)}>
          <Patty className='top'></Patty>
          <Patty className='mid'></Patty>
          <Patty className='bottom'></Patty>
      </BurgerContainer>
        <NavOpen className='nav-open'>
          <UL>
           <Linky to='/characters'><LI className='nav-li'>Characters</LI></Linky> 
           <Linky to='/episodes'><LI className='nav-li'>Episodes</LI></Linky>
           <Linky to='/locations'><LI className='nav-li'>Locations</LI></Linky>
           <Linky to='/' className='nav-li'><LI >Home</LI></Linky>
          </UL>
        </NavOpen>
      </NavMenu>
  )
}

export default Nav;
