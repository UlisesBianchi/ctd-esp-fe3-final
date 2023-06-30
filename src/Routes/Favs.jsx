import React, { useContext } from 'react';
import Card from '../Components/Card';
import { ContextGlobal } from '../Components/utils/global.context';

const Favs = () => {
  const { state } = useContext(ContextGlobal);
  const theme = state.theme === 'dark' ? 'dark' : 'light';

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className={`card-grid ${theme}`}>
        {state.favorites.map((favorite) => (
          <Card
            key={favorite.id}
            name={favorite.name}
            username={favorite.username}
            id={favorite.id}
          />
        ))}
      </div>
    </>
  );
};

export default Favs;