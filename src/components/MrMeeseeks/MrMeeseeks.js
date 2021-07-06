import { gsap } from 'gsap/gsap-core'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import meeseeks from '../../assets/meeseeks.png'


const Meeseeks = styled.img`
  width: 300px;
  transform: scaleX(-1);
  @media only screen and (max-width: 425px) {
    width: 200px;
}
`
const SpeechBubble = styled.div`
  background-color: #f8f8f8;
  border: 1px solid #c8c8c8;
  border-radius: 20px;
  width: 180px;
  height: 60px;
  text-align: center;
  padding: 20px;
  position: relative;
  bottom: 500px;
  left: 176px;
  opacity: .8;
  z-index: 2;
  @media only screen and (max-width: 425px) {
    width: 110px;
    font-size: .9em;
    left: 150px;
}
`
const Arrow = styled.div`
border-style: solid;
position: absolute;
border-color: #c8c8c8 transparent transparent transparent;
border-width: 8px 8px 0px 8px;
bottom: -8px;
`
const BubbleTextOne = styled.span`
`
const BubbleTextTwo = styled.span`
  visibility: hidden;
  position: relative;
  top: -54px;
`

const MrMeeseeks = () => {

  const [tl] = useState(gsap.timeline({paused: false, repeat: '-1'}))

  useEffect(() => {
    tl.to('.bubble-text-one', 0, {visibility: 'hidden'})
    .to('.bubble-text-two', 3.5, {visibility: 'visible'})
    .to('.bubble-text-two', 0, {visibility: 'hidden'})
    .to('.bubble-text-one', 3.5, {visibility: 'visible'})
  }, [tl])

  return (
    <div >
      <Meeseeks src={meeseeks} alt='mr. meeseeks' className='mr-meeseeks' />
      <SpeechBubble className='speech-bubble'>
        <BubbleTextOne className='bubble-text-one' >Existence is pain to a Meeseeks, And we will do anything to alleviate that pain!</BubbleTextOne>
        <BubbleTextTwo className='bubble-text-two' >End my agony and let me help you find something to learn!</BubbleTextTwo>
        <Arrow className='arrow'></Arrow>
      </SpeechBubble>
    </div>
  )
}

export default MrMeeseeks;