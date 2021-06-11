import React, { useEffect, useState } from 'react';


const SearchBar = ({ pullSearch }) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    pullSearch(search)
  }, [search])

 return (
   <div>
     <form>
       <input 
        type='text'
        name='search'
        placeholder='Buuurrpp learn something'
        value={search}
        onChange={event => setSearch(event.target.value)}
       />
     </form>
   </div>
 ) 
}

export default SearchBar;