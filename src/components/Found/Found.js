import styled from 'styled-components'
import blankRick from '../../assets/blank-rick-icon.png';
import colorRick from '../../assets/fill-rick-icon.png';

const BlankRickon = styled.img`
  visibility: visible;
  position: relative;
  top: 66px;
  left: 243px;
  width: 16%;
  opacity: 1;
  transition: filter .5s;
`
const ColorRickon = styled.img`
  visibility: hidden;
  opacity: 0;
  position: relative;
  top: 66px;
  right: -185px;
  width: 16%;
  opacity: 1;
  transition: filter .5s;
`

const Found = ({ foundChars, foundEpisodes, foundLocations, favoriteInfo }) => {

  const displayCharacters = () => {
    if (foundChars?.length >= 1) {
     return foundChars?.map(char => {
       console.log(char, 'hi')
        return (
          <div className='character-info' key={char.id}>
            <BlankRickon className='blank-icon' src={blankRick} alt='blank rick icon' 
              onClick={event => favoriteInfo(event)}/>
            <ColorRickon className='color-icon' src={colorRick} alt='color rick icon' />
            <img src={char.image} alt={char.name} />
            <h1>{char.name}</h1>
          </div>
        )
      })
    }
  }

  const displayEpisodes = () => {
    if (foundEpisodes?.length >= 1) {
      return foundEpisodes?.map(episode => {
        let splitEpisode = episode.episode.split('')
        let episodeNumber = `Season ${splitEpisode[2]}: Episode ${splitEpisode[5]}`
        return (
          <div className='episode-info' key={episode.id}>
            <h1>{episode.name}</h1>
            <h3>{episode.air_date}</h3>
            <h3>{episodeNumber}</h3> 
          </div>
          )
      })
    }
  }

  const displayLocations = () => {
    if (foundLocations?.length) {
      return foundLocations?.map(loc => {
        console.log(loc)

        return (
          <div className='location-info' key={loc.id}>
            <h1>{loc.name}</h1>
            <h3>loc.type</h3>
            <h4>loc.dimension</h4>
            <h4>loc.residents</h4>
          </div>
        )
      })
    }
  }

  return (
    <div className='display-found display-grid'>
      {displayCharacters()}
      {displayEpisodes()}
      {displayLocations()}
      <h1>nada</h1>
    </div>
  )
}

export default Found;


// if (foundChars?.length >= 1) {
//   return foundChars?.map(char => {
//      return (
//        <div className='character-info' key={char.id}>
//          <img src={char.image} alt={char.name} />
//          <h1>{char.name}</h1>
//        </div>
//      )
//    })
//  } 
//  if (foundEpisodes?.length >= 1) {
//    console.log(foundEpisodes.length)
//    return foundEpisodes?.map(episode => {
//      let splitEpisode = episode.episode.split('')
//      let episodeNumber = `Season ${splitEpisode[2]}: Episode ${splitEpisode[5]}`
//      return (
//        <div className='episode-info' key={episode.id}>
//          <h1>{episode.name}</h1>
//          <h3>{episode.air_date}</h3>
//          <h3>{episodeNumber}</h3> 
//        </div>
//        )
//    })
//  }
//  else {
//    return (
//      <h1>nada</h1>
//    )
//  }