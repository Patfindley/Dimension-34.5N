import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { portalGun } from '../../util'
import Nav from '../Nav/Nav'
import SearchBar from '../SearchBar/SearchBar'
import Characters from '../Characters/Characters'
import './App.css';

const App = () => {
  const [characters, setCharacters] = useState('')
  const [episodes, setEpisodes] = useState('')
  const [locations, setLocations] = useState('')
  const [foundStuff, setFoundStuff] = useState('')
  const [error, setError] = useState('')

   useEffect(() => {
     portalGun()
    .then(data => {
      setCharacters(data.characterRetreiverRay.results);
      setEpisodes(data.episodeRetreiverRay.results);
      setLocations(data.locationRetreiverRay.results);
    })
    .catch(error => setError({error}))
  }, [])

  const theBadNews = () => {
    <article className="display-bad-news">
        <h3>{error.message}</h3>
          <Link to='/'>
            <h4 className="back-to-home" onClick={() => this.setError({error: ''})}>
              Back To Dimension 34.5 N
            </h4>
          </Link>
      </article>
  }
  // console.log('characters>>',characters,'episodes>>', episodes, 'locations>>', locations, 'found stuff>>', foundStuff)
  return (
    <div className='site-container'>
      <header>
        <Nav />
      </header>
      <SearchBar />
      <Switch>
        <Route exact path='/characters'
        render={() => {
          !error ?
          <Characters
          characters={characters}
          foundStuff={foundStuff}
          /> : theBadNews()
        }} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;
