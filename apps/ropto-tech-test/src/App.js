import React, { useContext } from 'react';

import { HackerNewsContext } from './context/HackerNews';
import Container from './components/Container';
import Header from './components/Header';

import Grid from './components/Grid';
import ItemMetaView from './components/ItemMetaView';
import Main from './components/Styled/Main.styled';

function App() {
  const {
    topStoryCount,
    topStoryIds,
    selectedItemId,
    items,
    setSelectedItemId
  } = useContext(HackerNewsContext);

  const itemMetaData = selectedItemId 
    ? items.find((item) => item.id === selectedItemId)
    : {};

  const showMeta = Boolean(itemMetaData && selectedItemId);

  return (
    <>
      <ItemMetaView {...itemMetaData} show={showMeta} onClose={() => setSelectedItemId()} />
      <Container>
        <Header storiesCount={topStoryCount} />
        <Main>
          <Grid items={topStoryIds} />
        </Main>
      </Container>
    </>
  );
}

export default App;
