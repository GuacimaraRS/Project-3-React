import { useNavigate } from 'react-router-dom';

const UserButton = ({photographer}) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/photographers/${photographer}`);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Ver Perfil</button>
    </div>
  );
};

export default UserButton;