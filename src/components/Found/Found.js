

const Found = ({ foundChars, foundEpisodes }) => {

  if (foundChars.length >= 1) {
   return foundChars.map(found => {
      return (
        <div className='character-info'>
          <img src={found.image} alt={found.name} />
          <h1>{found.name}</h1>
        </div>
      )
    })
  } 
  if (foundEpisodes.length >= 1) {
    return foundEpisodes.map(episode => {
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
  else {
    return (
      <h1>nada</h1>
    )
  }
}

export default Found;