import styled from 'styled-components'
import blankRick from '../../assets/blank-rick-icon.png';
import colorRick from '../../assets/fill-rick-icon.png';

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

const Episodes = ({ episodes, favoriteInfo }) => {
  if (episodes?.length) {
    return episodes?.map(episode => {
      let splitEpisode = episode.episode.split('')
      let episodeNumber = `Season ${splitEpisode[2]}: Episode ${splitEpisode[5]}`
      return (
        <div className='episode-info' key={episode.id} id={episode.id}>
          <BlankRickon className='blank-icon' src={blankRick} alt='blank rick icon' 
          onClick={event => favoriteInfo(event)}/>
          <ColorRickon className='color-icon' src={colorRick} alt='color rick icon' />
          <h1>{episode.name}</h1>
          <h3>{episode.air_date}</h3>
          <h3>{episodeNumber}</h3> 
        </div>
        )
    })
  }
}

export default Episodes;