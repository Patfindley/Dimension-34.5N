import React, { useState } from 'react';


const SearchBar = () => {
  const [search, setSearch] = useState('');
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