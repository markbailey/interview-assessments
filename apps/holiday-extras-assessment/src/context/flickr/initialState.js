const fn = (...args) => {
  throw Error('Function has not been implemented!');
};

const initialState = {
  loading: false,
  show_search: false,
  search_criteria: 'holidays',
  search_options: {
    page: 1,
    per_page: 100,
    safe_search: 1,
    content_type: 1,
    media: 'photos'
  },
  selected_photo_id: null,
  page_count: 1,
  photo_count: 0,
  photos: [],
  error: null,

  getFlickrUrl: fn,
  getPhotoInfo: fn,
  getPhotoMeta: fn,
  setSelectedPhotoId: fn,
  searchForPhotos: fn,
  incrementPage: fn,
  clearError: fn,
};

export default initialState;