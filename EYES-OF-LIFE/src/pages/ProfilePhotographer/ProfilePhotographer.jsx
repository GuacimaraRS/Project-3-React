import React, { useState, useEffect } from 'react';
import { getProfilePhotographer } from '../../services/profilephotographer';
import './ProfilePhotographer.css';
import A from '../../assets/images/A.png';

const ProfilePhotographer = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getProfilePhotographer();
        console.log(data)
        setUserData(data);
      }  catch (error) {
        console.error('Error al cargar los datos del perfil del fotógrafo:', error);
        setError('Error al cargar los datos del perfil del fotógrafo. Consulta la consola para más detalles.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
      {loading ? (
        <h1>Cargando...</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <div className="profile-container">
          <div className="left-top-section">
            <div className="left-column">
              <img src={A} alt="Mi Perfil" className="profile-image" />
              <div className="personal-details">
                <h2 className="profile-name">{userData.user && userData.user.name_user}</h2>
                <p className="profile-description">{userData && userData.user.infoPhotoGrapher.description || 'Descripción no disponible'}</p>
              </div>
            </div>
          </div>

          <div className="contact-info">
            <h2>Contacto</h2>
            {userData && userData.user.infoPhotoGrapher ? (
              <>
                <p>Número de teléfono: {userData.user.phone}</p>
                <p>Edad: {userData.user.age} años</p>
                <p>Estudios: {userData.user.studies}</p>
                <p>Dirección: {userData.user.address}</p>
                <p>Años de experiencia profesional: {userData.user.experience}</p>
              </>
            ) : (
              <p>Cargando información...</p>
            )}
          </div>

          <div className="right-section">
            <div className="info-box about-me">
              <h2>Sobre Mí</h2>
               {/* < userData && userData.user.infoPhotoGrapher.aboutMe.image && <img src={userData.user.image} alt="Fotografía Sobre Mí" className="additional-image" /> */}
              <p className="profile-description">{userData && userData.user.infoPhotoGrapher.aboutMe || 'Sin información disponible'}</p> 
            </div>

             <div className="info-box skills">
              <h2>Habilidades Fotográficas</h2>
              {/* {userData && userData.skills?.image && <img src={userData.skills.image} alt="Habilidades Fotográficas" className="additional-image" />} */}
              <p className="profile-description">{userData && userData.user.infoPhotoGrapher.description || 'Sin información disponible'}</p>
            </div> 
          </div>
        </div>
      )}
    </>
  );
};

export default ProfilePhotographer;