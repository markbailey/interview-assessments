import { useRef, useCallback, useContext } from 'react';

import { FlickrContext } from '../context/flickr';

export default function useInfiniteScroll() {
  const observer = useRef();
  const {
    loading,
    search_options,
    page_count,
    incrementPage
  } = useContext(FlickrContext);

  const hasMore = search_options.page < page_count;

  const lastElementRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect(); // TS doesn't like observer.current, things it potential is undefined
    
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore)
        incrementPage();
    }); 

    if (node) observer.current.observe(node);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);
  
  return [lastElementRef];
}
