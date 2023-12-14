import React from "react";
import "./ProfilePhotographer.css";
import logoImage from "../../assets/images/dani.png";

const ProfilePhotographer = () => {
  return (
    <div className="profile-container">
      {/* Sección de información personal */}
      <div className="personal-info">
        <div className="left-column">
          <img src={logoImage} alt="Mi Perfil" className="profile-image" />
          <div className="personal-details">
            <h2 className="profile-name">DANITO</h2>
            <p className="profile-description">
              Soy un apasionado fotógrafo con una visión única y creativa, especializado en retratos auténticos y emotivos.
            </p>
          </div>
        </div>

        {/* Sección de información adicional */}
        <div className="additional-info">
          {/* Recuadro "Sobre Mí" */}
          <div className="info-box about-me">
            <h2>Sobre Mí</h2>
            <p className="profile-description">
              Soy un apasionado fotógrafo con una visión única y creativa. Destaco en composición visual y manejo equipos de software de edición avanzados, así como de iluminación natural y artificial.
              He participado en series de bajo presupuesto y en eventos de fotografía a gran escala.
              Tengo un gran carisma a la hora de crear y transmitir sentimientos a través de la fotografía.
              Siempre estoy en busca de aventuras y experiencias creativas.
              ¡Estoy ansioso de ser partícipe de tu próxima historia visual!
            </p>
          </div>

          {/* Recuadro con habilidades fotográficas */}
          <div className="info-box skills">
            <h2>Habilidades Fotográficas</h2>
            <p>
              Experiencia destacada en composición visual, técnica fotográfica.
              Uso avanzado de equipos y software de edición.
              Habilidad para capturar momentos emotivos y contar historias.
              Fortalezas en la captura de paisajes naturales y urbanos, con especialización en fotografía documental, fotoperiodismo y eventos.
            </p>
          </div>

          {/* Recuadro con información personal */}
          <div className="info-box personal-info-box">
            <h2>Información Personal</h2>
            <p>Número de teléfono: 000-000-000</p>
            <p>Edad: 32 años</p>
            <p>Estudios: Estudios cursados en la Universidad Complutense de Madrid de Bellas Artes</p>
            <p>Dirección: 454, Calle Serrato (Las Palmas de Gran Canaria)</p>
            <p>Años de experiencia profesional: 4 años como amateur y 6 años como profesional</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePhotographer;
