import  { useState, useEffect } from 'react';
import { getProfilePhotographer, updateProfilePhotographer } from '../../services/profilephotographer';
import './ProfilePhotographer.css';
import A from '../../assets/images/A.png';
import EditForm from './EditForm';

const ProfilePhotographer = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedAboutMe, setEditedAboutMe] = useState(''); // Cambiado de editedData a editedAboutMe

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getProfilePhotographer();
        console.log(data);
        setUserData(data);
      } catch (error) {
        console.error('Error al cargar los datos del perfil del fotógrafo:', error);
        setError('Error al cargar los datos del perfil del fotógrafo. Consulta la consola para más detalles.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleEditProfile = (section) => {
    setEditMode(!editMode);
    // Puedes inicializar los datos editados aquí según la sección
    setEditedAboutMe(userData.user.infoPhotoGrapher.aboutMe || '');
  };

  const handleSaveProfile = async () => {
    try {
      // Actualiza el estado local con la información editada
      setUserData((prevUserData) => ({
        ...prevUserData,
        user: {
          ...prevUserData.user,
          infoPhotoGrapher: {
            ...prevUserData.user.infoPhotoGrapher,
            aboutMe: editedAboutMe,
          },
        },
      }));

      // Llama a la función para actualizar la información en la base de datos
      await updateProfilePhotographer({ aboutMe: editedAboutMe });
      
      // Finaliza el modo de edición
      setEditMode(false);

      console.log("Datos del usuario actualizados con éxito");
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
    }
  };

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
              <button onClick={() => handleEditProfile('aboutMe')}>Editar</button>
              {editMode ? (
                <EditForm data={editedAboutMe} onSave={(newData) => handleSaveProfile('aboutMe', newData)} />
              ) : (
                <p className="profile-description">{userData && userData.user.infoPhotoGrapher.aboutMe || 'Sin información disponible'}</p>
              )}
            </div>

            <div className="info-box skills">
              <h2>Habilidades Fotográficas</h2>
              <button onClick={() => handleEditProfile('skills')}>Editar</button>
              {editMode ? (
                <EditForm data={editedAboutMe} onSave={(newData) => handleSaveProfile('skills', newData)} />
              ) : (
                <p className="profile-description">{userData && userData.user.infoPhotoGrapher.description || 'Sin información disponible'}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfilePhotographer;