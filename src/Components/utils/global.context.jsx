import React, { createContext, useMemo, useReducer } from 'react';


export const initialState = { theme: 'light', data: [], favorites: [] };

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case 'REMOVE_FROM_FAVORITES':
      return {
        ...state,
        favorites: state.favorites.filter((favorite) => favorite.id !== action.payload),
      };
    case 'SET_DATA':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  const addToFavorites = (card) => {
    dispatch({ type: 'ADD_TO_FAVORITES', payload: card });
  };

  const removeFromFavorites = (id) => {
    dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: id });
  };

  const setData = (data) => {
    dispatch({ type: 'SET_DATA', payload: data });
  };

  const value = useMemo(() => {
    return { state, dispatch, toggleTheme, addToFavorites, removeFromFavorites, setData };
  }, [state]);

  return (
    <ContextGlobal.Provider value={value}>{children}</ContextGlobal.Provider>
  );
};