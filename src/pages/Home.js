import React from 'react';

const Home = () => {
  return (
    <div>
      <div className="hero">
        <h1>Bienvenido al Explorador Pokémon</h1>
        <p>Descubre el mundo Pokémon a través de generaciones, selecciona tus favoritos y explora sus características únicas.</p>
      </div>
      <div className="pokemon-info">
        <h2>Características Principales</h2>
        <ul>
          <li>Explora Pokémon por generación</li>
          <li>Conoce sus estadísticas y habilidades</li>
          <li>Descubre Pokémon aleatorios y sorpréndete</li>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/B4LvDiIi128?si=ftVEP5cFQRmfLPPQ&autoplay=1&mute=1&controls=0&controls=0&modestbranding=1&showinfo=0&iv_load_policy=3&fs=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </ul>
      </div>
    </div>
  );
};

export default Home;
