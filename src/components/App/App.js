import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { portalGun } from '../../util'
import Nav from '../Nav/Nav'
import SearchBar from '../SearchBar/SearchBar'
import Found from '../Found/Found'
import Characters from '../Characters/Characters'
import Episodes from '../Episodes/Episodes'
import './App.css';

const App = () => {
  const [characters, setCharacters] = useState('')
  const [foundChars, setFoundChars] = useState('')
  const [episodes, setEpisodes] = useState('')
  const [foundEpisodes, setFoundEpisodes] = useState('')
  const [locations, setLocations] = useState('')
  const [searchResults, setSearchResults] = useState('')
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

  useEffect(() => {
    if (characters.length) {
    const charFind = characters.filter(char => {
      return char.name.toLowerCase().includes(searchResults) 
  })
    setFoundChars(charFind)
  }
  if (episodes.length) {
    const epFind = episodes.filter(ep => {
      return ep.name.toLowerCase().includes(searchResults)
    })
  }
  }, [searchResults])


  const pullSearch = (search) => {
    setSearchResults(search)
  }

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

  return (
    <div className='site-container'>
      <header>
        <Nav />
      </header>
      <Switch>
        <Route exact path='/'
          render={() => (
            !error ?
            <>
            <SearchBar 
            pullSearch={pullSearch}
            />
            <div className='display-grid'>
            <Found 
            foundChars={foundChars}
            foundEpisodes={foundEpisodes}
            />
            </div>
            </> : theBadNews()
          )} />
        <Route exact path='/characters'
        render={() => ( 
            !error ?
            <div className='display-grid'>
          <Characters
          characters={characters}
          /> 
          </div>: theBadNews()
          )} />
          <Route 
            render={() => (
              !error ? 
              <div className='display-grid'>
                <Episodes 
                  episodes={episodes}
                />
              </div> : theBadNews()
            )} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;
