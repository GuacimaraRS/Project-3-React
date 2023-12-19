import React, { useState, useEffect } from 'react';
import { getProfilePhotographer } from '../../services/profilephotographer';
import './ProfilePhotographer.css';
import A from '../../assets/images/A.png';

const ProfilePhotographer = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getProfilePhotographer();
      setUserData(data);
    };
    fetchUserData();
  },[]);
 console.log(userData)
 return (
  <div className="profile-container">
    <div className="left-top-section">
      <div className="left-column">
        <img src={A} alt="Mi Perfil" className="profile-image" />
        <div className="personal-details">
          <h2 className="profile-name">{userData.name || 'Nombre no disponible'}</h2>
          <p className="profile-description">{userData.description || 'Descripción no disponible'}</p>
        </div>
      </div>
    </div>

    {/* Información de contacto */}
    <div className="contact-info">
      <h2>Contacto</h2>
      {userData && userData.contactInfo ? (
        <>
          <p>Número de teléfono: {userData.contactInfo.phone}</p>
          <p>Edad: {userData.contactInfo.age} años</p>
          <p>Estudios: {userData.contactInfo.studies}</p>
          <p>Dirección: {userData.contactInfo.address}</p>
          <p>Años de experiencia profesional: {userData.contactInfo.experience}</p>
        </>
      ) : (
        <p>Cargando información...</p>
      )}
    </div>

    <div className="right-section">
      {/* Sobre Mí */}
      <div className="info-box about-me">
        <h2>Sobre Mí</h2>
        <img src={userData.aboutMe ? userData.aboutMe.image : ''} alt="Fotografía Sobre Mí" className="additional-image" />
        <p className="profile-description">{userData.aboutMe ? userData.aboutMe.description : ''}</p>
      </div>

      {/* Habilidades Fotográficas */}
      <div className="info-box skills">
        <h2>Habilidades Fotográficas</h2>
        <img src={userData.skills ? userData.skills.image : ''} alt="Habilidades Fotográficas" className="additional-image" />
        <p className="profile-description">{userData.skills ? userData.skills.description : ''}</p>
      </div>
    </div>
  </div>
);
};

export default ProfilePhotographer;