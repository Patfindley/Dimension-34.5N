import styled from 'styled-components'
import blankRick from '../../assets/blank-rick-icon.png';
import colorRick from '../../assets/fill-rick-icon.png';
import portal from '../../assets/portal.png'
import PropTypes from 'prop-types';

const LocationInfo = styled.div`
  // border: 1px solid red;
  width: 350px;
  height: 390px;
  z-index: 2;
  @media only screen and (max-width: 768px) {
    width: 282px;
  }
`
const BlankRickon = styled.img`
  position: relative;
  top: 65px;
  right: -183px;
  width: 16%;
  transition: filter .5s;
  z-index: 2;
  opacity: ${({loc}) => ( !loc.isFavorite ?  1 : 0)};
  @media only screen and (max-width: 768px) {
    width: 23%;
    right: -138px;
  }
`
const ColorRickon = styled.img`
  position: relative;
  top: 65px;
  right: -242px;
  width: 16%;
  transition: filter .5s;
  z-index: 2;
  opacity: ${({loc}) => ( loc.isFavorite ?  1 : 0)};
  @media only screen and (max-width: 768px) {
    width: 23%;
    right: -203px;
  }
`
const Portal = styled.img`
  position: relative;
  width: 343px;
  z-index: 0;
  @media only screen and (max-width: 768px) {
    width: 285px;
  }
`
const LocInfoContainer = styled.div`
  position: relative;
  top: -259px;
  right: -43px;
  text-align: left;
  font-family: 'Press Start 2P', cursive;
  width: 205px;
  z-index: 0;
  @media only screen and (max-width: 768px) {
    font-size: .9em;
  }
`
const Locations = ({ locations, favoriteInfo, theBadNews }) => {
  console.log(locations)
  if (locations?.length) {
    return locations?.map(loc => {
      const nameClass = `loc-color-icon${loc.id}`
      return (
        <LocationInfo className='location-info' key={loc.id} id={loc.id}>
          <ColorRickon className={nameClass} src={colorRick} alt='color rick icon' data-cy='color-icon' loc={loc} />
          <BlankRickon className='blank-icon' src={blankRick} alt='blank rick icon' data-cy='blank-icon' loc={loc}
            onClick={event => favoriteInfo(event)}/>
          <Portal className='portal' src={portal} alt='a Portal! But where to?' />
          <LocInfoContainer className='loc-info-container'>
            <h2>{loc.name}</h2>
            <h3>{loc.type}</h3>
            <h4>{loc.dimension}</h4>
          </LocInfoContainer>
        </LocationInfo>
      )
    })
  } else {
    theBadNews()
  }
}

Locations.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.shape({
    dimension: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
  })),
  favoriteInfo: PropTypes.func,
  theBadNews: PropTypes.func
}

export default Locations;

