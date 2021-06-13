

const Found = ({ foundChars, foundEpisodes }) => {

  const displayCharacters = () => {
    if (foundChars?.length >= 1) {
     return foundChars?.map(char => {
       console.log(char, 'hi')
        return (
          <div className='character-info' key={char.id}>
            <img src={char.image} alt={char.name} />
            <h1>{char.name}</h1>
          </div>
        )
      })
    }
  }
  const displayEpisodes = () => {
    if (foundEpisodes?.length >= 1) {
      console.log(foundEpisodes.length)
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

  return (
    <div className='display-found display-grid'>
      {displayCharacters()}
      {displayEpisodes()}
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