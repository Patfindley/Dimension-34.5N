
const Episodes = ({ episodes }) => {
  console.log(episodes)
  if (episodes.length) {
    return episodes.map(episode => {
      let splitEpisode = episode.episode.split('')
      let episodeNumber = `Season ${splitEpisode[2]}: Episode ${splitEpisode[5]}`
      console.log(splitEpisode)
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

export default Episodes;