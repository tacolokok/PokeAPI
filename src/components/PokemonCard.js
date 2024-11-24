import React from 'react';
import './PokemonCard.css'; 

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <h3>{pokemon.name}</h3>
      <img src={pokemon.img} alt={pokemon.name} />
      <p>Experiencia base: {pokemon.base_experience}</p>
    </div>
  );
};

export default PokemonCard;

