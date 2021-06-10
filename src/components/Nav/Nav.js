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
  right: 20px;
  position: relative;
`
const Patty = styled.span`
  display: block;
  height: 4px;
  width: 40px;
  background-color: black;
  border-radius: 10px;
  margin: 5px 20px;;
`
const NavOpen = styled.div`
  // opacity: 0;
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

  const [burgerActive, setBurgerActive] = useState(false)
  const [tl, setTL] = useState(gsap.timeline({paused: true}))
  // const tl = gsap.timeline({paused: true})
  // .to('.top', .2, {y:'-9px'}, 'open')
  // .to('.bottom', .2, {y: '9px'}, 'open')
  // .to('.top', .2, {rotationZ: '90'}, 'rotate')
  // .to('.bottom', .2, {rotationZ: '-90'}, 'rotate')
  // .to('.top', .2,  {x: '30px'}, 'expand')
  // .to('.bottom', .2,  {x: '-30px'}, 'expand')
  // .to('.top', .2, {y: '9px'}, 'close')
  // .to('.bottom', .2, {y: '-9px'}, 'close')
  // .to('.mid', .2, {opacity: 0})

  // const tl = gsap.timeline({paused: true})
  // .to('.top', .5, {y:'-9px', rotationZ: '90', x: '30px', y: '9px'}, 'open')
  // .to('.bottom', .5, {y: '9px', rotationZ: '-90', x: '-30px', y: '-9px'}, 'open')
  // .to('.mid', .2, {opacity: 0})

  // tl.to('.top', .5, {y:'-9px', rotationZ: '90', x: '30px', y: '9px'}, 'open')
  // .to('.bottom', .5, {y: '9px', rotationZ: '-90', x: '-30px', y: '-9px'}, 'open')
  // .to('.mid', .2, {opacity: 0})

  useEffect(() => {
  tl.to('.top', .5, {y:'-9px', rotationZ: '90', x: '30px', y: '9px'}, 'open')
  .to('.bottom', .5, {y: '9px', rotationZ: '-90', x: '-30px', y: '-9px'}, 'open')
  .to('.mid', .2, {opacity: 0})
  }, [])

  useEffect(() => {
    tl.reversed() ? tl.play() : tl.reverse()
  }, [burgerActive])
  
  // const burgerMotion = () => {
  //   console.log(burgerActive)
  //   !burgerActive ? tl.play() : tl.reverse()
  //   setBurgerActive(!burgerActive)
  // }

  

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
          </UL>
        </NavOpen>
      </NavMenu>
  )
}

export default Nav;


/* <Burger id="burger" width="30" className="burger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" onClick={burgerMotion}>
          <path className="top" d="M0 9h30v2H0z"/>
          <line className="middle" x1="0" y1="15" x2="30" y2="15" stroke="black" strokeWidth="2" vectorEffect="non-scaling-stroke"/>
          <path className="bottom" d="M0 19h30v2H0z"/>
        </Burger> */

  //       const Burger = styled.svg`
  // margin-right: 10px;
  // position: absolute;
  // top: 30px;
  // right: 40px;


// const BurgerContainer = styled.div`
//   display: grid;
//   heightL 55px;
//   position: relative;
//   // place-items: center;
//   // align-items: center;
//   justify-content: center;
// `



//   const Top = styled.span`
//   width: 42px;
//   height: 10px;
//   justify-self: end;
//   background: black;
//   display: block;
// `
// const Mid = styled.span`
//   width: 42px;
//   height: 10px;
//   background: black;
//   justify-self: end;
// `
// const Bottom = styled.span`
//   width: 42px;
//   height: 10px;
//   justify-self: end;
//   background: black;
//   display: block;
// `


{/* <BurgerContainer className='burger-container'>
          <Top className='top'></Top>
          <Mid className='mid'></Mid>
          <Bottom className='bottom'></Bottom>
</BurgerContainer> */}


// const burgerMotion = () => {
//   let active = false;
//   console.log(active)
//   const burgerTime = gsap.timeline()
//   .to('.top', .2, {y:'-9px'}, 'open')
//   .to('.bottom', .2, {y: '9px'}, 'open')
//   .to('.top', .2, {rotationZ: '90'}, 'rotate')
//   .to('.bottom', .2, {rotationZ: '-90'}, 'rotate')
//   .to('.top', .2,  {x: '30px'}, 'expand')
//   .to('.bottom', .2,  {x: '-30px'}, 'expand')
//   .to('.top', .2, {y: '9px'}, 'close')
//   .to('.bottom', .2, {y: '-9px'}, 'close')
//   .to('.mid', .2, {opacity: 0})
//   if (!active) {
//     burgerTime.play()
//   } else {
//     burgerTime.reversed()
//   }
//   active = !active
// }