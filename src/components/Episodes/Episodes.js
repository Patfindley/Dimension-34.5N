import styled from 'styled-components'
import blankRick from '../../assets/blank-rick-icon.png';
import colorRick from '../../assets/fill-rick-icon.png';
import television from '../../assets/television.svg'
import PropTypes from 'prop-types';

const EpisodeInfo = styled.div`
  // border: 1px solid red;
  width: 350px;
  height: 390px;
  z-index: 2;
`
const BlankRickonTv = styled.img`
  position: relative;
  top: 157px;
  right: -169px;
  width: 16%;
  transition: filter .5s;
  z-index: 2;
  opacity: ${({episode}) => ( !episode.isFavorite ?  1 : 0)};
  `
const ColorRickonTv = styled.img`
  position: relative;
  top: 157px;
  right: -225px;
  width: 16%;
  transition: filter .5s;
  z-index: 2;
  opacity: ${({episode}) => ( episode.isFavorite ?  1 : 0)};
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
const Episodes = ({ episodes, favoriteInfo, theBadNews }) => {
  if (episodes.length) {
    return episodes.map(episode => {
      const splitEpisode = episode.episode.split('')
      const episodeNumber = `Season ${splitEpisode[2]}: Episode ${splitEpisode[5]}`
      const nameClass = `color-icon${episode.id}`
      return (
        <EpisodeInfo className='episode-info' key={episode.id} id={episode.id}>
          <ColorRickonTv className={nameClass} src={colorRick} alt='color rick icon' data-cy='color-icon' episode={episode}/>
          <BlankRickonTv className='blank-icon' src={blankRick} alt='blank rick icon' data-cy='blank-icon' episode={episode}
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
  } else {
    theBadNews()
  }
}

Episodes.propTypes = {
  episodes: PropTypes.arrayOf(PropTypes.object),
  favoriteInfo: PropTypes.func,
  theBadNews: PropTypes.func
}

export default Episodes;