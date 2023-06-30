import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';
import img from "../images/doctor.jpg";
import "../index.css"

const Card = ({ name, username, id }) => {
  const { state, addToFavorites, removeFromFavorites } = useContext(ContextGlobal);
  const isFavorite = state.favorites.some((favorite) => favorite.id === id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(id);
    } else {
      addToFavorites({ name, username, id });
    }
  };

  return (
    <div className="card">
      <img className='imagen' src={img} alt="" />
      <h2 style={{textAlign: "center"}}>{name}</h2>
      <p>{username}</p>
      {isFavorite ? (
        <button className="favButton" onClick={handleToggleFavorite}>Remove from Favorites</button>
      ) : (
        <button className="favButton" onClick={handleToggleFavorite}>Add to Favorites</button>
      )}
      <Link to={`/dentist/${id}`}>View Details</Link>
    </div>
  );
};

export default Card;