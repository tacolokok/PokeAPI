import React from 'react';
import { useParams } from 'react-router-dom';

const Contact = () => {
  const { name } = useParams();
  const avatarUrl = `https://ui-avatars.com/api/?name=${name}&background=random`;

  return (
    <div className="contact">
      <h2>Contacto</h2>
      <img src={avatarUrl} alt="Avatar" />
      <p>Nombre del usuario: {name}</p>
    </div>
  );
};

export default Contact;
