import React, { useContext } from 'react';

import { HackerNewsContext } from './context/HackerNews';
import Top from './components/Top';
import Bottom from './components/Bottom';
import Button from './components/Button';
import ButtonWrapper from './components/Styled/ButtonWrapper.styled';

function App() {
  const {
    kidCount,
    topStoryIds,
    selectedItemId,
    items,
    setSelectedItemId
  } = useContext(HackerNewsContext);

  const meta = selectedItemId 
    ? items.find((item) => item.id === selectedItemId)
    : undefined;

  const showBack = Boolean(meta && meta.parent);

  return (
    <>
      <Top open={!selectedItemId} items={topStoryIds}/>

      <ButtonWrapper>
        {Boolean(selectedItemId) ? (<Button dark onClick={() => setSelectedItemId(null)} />) : null}
        {showBack ? <Button onClick={() => setSelectedItemId(meta.parent)} /> : null}
      </ButtonWrapper>
      
      <Bottom open={Boolean(selectedItemId)} meta={meta} maxItems={kidCount} />
    </>
  );
}

export default App;
