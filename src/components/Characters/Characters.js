import styled from 'styled-components'
import blankRick from '../../assets/blank-rick-icon.png';
import colorRick from '../../assets/fill-rick-icon.png';
import PropTypes from 'prop-types';
const CharacterInfo = styled.div`
text-align: center;
height: 529px;
`
const BlankRickon = styled.img`
position: relative;
top: 65px;
right: -94px;
width: 16%;
transition: filter .5s;
opacity: ${({char}) => ( !char.isFavorite ?  1 : 0)};
// @media only screen and (max-width: 2560px) {
//   top: -212px;
//   left: 300px;
// }
@media only screen and (max-width: 1440px) {
  top: 59px;
  left: 93px;
}
@media only screen and (max-width: 1024px) {
  top: 62px;
  left: 93px;
}
@media only screen and (max-width: 768px) {
  top: 65px;
  left: 67px;
  width: 23%;
}
`
const ColorRickon = styled.img`
position: relative;
top: 65px;
right: -151px;
width: 16%;
transition: filter .5s;
opacity: ${({char}) => ( char.isFavorite ?  1 : 0)};
// @media only screen and (max-width: 2560px) {
//   top: -212px;
//   left: 380px;
// }
@media only screen and (max-width: 1440px) {
  top: 59px;
  left: 145px;
}
@media only screen and (max-width: 1024px) {
  top: 62px;
  left: 149px;
}
@media only screen and (max-width: 768px) {
  top: 65px;
  left: 125px; 
  width: 23%;
}
`
const CharImage = styled.img`
align-self: center;
@media only screen and (max-width: 768px) {
  width: 250px;
}
`
const CharacterDetails = styled.div`
  position: relative;
  bottom: 46px;
  text-align: center;
  font-family: 'Press Start 2P', cursive;
  font-size: .8em;
`
const CharName = styled.h1`
text-align: center;
`

const Characters = ({ characters, favoriteInfo, theBadNews }) => {
  if (characters?.length) {
    return characters?.map(char => {
      const nameClass = `char-color-icon${char.id}`
      return (
        <CharacterInfo className='character-info' key={char.id} id={Number(char.id)}>
          <ColorRickon className={nameClass} src={colorRick} alt='color rick icon' data-cy='color-icon' char={char}/>
          <BlankRickon className='blank-icon' src={blankRick} alt='blank rick icon' data-cy='blank-icon' char={char}
            onClick={event => favoriteInfo(event)}/>
            <CharImage src={char.image} alt={char.name} />
          <CharacterDetails className='character-details'>
            <CharName>{char.name}</CharName>
            <h3>{char.species}</h3>
            <h5>{char.gender}</h5>
            <h4>Location: {char.location.name}</h4>
            <h4>Origin: {char.origin.name}</h4>
            <h5>{char.status}</h5>
          </CharacterDetails>
        </CharacterInfo>
      )
    })
  } else {
    theBadNews()
  }
} 

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    created: PropTypes.string,
    episode: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string,
    isFavorite: PropTypes.boolean,
    location: PropTypes.object,
    name: PropTypes.string,
    origin: PropTypes.object,
    species: PropTypes.string,
    status: PropTypes.string
  })),
  favoriteInfo: PropTypes.func,
  theBadNews: PropTypes.func
}


export default Characters;