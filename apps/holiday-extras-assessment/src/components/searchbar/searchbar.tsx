
import { useContext, useState } from 'react';

import { FlickrContext } from '../../context/flickr';
import { SearchIcon } from '../icons';
import { Wrapper, Input, Button } from './searchbar.styled';

function Searchbar() {
  const [value, setValue] = useState('');
  const { searchForPhotos } = useContext(FlickrContext);

  const handleClick = () => {
    searchForPhotos(value);
    setValue('');
  };

  return (
    <Wrapper>
      <Input
        placeholder="Search flickr" 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
      />
      
      <Button onClick={handleClick} disabled={!value}>
        <SearchIcon color="#5d625f" size={24} />
      </Button>
    </Wrapper>
  );
}

export default Searchbar;
