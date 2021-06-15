import React, { useRef } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const Input = styled.input`
  width: 175px;
  height: 20px;
`

const SearchBar = ({ pullSearch }) => {
  const searchValue = useRef()
 return (
   <div>
     <form>
       <Input 
        type='text'
        name='search'
        placeholder='Buuurrpp learn something...'
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