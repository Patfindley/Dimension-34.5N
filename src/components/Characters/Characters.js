import styled from 'styled-components'
// import blankRick from './blank-rick-icon.png';
import blankRick from '../../assets/blank-rick-icon.png';
// import colorRick from './fill-rick-icon.png';
import colorRick from '../../assets/fill-rick-icon.png';

const BlankRickon = styled.img`
  visibility: visible;
  position: relative;
  top: -418px;
  right: -243px;
  width: 16%;
  opacity: 1;
  transition: filter .5s;
`
const ColorRickon = styled.img`
  visibility: hidden;
  opacity: 0;
  position: relative;
  top: -418px;
  right: -185px;
  width: 16%;
  opacity: 1;
  transition: filter .5s;
`

const Characters = ({ characters, favoriteInfo }) => {

  // const handleClick = (e) => {
  //   favoriteInfo(e)
  // }

  if (characters?.length) {
    return characters?.map(char => {
      // console.log(char.id)
      return (
        <div className='character-info' key={char.id} id={Number(char.id)}>
          <BlankRickon className='blank-icon' src={blankRick} alt='blank rick icon' 
          onClick={event => favoriteInfo(event)}/>
          <ColorRickon className='color-icon' src={colorRick} alt='color rick icon' />
          <img src={char.image} alt={char.name} />
          <h1>{char.name}</h1>
        </div>
      )
    })
  } else {
    return <h1>go fish</h1>
  }
} 


export default Characters;