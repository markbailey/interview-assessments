import React, { createContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node
    )
  ]).isRequired
};

const initialState = {
  topStoryCount: 10, // For ability to customise
  kidCount: 3, // For ability to customise
  isLoading: false,
  selectedItemId: null,
  topStoryIds: [],
  items: [],
  error: null,
};

export const HackerNewsContext = createContext(initialState);

function reducer(state, action) {
  switch (action.type) {
    case 'SET_IS_LOADING':
      return {
        ...state,
        isLoading: action.payload,
        error: action.payload 
          ? null
          : state.error,
      };
    case 'SET_TOPSTORY_COUNT':
      return { ...state, topStoryCount: action.payload };
    case 'SET_KID_COUNT':
      return { ...state, kidCount: action.payload };
    case 'SET_SELECTED_ITEM_ID':
      return { ...state, selectedItemId: action.payload };
    case 'SET_TOPSTORY_IDS':
      return {
        ...state, 
        isLoading: false,
        topStoryIds: action.payload,
        error: null,
      };
    case 'SET_ITEMS':
      return {
        ...state,
        isLoading: false,
        items: action.payload,
        error: null,
      };
    case 'SET_ERROR':
      return { 
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return { ...state };
  }
}

export function HackerNewsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const apiFetch = async (slug) => {
    dispatch({ type: 'SET_IS_LOADING', payload: true });
    return fetch(`https://hacker-news.firebaseio.com/v0/${slug}.json?print=pretty`)
      .then(response => response.json())
      .then(data => data)
      .catch((error) => dispatch({ 
        type: 'SET_ERROR',
        payload: error 
      }));
  };

  const setTopStoryCount = (count) => dispatch({ 
    type: 'SET_TOPSTORY_COUNT',
    payload: count 
  });

  const setKidCount = (count) => dispatch({ 
    type: 'SET_KID_COUNT',
    payload: count 
  });

  const setItems = (items) => dispatch({ 
    type: 'SET_ITEMS',
    payload: items 
  });

  const getTopStoryIds = async () => {
    const ids = await apiFetch('topstories');
    
    dispatch({ 
      type: 'SET_TOPSTORY_IDS',
      payload: ids.slice(0, state.topStoryCount) 
    });
  };

  const setSelectedItemId = async (id = null) => {    
    if (Boolean(id)) {
      const item = await apiFetch(`item/${id}`);
      if (item) setItems([...state.items, item]);
    }
    
    dispatch({ type: 'SET_SELECTED_ITEM_ID', payload: id });
  };

  const newState = {
    ...state,
    setTopStoryCount,
    setKidCount,
    setSelectedItemId,
  };

  useEffect(() => {
    getTopStoryIds();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const filteredItems = [...state.items]
      .filter(
        (item) => state
          .topStoryIds
          .includes(item.id)
      );

    setItems(filteredItems);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.topStoryIds]);

  return (
    <HackerNewsContext.Provider value={newState}>
      {children}
    </HackerNewsContext.Provider>
  );
}

HackerNewsProvider.propTypes = propTypes;
HackerNewsProvider.defaultProps = {};