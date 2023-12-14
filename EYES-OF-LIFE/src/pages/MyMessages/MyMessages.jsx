import React, { useState } from 'react';
import './MyMessages.css';
import Chat from './Chat';
import carlotaImage from '../../assets/images/images.jpg';
import irinaImage from '../../assets/images/mu.png';
import adrianImage from '../../assets/images/h.png';
import luisImage from '../../assets/images/ho.png';
import carolImage from '../../assets/images/hom.jpeg';

const messages = [
  { emisor: 'Carlota', mensaje: 'Carlota te ha enviado un mensaje', image: carlotaImage },
  { emisor: 'Irina', mensaje: 'Irina te ha enviado un mensaje', image: irinaImage },
  { emisor: 'Adrian', mensaje: 'Adrian te ha enviado un mensaje', image: adrianImage },
  { emisor: 'Luis', mensaje: 'Luis te ha enviado un mensaje', image: luisImage },
  { emisor: 'Carol', mensaje: 'Carol te ha enviado un mensaje', image: carolImage },
];


const MyMessages = () => {
  const [openChat, setOpenChat] = useState(null);

  const handleChatClick = (index) => {
    setOpenChat(openChat === index ? null : index);
  };

  const handleSendMessage = (emisor, mensaje) => {
    console.log(`Mensaje enviado a ${emisor}: ${mensaje}`);
  };

  return (
    <div className="MyMessages-container">
      <h1>MyMessages</h1>
      <ul>
        {messages.map((message, index) => (
          <li key={index} className="MyMessages-item">
            <img src={message.image} alt={`Foto de perfil de ${message.emisor}`} />
            <div>
              <h2>{message.emisor}</h2>
              <p>{message.mensaje}</p>
            </div>
            <button className="MyMessages-button" onClick={() => handleChatClick(index)}>
              Chat
            </button>
            {openChat === index && (
              <Chat emisor={message.emisor} mensajes={[]} onSendMessage={handleSendMessage} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyMessages;