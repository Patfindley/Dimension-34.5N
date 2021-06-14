import styled from 'styled-components'
import meeseeks from '../../assets/meeseeks.png'


const Meeseeks = styled.img`
width: 300px;
transform: scaleX(-1);
`
const SpeechBubble = styled.div`
background-color: #f8f8f8;
border: 1px solid #c8c8c8;
border-radius: 20px;
width: 180px;
height: 60px;
text-align: center;
padding: 20px;
position: absolute;
top: 82px;
left: 198px;
opacity: .8;
`
const Arrow = styled.div`
border-style: solid;
position: absolute;
border-color: #c8c8c8 transparent transparent transparent;
border-width: 8px 8px 0px 8px;
bottom: -8px;
`
const BubbleText = styled.span`
`

const MrMeeseeks = () => {

  return (
    <div >
      <Meeseeks src={meeseeks} alt='mr. meeseeks' className='mr-meeseeks' />
      <SpeechBubble className='speech-bubble'>
        <BubbleText className='bubble-text' >End my agony and let me help you find something to learn!</BubbleText>
        <Arrow className='arrow'></Arrow>
      </SpeechBubble>
    </div>
  )
}

export default MrMeeseeks;