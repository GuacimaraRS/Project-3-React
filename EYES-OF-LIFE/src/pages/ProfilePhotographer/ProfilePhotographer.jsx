import React from "react";
import "./ProfilePhotographer.css";
import logoImage from "../../assets/images/dani.png";

const ProfilePhotographer = () => {
  return (
    <div className="profile-container">
      <div className="profile-title">MI PERFIL</div>
      <div className="profile-content">
        <img src={logoImage} alt="Mi Perfil" className="profile-image" />
        <h2 className="profile-name">DANITO</h2>
        <p className="profile-description">
          Soy un apasionado fotógrafo con una visión única y creativa. Mi
          enfoque se centra en capturar momentos auténticos y significativos,
          transformando instantes ordinarios en extraordinarias piezas visuales.
          Con una sólida habilidad técnica y un ojo artístico desarrollado,
          busco resaltar la belleza en cada detalle.
        </p>
      </div>
    </div>
  );
};

export default ProfilePhotographer;
