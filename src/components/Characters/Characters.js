import styled from 'styled-components'
import blankRick from './blank-rick-icon.png';

const Rickon = styled.img`
  position: relative;
  top: -239px;
  right: -302px;
  width: 16%;
`

const Characters = ({ characters, foundStuff }) => {
  console.log(characters, foundStuff, 'characters')
  if (characters?.length) {
    return characters?.map(char => {
      return (
        <div className='character-info' key={char.id}>
          <Rickon src={blankRick} alt='blank rick icon' />
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