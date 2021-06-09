import React, { useState, useEffect } from 'react';
import { portalGun } from '../../util'
import './App';

const App = () => {
  const [characters, setCharacters] = useState('')
  const [episodes, setEpisodes] = useState('')
  const [locations, setLocations] = useState('')

   useEffect(() => {
     portalGun()
    .then(data => {
      setCharacters(data.characterRetreiverRay.results);
      setEpisodes(data.episodeRetreiverRay.results);
      setLocations(data.locationRetreiverRay.results);
    })
  }, [])

  console.log(characters, episodes, locations)
  return (
    <h1>Hi!</h1>
  );
}

export default App;
