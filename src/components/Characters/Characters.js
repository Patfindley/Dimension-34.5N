import styled from 'styled-components'
import blankRick from '../../assets/blank-rick-icon.png';
import colorRick from '../../assets/fill-rick-icon.png';

const BlankRickon = styled.img`
  opacity: 1;
  position: relative;
  top: 65px;
  right: -183px;
  width: 16%;
  transition: filter .5s;
`
const ColorRickon = styled.img`
  opacity: 0;
  position: relative;
  top: 65px;
  right: -242px;
  width: 16%;
  transition: filter .5s;
`

const Characters = ({ characters, favoriteInfo }) => {
  if (characters?.length) {
    return characters?.map(char => {
      const nameClass = `color-icon${char.id}`
      return (
        <div className='character-info' key={char.id} id={Number(char.id)}>
          <ColorRickon className={nameClass} src={colorRick} alt='color rick icon' />
          <BlankRickon className='blank-icon' src={blankRick} alt='blank rick icon' 
            onClick={event => favoriteInfo(event)}/>
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