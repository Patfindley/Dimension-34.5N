import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { gsap } from "gsap"
import { portalGun } from '../../util'
import Nav from '../Nav/Nav'
import SearchBar from '../SearchBar/SearchBar'
import Characters from '../Characters/Characters'
import Episodes from '../Episodes/Episodes'
import Locations from '../Locations/Locations'
import MrMeeseeks from '../MrMeeseeks/MrMeeseeks'
import './App.css';

const App = () => {
  const [characters, setCharacters] = useState([])
  const [foundChars, setFoundChars] = useState([])
  const [favChars, setFavChars] = useState([])
  const [episodes, setEpisodes] = useState([])
  const [foundEpisodes, setFoundEpisodes] = useState([])
  const [favEpisodes, setFavEpisodes] = useState([])
  const [locations, setLocations] = useState([])
  const [foundLocations, setFoundLocations] = useState([])
  const [favLocations, setFavLocations] = useState([])
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
    if (searchResults?.length > 1) {
      if (characters?.length) {
        const charFind = characters.filter(char => {
          return char.name.toLowerCase().includes(searchResults) 
      })
    setFoundChars(charFind)
  }
    if (episodes?.length) {
      const epFind = episodes.filter(ep => {
        return ep.name.toLowerCase().includes(searchResults)
      })
    setFoundEpisodes(epFind)
  }
    if (locations?.length) {
      const locFind = locations.filter(loc => {
        return loc.name.toLowerCase().includes(searchResults)
      })
    setFoundLocations(locFind)
  }
}
  }, [searchResults, characters, episodes, locations])

  const pullSearch = (search) => {
    setSearchResults(search.toLowerCase())
  }
  
  const favoriteInfo = (e) => {
    if (e.target.closest('.character-info')) {
      findTarget(e, characters, setFavChars, favChars, 'char')
    }
    if (e.target.closest('.episode-info')) {
      findTarget(e, episodes, setFavEpisodes, favEpisodes, 'ep')
    }
    if (e.target.closest('.location-info')) {
      findTarget(e, locations, setFavLocations, favLocations, 'loc')
    }
  }

  const findTarget = (e, data, setter, state, type) => {
    const targetDiv = e.target.closest('div').id
    const targetBlankIcon = e.target.closest('.blank-icon')
    const targetToFav = data.find(targ => targ.id === Number(targetDiv))
    if (!targetToFav.isFavorite) {
    targetToFav.isFavorite = true
    setter([...state, targetToFav])
    favAnimation(targetBlankIcon, targetDiv, type)
    } else {
    targetToFav.isFavorite = false
    const removedTarget = state.filter(targ => targ.id !== Number(targetDiv))
    setter(removedTarget)
    unfavAnimation(targetBlankIcon, targetDiv, type)
    }
  }

  const favAnimation = (target, targetDiv, type) => {
    gsap.to(target, .5, {opacity: 0, rotateZ: 720})
    gsap.to(`.${type}-color-icon${targetDiv}`, .5, {opacity: 1, rotateZ: 720})
  }

  const unfavAnimation = (target, targetDiv, type) => {
    gsap.to(target, .5, {opacity: 1, rotateZ: '-720'})
    gsap.to(`.${type}-color-icon${targetDiv}`, .5, {opacity: 0, rotateZ: '-720'})
  }

  const theBadNews = () => {
    return (
    <article className="display-bad-news">
      <h3>{error.message}</h3>
      <Link to='/'>
        <h4 className="back-to-home" onClick={() => this.setError({error: ''})}>
          Back To Dimension 34.5 N
        </h4>
      </Link>
    </article>
    )
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
              {favChars.length > 0 && 
                <Characters
                characters={favChars}
                favoriteInfo={favoriteInfo}
                theBadNews={theBadNews}
                /> 
                }
                {favEpisodes.length > 0 && 
                  <Episodes 
                  episodes={favEpisodes}
                  favoriteInfo={favoriteInfo}
                  theBadNews={theBadNews}
                />
                }
                {favLocations.length > 0 && 
                  <Locations 
                  locations={favLocations}
                  favoriteInfo={favoriteInfo}
                  theBadNews={theBadNews}
                />
                }
                </div>
                <div className='display-grid'>
              {foundChars.length > 0 && 
                <Characters
                characters={foundChars}
                favoriteInfo={favoriteInfo}
                theBadNews={theBadNews}
                /> 
                }
                {foundEpisodes.length > 0 && 
                  <Episodes 
                  episodes={foundEpisodes}
                  favoriteInfo={favoriteInfo}
                  theBadNews={theBadNews}
                />
                }
                {foundLocations.length > 0 && 
                  <Locations 
                  locations={foundLocations}
                  favoriteInfo={favoriteInfo}
                  theBadNews={theBadNews}
                />
                }
                <MrMeeseeks />
                </div>
            </> : theBadNews()
          )} />
        <Route exact path='/characters'
        render={() => ( 
            !error ?
            <div className='display-grid'>
              <Characters
              characters={characters}
              favoriteInfo={favoriteInfo}
              theBadNews={theBadNews}
              /> 
          </div> : theBadNews()
          )} />
          <Route exact path='/episodes'
            render={() => (
              !error ? 
              <div className='display-grid'>
                <Episodes 
                  episodes={episodes}
                  favoriteInfo={favoriteInfo}
                  theBadNews={theBadNews}
                />
              </div> : theBadNews()
            )} />
          <Route exact path='/locations' 
            render={() => (
              !error ?
              <div className='display-grid'>
                <Locations 
                  locations={locations}
                  favoriteInfo={favoriteInfo}
                  theBadNews={theBadNews}
                />
              </div> : theBadNews()
            )}
          />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;
