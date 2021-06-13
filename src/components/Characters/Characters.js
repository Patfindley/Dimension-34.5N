
const Characters = ({ characters, foundStuff }) => {
  console.log(characters, foundStuff, 'characters')
  if (characters.length) {
    return characters.map(char => {
      return (
        <div className='character-info'>
          <img src={char.image} alt={char.name} />
          <h1>{char.name}</h1>
        </div>
      )
    })
  } else {
    return <h1>go fish</h1>
  }
} 


export default Characters;