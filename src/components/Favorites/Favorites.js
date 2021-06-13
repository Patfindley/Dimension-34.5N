import styled from 'styled-components'
import blankRick from '../../assets/blank-rick-icon.png';
import colorRick from '../../assets/fill-rick-icon.png';
import television from '../../assets/television.svg'
import portal from '../../assets/portal.png'
import meeseeks from '../../assets/meeseeks.png'

const BlankRickon = styled.img`
position: relative;
top: 65px;
right: -183px;
width: 16%;
transition: filter .5s;
z-index: 2;
opacity: ${({obj}) => ( !obj.isFavorite ?  1 : 0)};
`
const ColorRickon = styled.img`
position: relative;
top: 65px;
right: -242px;
width: 16%;
transition: filter .5s;
z-index: 2;
opacity: ${({obj}) => ( obj.isFavorite ?  1 : 0)};
`
const BlankRickonTv = styled.img`
  position: relative;
  top: 157px;
  right: -169px;
  width: 16%;
  transition: filter .5s;
  z-index: 2;
  opacity: ${({obj}) => ( !obj.isFavorite ?  1 : 0)};
`
const ColorRickonTv = styled.img`
position: relative;
top: 157px;
right: -225px;
width: 16%;
transition: filter .5s;
z-index: 2;
opacity: ${({obj}) => ( obj.isFavorite ?  1 : 0)};
`
const EpisodeInfo = styled.div`
  // border: 1px solid red;
  width: 350px;
  height: 390px;
  z-index: 2;
`
const Tele = styled.img`
  position: relative;
  width: 343px;
  z-index: 1;
`
const EpInfoContainer = styled.div`
position: relative;
top: -259px;
right: -43px;
text-align: left;
font-family: 'Press Start 2P', cursive;
// border: 1px solid red;
width: 205px;
z-index: 0;
`
const LocationInfo = styled.div`
  // border: 1px solid red;
  width: 350px;
  height: 390px;
  z-index: 2;
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
const Meeseeks = styled.img`
  width: 300px;
  transform: scaleX(-1);
`

const Favorites = ({ favChars, favEpisodes, favLocations, favoriteInfo }) => {

  const displayCharacters = () => {
    if (favChars?.length >= 1) {
     return favChars?.map(char => {
      const nameClass = `color-icon${char.id}`
        return (
          <div className='character-info' key={char.id} id={Number(char.id)}>
          <ColorRickon className={nameClass} src={colorRick} alt='color rick icon' obj={char}/>
          <BlankRickon className='blank-icon' src={blankRick} alt='blank rick icon' obj={char}
            onClick={event => favoriteInfo(event)}/>
          <img src={char.image} alt={char.name} />
          <h1>{char.name}</h1>
        </div>
        )
      })
    }
  }

  const displayEpisodes = () => {
    if (favEpisodes?.length >= 1) {
      return favEpisodes?.map(episode => {
        const splitEpisode = episode.episode.split('')
        const episodeNumber = `Season ${splitEpisode[2]}: Episode ${splitEpisode[5]}`
        const nameClass = `color-icon${episode.id}`
        return (
          <EpisodeInfo className='episode-info' key={episode.id} id={episode.id}>
          <ColorRickonTv className={nameClass} src={colorRick} alt='color rick icon' obj={episode} />
          <BlankRickonTv className='blank-icon' src={blankRick} alt='blank rick icon' obj={episode}
            onClick={event => favoriteInfo(event)}/>
          <Tele className='tele' src={television} alt='retro television' />
          <EpInfoContainer className='ep-info-container'>
            <h3>{episode.name}</h3>
            <h4>{episode.air_date}</h4>
            <h6>{episodeNumber}</h6> 
          </EpInfoContainer>
        </EpisodeInfo>
          )
      })
    }
  }

  const displayLocations = () => {
    if (favLocations?.length) {
      return favLocations?.map(loc => {
        const nameClass = `color-icon${loc.id}`
        return (
          <LocationInfo className='location-info' key={loc.id} id={loc.id}>
        <ColorRickon className={nameClass} src={colorRick} alt='color rick icon' obj={loc}/>
        <BlankRickon className='blank-icon' src={blankRick} alt='blank rick icon' obj={loc}
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
    }
  }

  return (
    <div className='display-found display-grid'>
      {displayCharacters()}
      {displayEpisodes()}
      {displayLocations()}
    </div>
  )
  
}

export default Favorites