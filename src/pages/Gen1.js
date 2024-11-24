import React, { useEffect, useState } from 'react';
import PokemonCard from '../components/PokemonCard';

const Gen1 = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const ids = Array.from({ length: 10 }, () => Math.floor(Math.random() * 151) + 1);
        const promises = ids.map((id) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => res.json())
        );
        const data = await Promise.all(promises);
        setPokemonList(data.map((p) => ({
          name: p.name,
          img: p.sprites.other['official-artwork'].front_default,
          base_experience: p.base_experience,
        })));
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
      }
    };

    fetchPokemon();
  }, []);

  return (
    <div className="generation">
      <h2>Pokémon Generación 1</h2>
      <div className="pokemon-grid">
        {pokemonList.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default Gen1;
