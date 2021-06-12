import styled from 'styled-components'
import blankRick from '../../assets/blank-rick-icon.png';
import colorRick from '../../assets/fill-rick-icon.png';
import portal from '../../assets/portal.png'

const Portal = styled.img``

const BlankRickon = styled.img`
  visibility: visible;
  position: relative;
  top: 65px;
  right: -243px;
  width: 16%;
  opacity: 1;
  transition: filter .5s;
`
const ColorRickon = styled.img`
  visibility: hidden;
  opacity: 0;
  position: relative;
  top: 65px;
  right: -185px;
  width: 16%;
  opacity: 1;
  transition: filter .5s;
`

const Locations = ({ locations, favoriteInfo }) => {
if (locations?.length) {
  return locations?.map(loc => {
    return (
      <div className='location-info' key={loc.id} id={loc.id}>
        <BlankRickon className='blank-icon' src={blankRick} alt='blank rick icon' 
          onClick={event => favoriteInfo(event)}/>
          <ColorRickon className='color-icon' src={colorRick} alt='color rick icon' />
          <Portal className='portal' src={portal} alt='a Portal! But where to?' />
        <h1>{loc.name}</h1>
        <h3>loc.type</h3>
        <h4>loc.dimension</h4>
        <h4>loc.residents</h4>
      </div>
    )
  })
}
}

export default Locations;

// name
// type
// dimension
// residents
