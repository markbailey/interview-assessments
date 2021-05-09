export interface ISearchOptions {
  page: number;
  per_page: number;
  safe_search: number;
  content_type: number;
  media: string;
};

interface IState {
  loading: boolean;
  error: any;
  search_criteria: string;
  search_options: ISearchOptions;
  selected_photo_id: number;
  page_count: number;
  photo_count: number;
  photos: object[];

  getFlickrUrl: void;
  getPhotoInfo: void;
  getPhotoMeta: void;
  setSelectedPhotoId: void;
  searchForPhotos: void;
  incrementPage: void;
  clearError: void;
};

export default IState;