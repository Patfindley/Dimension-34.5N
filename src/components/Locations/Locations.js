
const Locations = ({ locations }) => {
console.log(locations)
if (locations?.length) {
  return locations?.map(loc => {
    return (
      <div className='location-info'>
        <h1>{loc.name}</h1>
        <h3>loc.type</h3>
        <h4>loc.dimension</h4>
        <h4>loc.residents</h4>
      </div>
    )
  })
}
}

export default Locations;

// name
// type
// dimension
// residents
