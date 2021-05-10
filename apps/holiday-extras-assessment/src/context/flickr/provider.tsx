import {
  createContext,
  useReducer,
  useEffect
} from 'react';

import Flickr from './models/Flickr';
import { IProviderProps, IPhotoMeta } from './interfaces';
import initialState from './initialState';
import reducer from './reducer';
import actions from './actions';

export const Context = createContext(initialState);

export default function Provider({ children }: IProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const getFlickrUrl = (photo: IPhotoMeta, type: string) => Flickr.getUrl(photo, type);
  const getPhotoInfo = (id: string) => Flickr.getInfo(id, setPhoto);
    
  const setSelectedPhotoId = (id: string) => setState(actions.SET_SELECTED_PHOTO_ID, id);
  const searchForPhotos = (value: string) => setState(actions.SET_SEARCH_CRITERIA, value);

  const incrementPage = () => setState(
    actions.SET_SEARCH_OPTIONS,
    { page: state.search_options.page + 1 }
  );

  function setState (type: string, payload: any) {
    dispatch({ type, payload });
  }

  function setPhotos (type: string, payload: any, setAsIs: boolean) {
    if (setAsIs) return setState(type, payload);

    const newPayload = {
      ...payload,
      photos: [...state.photos, ...payload.photos]
    };

    setState(type, newPayload);
  }
  
  function setPhoto (type: string, payload: any, setAsIs: boolean) {
    if (setAsIs) return setState(type, payload);

    const index = state.photos
      .findIndex((photo: IPhotoMeta) => photo.id === payload.id);

    if (index > -1) {
      const newPhotos = [...state.photos];
      newPhotos.splice(index, 1, payload);
      setState(type, { photos: newPhotos });
    }
  }

  /**
   * When search criteria changes, either reset page to 1
   * or just get new photos.
   */
  useEffect(() => {
    const page = state.search_options.page;
    if (page !== 1) 
      setState(
        actions.SET_SEARCH_OPTIONS,
        { page: 1 }
      );
    else {
      const searchOptions = {
        ...state.search_options,
        text: state.search_criteria,
      };

      Flickr.getPhotos(searchOptions, setPhotos);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.search_criteria]);

  /** 
   * Get new photos everytime the search_options change
   * Only really used when page changes. 
   */
  useEffect(() => {
    const searchOptions = {
      ...state.search_options,
      text: state.search_criteria,
    };

    Flickr.getPhotos(searchOptions, setPhotos);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.search_options]);

  /** 
   * Get the photo info when the selected photo id
   * changes and isn't null. 
   */
  useEffect(() => {
    const selectedPhotoId = state.selected_photo_id;
    if (selectedPhotoId) 
      Flickr.getInfo(selectedPhotoId, setPhoto);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.selected_photo_id]);

  return (
    <Context.Provider
      value={{
        ...state, 
        getFlickrUrl,
        getPhotoInfo,
        setSelectedPhotoId,
        searchForPhotos,
        incrementPage,
      }}
    >
      {children}
    </Context.Provider>
  );
}