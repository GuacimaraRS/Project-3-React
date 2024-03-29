import React from "react";
import "./AboutUs.css";


const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>Nuestra Historia</h1>
        <p>¡Bienvenido a [EYES OF LIFE]! En [EYES OF LIFE], estamos
      comprometidos en simplificar y enriquecer la conexión entre talentosos
      fotógrafos y clientes apasionados por capturar momentos memorables.
      Nuestra plataforma ha sido diseñada para potenciar la colaboración y
      facilitar el acceso a servicios fotográficos excepcionales. Nuestra Misión
      En el corazón de [EYES OF LIFE] está la misión de construir puentes
      visuales entre fotógrafos creativos y aquellos que buscan inmortalizar sus
      momentos especiales. Nos esforzamos por ser la pieza clave que une a
      profesionales con clientes, creando experiencias fotográficas
      significativas y duraderas. Características Destacadas Directorio de
      Fotógrafos: Explora un extenso directorio de fotógrafos talentosos, cada
      uno con su estilo único y especialidades. Solicitud de Servicios
      Personalizados: Los clientes pueden enviar solicitudes personalizadas para
      eventos específicos o sesiones de fotos, conectándose directamente con
      fotógrafos que se ajusten a sus necesidades. Gestión de Proyectos:
      Simplificamos la gestión de proyectos, desde la reserva inicial hasta la
      entrega final de las imágenes, para que tanto fotógrafos como clientes
      disfruten de una experiencia sin complicaciones. Calificaciones y Reseñas:
      Fomentamos la transparencia y la confianza a través de un sistema de
      calificaciones y reseñas, permitiendo a los clientes tomar decisiones
      informadas y a los fotógrafos destacar su talento. Únete a la Comunidad
      Fotográfica Ya sea que seas un fotógrafo experimentado en busca de nuevas
      oportunidades o un cliente en busca del profesional perfecto, [EYES OF
      LIFE] es tu plataforma para conectar, colaborar y capturar momentos
      inolvidables. Únete a nuestra comunidad y descubre cómo la fotografía
      puede transformar tus recuerdos en obras maestras visuales. Contáctanos
      Estamos aquí para brindarte el mejor servicio posible. Si tienes
      preguntas, sugerencias o simplemente quieres decir hola, no dudes en
      ponerte en contacto con nosotros. ¡Estamos emocionados de ser parte de tu
      viaje fotográfico!</p>
      </div>
      <div className="team-section">
        <div className="team-member">
          <img src="src/assets/images/fotoCarlos.webp" alt="CARLOS" />
          <div className="member-info">
            <h2>CARLOS</h2>
            <p>CEO & Founder</p>
            <p>¡Hola! Soy CARLOS, progamador y diseñador.</p>
            <p>carlos@gmail.com</p>
            <button>Contactar</button>
          </div>
        </div>

        <div className="team-member">
          <img src="src/assets/images/fotoGuaci.webp" alt="GUACIMARA" />
          <div className="member-info">
            <h2>GUACIMARA</h2>
            <p>CEO & Founder</p>
            <p>¡Hola! Soy GUACI, programadora y diseñadora.</p>
            <p>guacimara@gmail.com</p>
            <button>Contactar</button>
          </div>
        </div>

        <div className="team-member">
          <img src="src/assets/images/fotoDani.webp" alt="J.DANIEL" />
          <div className="member-info">
            <h2>J.DANIEL</h2>
            <p>CEO & Founder</p>
            <p>¡Hola! Soy J.DANIEL, programador y diseñador.</p>
            <p>john@gmail.com</p>
            <button>Contactar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
