import React, { useRef } from 'react';
import PropTypes from 'prop-types';


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

SearchBar.propTypes = {
  pullSearch: PropTypes.func
}

export default SearchBar;