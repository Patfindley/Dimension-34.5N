import React, { useRef } from 'react';


const SearchBar = ({ pullSearch }) => {
  const searchValue = useRef()
  
 return (
   <div>
     <form>
       <input 
        type='text'
        name='search'
        placeholder='Buuurrpp learn something'
        ref={searchValue}
        onChange={() => pullSearch(searchValue.current.value)}
       />
     </form>
   </div>
 ) 
}

export default SearchBar;