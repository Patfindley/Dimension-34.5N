import styled from 'styled-components'
import blankRick from '../../assets/blank-rick-icon.png';
import colorRick from '../../assets/fill-rick-icon.png';
import PropTypes from 'prop-types';

const BlankRickon = styled.img`
position: relative;
top: 65px;
right: -183px;
width: 16%;
transition: filter .5s;
opacity: ${({char}) => ( !char.isFavorite ?  1 : 0)};
@media only screen and (max-width: 2560px) {
  top: -212px;
  left: 300px;
}
`
const ColorRickon = styled.img`
position: relative;
top: 65px;
right: -242px;
width: 16%;
transition: filter .5s;
opacity: ${({char}) => ( char.isFavorite ?  1 : 0)};
@media only screen and (max-width: 2560px) {
  top: -212px;
  left: 380px;
}
`

const Characters = ({ characters, favoriteInfo, theBadNews }) => {
  if (characters?.length) {
    return characters?.map(char => {
      const nameClass = `color-icon${char.id}`
      return (
        <div className='character-info' key={char.id} id={Number(char.id)}>
          <ColorRickon className={nameClass} src={colorRick} alt='color rick icon' data-cy='color-icon' char={char}/>
          <BlankRickon className='blank-icon' src={blankRick} alt='blank rick icon' data-cy='blank-icon' char={char}
            onClick={event => favoriteInfo(event)}/>
          <img src={char.image} alt={char.name} />
          <h1>{char.name}</h1>
        </div>
      )
    })
  } else {
    theBadNews()
  }
} 

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object),
  favoriteInfo: PropTypes.func,
  theBadNews: PropTypes.func
}


export default Characters;