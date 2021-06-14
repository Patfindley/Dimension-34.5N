const rickApi = 'https://rickandmortyapi.com/api'

const ApiFetch = (endpoint) => {
  return fetch(`${rickApi}/${endpoint}`, {mode: 'cors'})
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error ('Morty! I need your help on a buuuurpp uh adventure, we have to find what dimension the character data got off to!')
    }
  })
}

export const portalGun = () => {
  const characterRetreiverRay = ApiFetch('character')
  const episodeRetreiverRay = ApiFetch('episode')
  const locationRetreiverRay = ApiFetch('location')

  return Promise.all([characterRetreiverRay, episodeRetreiverRay, locationRetreiverRay])
  .then(data => {
    let allData = {};
    allData.characterRetreiverRay = data[0];
    allData.episodeRetreiverRay = data[1];
    allData.locationRetreiverRay = data[2];
    return allData
  })

}

export const cleanDirtychar = (dirtyData) => {
  let cleanData = []
  if (!dirtyData.length) {
    return 
  } else {
    dirtyData.forEach(char => {
      delete char.created;
      delete char.episode;
      delete char.type;
      delete char.url;
      cleanData.push(char)
    })
  }
  return cleanData;
}

export const cleanDirtyep = (dirtyData) => {
  let cleanData = []
  if (!dirtyData.length) {
    return 
  } else {
    dirtyData.forEach(ep => {
      delete ep.created;
      delete ep.url;
      cleanData.push(ep)
    })
  }
  return cleanData;
}