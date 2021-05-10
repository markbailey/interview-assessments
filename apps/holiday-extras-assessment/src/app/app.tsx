import { useContext, useRef, useState, useEffect } from 'react';

import { FlickrContext, IPhotoMeta, emptyMeta } from '../context/flickr';
import useLazyLoading from '../hooks/useLazyLoading';
import useInfiniteScroll from '../hooks/useInfiniteScroll';

import Grid, { GridColumn } from '../components/grid';
import Photo from '../components/photo';
import Navbar, { NavbarText } from '../components/navbar';
import Searchbar from '../components/searchbar';
import Button, { IconButton } from '../components/button';
import Modal from '../components/modal';
import Alert from '../components/alert';

import ScrollPanel from '../components/styled/scroll-panel.styled';
import ToTopButton from '../components/styled/to-top-button.styled';
import { MetaTitle, Author, Username, Tag, TagWrapper } from '../components/styled/meta.styled';

function App() {
  const {
    photos,
    search_criteria,
    selected_photo_id,
    error,
    // FUNCTIONS  
    getFlickrUrl,
    setSelectedPhotoId,
  } = useContext(FlickrContext);

  const [scrollTop, setScrollTop] = useState(0);
  const [photoMeta, setPhotoMeta] = useState(emptyMeta);
  const scrollPanelRef = useRef(null);

  const [lastImageRef] = useInfiniteScroll();
  useLazyLoading();

  const scrollTo = () => {
    if (scrollPanelRef.current) {
      const isIE = /(Trident\/|MSIE\s?)\d{1,2}.0;/g
        .test(navigator.userAgent);
      
      const node: any = scrollPanelRef.current;
      if (isIE) node.scrollTo(0, 0);
      else node.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }

  useEffect(() => {
    let mounted = true;
    const delay = selected_photo_id ? 0 : 500;
    const meta = selected_photo_id
      ? photos.find((photo: IPhotoMeta) => photo.id === selected_photo_id) || emptyMeta
      : emptyMeta;

    setTimeout(() => mounted ? setPhotoMeta(meta) : false, delay);
    return () => {
      mounted = false;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected_photo_id, photos])

  useEffect(() => {
    const node: any = scrollPanelRef.current;
    if (node) 
      node.addEventListener(
        'scroll', 
        (e: any) => setScrollTop(e.target.scrollTop)
      );

    return () => node 
      ? node.removeEventListener(
          'scroll', 
          (e: any) => setScrollTop(e.target.scrollTop)
        ) 
      : false;
  }, [scrollPanelRef])

  return (
    <>
      {error ? (
        <Alert context="error" center>
          <strong>Looks like we are having issues connecting to Flickr!</strong><br />
          <span>Try checking your internet connection.</span>
        </Alert>
      ) : null}

      <Modal
        open={Boolean(selected_photo_id)}
        onHide={() => setSelectedPhotoId(null)}
      >
        {error ? (
          <Alert context="error" center>
            <strong>Looks like we are having issues connecting to Flickr!</strong><br />
            <span>Try checking your internet connection.</span>
          </Alert>
        ) : null}

        {!error && !photoMeta.size ? <h2>Loading... Please wait...</h2> : null}

        {photoMeta.size ?(
          <>
            <Photo
              data-src={getFlickrUrl({ ...photoMeta, size: 'small' })}
              data-srcset={`${getFlickrUrl({ ...photoMeta, size: 'medium' })} 640w, ${getFlickrUrl({ ...photoMeta, size: 'small' })} 400w`}
              alt={photoMeta.title || ''} 
            />
            <MetaTitle>{photoMeta.title}</MetaTitle>
            <Author>Author: <Username>{photoMeta.author.username}</Username></Author>

            {photoMeta.description ? (
              <>
                <br /><strong>DESCRIPTION</strong>
                <p dangerouslySetInnerHTML={{ __html: photoMeta.description || '' }}></p>
              </>
            ) : <p>There is no description for this photo.</p>}

            {photoMeta.tags.length > 0 ? (
              <>
                <strong>TAGS</strong>
                <TagWrapper>
                  {photoMeta.tags.map((tag: any) => (
                    <Tag key={tag.id}>{tag._content}</Tag>
                  ))}
                </TagWrapper>
              </>
            ) : null}

            <br />
            <Button
              href={getFlickrUrl({ ...photoMeta }, 'page')}
              target="_blank"
              primary
              as="a"
            >
              Image Page
            </Button>

            <Button
              href={getFlickrUrl({ ...photoMeta }, 'profile')}
              target="_blank"
              as="a"
            >
              User Profile
            </Button>
          </>
        ) : null}
      </Modal>

      <Navbar>
        <NavbarText>{search_criteria}</NavbarText>
        <Searchbar />
      </Navbar>

      <ScrollPanel ref={scrollPanelRef}>
        <Grid>
          {photos.map((photo: IPhotoMeta, index: number) => {
            const ref = index === photos.length -1 ? lastImageRef : null;
            const smallSrc = getFlickrUrl({ ...photo, size: 'small' });
            const mediumSrc = getFlickrUrl({ ...photo, size: 'medium' });
            
            return (
              <GridColumn key={`${photo.id}_${index}`}>
                <Photo 
                  ref={ref}
                  data-src={smallSrc}
                  data-srcset={`${mediumSrc} 640w, ${smallSrc} 400w`}
                  data-alt={photo.title as string}
                  alt="Image Loading"
                  onClick={() => setSelectedPhotoId(photo.id)}
                  grid
                />
              </GridColumn>
            );
          })}
        </Grid>
      </ScrollPanel>

      <ToTopButton
        as={IconButton}
        icon="top"
        active={scrollTop > 0}
        primary
        title="Back to top"
        onClick={scrollTo}
      />
    </>
  );
}

export default App;
