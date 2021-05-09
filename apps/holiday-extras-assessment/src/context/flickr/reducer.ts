import { IAction, IState } from './interfaces';

import actions from './actions';

export default function reducer(state: IState, action: IAction) {
  switch (action.type) {
    case actions.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
        error: null,
      };
    case actions.SET_SHOW_SEARCH:
      return {
        ...state,
        show_search: action.payload,
      };
    case actions.SET_PHOTOS:
      return {
        ...state,
        loading: false,
        ...action.payload
      };
    case actions.SET_SELECTED_PHOTO_ID:
      return {
        ...state,
        selected_photo_id: action.payload,
      };
    case actions.SET_SEARCH_CRITERIA:
      return {
        ...state,
        show_search: false,
        search_criteria: action.payload,
        photos: [],
        page_count: 0,
        photo_count: 0,
      };
    case actions.SET_SEARCH_OPTIONS:
      return {
        ...state,
        search_options: { 
          ...state.search_options,
          ...action.payload,
        }
      };
    case actions.SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default: 
      return { ...state };
  }
}