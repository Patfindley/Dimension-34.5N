import styled from 'styled-components'
import blankRick from '../../assets/blank-rick-icon.png';
import colorRick from '../../assets/fill-rick-icon.png';
import portal from '../../assets/portal.png'

const LocationInfo = styled.div`
  // border: 1px solid red;
  width: 350px;
  height: 390px;
  z-index: 2;
`
const BlankRickon = styled.img`
  position: relative;
  top: 65px;
  right: -183px;
  width: 16%;
  transition: filter .5s;
  z-index: 2;
  opacity: ${({loc}) => ( !loc.isFavorite ?  1 : 0)};
`
const ColorRickon = styled.img`
  position: relative;
  top: 65px;
  right: -242px;
  width: 16%;
  transition: filter .5s;
  z-index: 2;
  opacity: ${({loc}) => ( loc.isFavorite ?  1 : 0)};
`
const Portal = styled.img`
  position: relative;
  width: 343px;
  z-index: 0;
`
const LocInfoContainer = styled.div`
  position: relative;
  top: -259px;
  right: -43px;
  text-align: left;
  font-family: 'Press Start 2P', cursive;
  // border: 1px solid red;
  width: 205px;
  z-index: 0;
`
const Locations = ({ locations, favoriteInfo, theBadNews }) => {
if (locations?.length) {
  return locations?.map(loc => {
    const nameClass = `color-icon${loc.id}`
    return (
      <LocationInfo className='location-info' key={loc.id} id={loc.id}>
        <ColorRickon className={nameClass} src={colorRick} alt='color rick icon' loc={loc} />
        <BlankRickon className='blank-icon' src={blankRick} alt='blank rick icon' loc={loc}
          onClick={event => favoriteInfo(event)}/>
        <Portal className='portal' src={portal} alt='a Portal! But where to?' />
        <LocInfoContainer className='loc-info-container'>
          <h2>{loc.name}</h2>
          <h3>{loc.type}</h3>
          <h4>{loc.dimension}</h4>
          {/* <h4>{loc.residents}</h4> */}
        </LocInfoContainer>
      </LocationInfo>
    )
  })
} else {
  theBadNews()
}
}

export default Locations;

