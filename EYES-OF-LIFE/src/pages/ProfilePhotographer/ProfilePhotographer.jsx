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
  <>
    {Object.keys(userData).length !== 0 ? (
      <div className="profile-container">
        <div className="left-top-section">
          <div className="left-column">
            <img src={A} alt="Mi Perfil" className="profile-image" />
            <div className="personal-details">
              <h2 className="profile-name">{userData.name_user}</h2>
              <p className="profile-description">{userData.description || 'Descripción no disponible'}</p>
            </div>
          </div>
        </div>

        <div className="contact-info">
          <h2>Contacto</h2>
          {userData.contactInfo ? (
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
            {userData.aboutMe?.image && <img src={userData.aboutMe.image} alt="Fotografía Sobre Mí" className="additional-image" />}
            <p className="profile-description">{userData.aboutMe?.description || 'Sin información disponible'}</p>
          </div>

          {/* Habilidades Fotográficas */}
          <div className="info-box skills">
            <h2>Habilidades Fotográficas</h2>
            {userData.skills?.image && <img src={userData.skills.image} alt="Habilidades Fotográficas" className="additional-image" />}
            <p className="profile-description">{userData.skills?.description || 'Sin información disponible'}</p>
          </div>
        </div>
      </div>
    ) : (
      <h1>Cargando...</h1>
    )}
  </>
);
    }

export default ProfilePhotographer;