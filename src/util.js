const rickApi = 'https://rickandmortyapi.com/api'

export const portalGun = () => {

  const characterRetreiverRay = fetch(`${rickApi}/character`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error ('Morty! I need your help on a buuuurpp uh adventure, we have to find what dimension the character data got off to!')
      }
    })
  

  const episodeRetreiverRay = fetch(`${rickApi}/episode`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error ('Morty! I need your help on a buuuurpp uh adventure, we have to find what dimension the episode data got off to!')
      }
    })

  const locationRetreiverRay = fetch(`${rickApi}/location`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error ('Morty! I need your help on a buuuurpp uh adventure, we have to find what location the episode data got off to!')
      }
    })

  return Promise.all([characterRetreiverRay, episodeRetreiverRay, locationRetreiverRay])
  .then(data => {
    let allData = {};
    allData.characterRetreiverRay = data[0];
    allData.episodeRetreiverRay = data[1];
    allData.locationRetreiverRay = data[2];
    return allData
  })

}
