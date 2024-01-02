import React, { useState } from 'react';

const EditForm = ({ data, onSave }) => {
  const [editedData, setEditedData] = useState(data);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(editedData);
    // Puedes realizar acciones adicionales, como enviar la información al servidor
  };

  return (
    <div>
      {/* Campos de entrada para la edición */}
      <textarea
        name="aboutMe"
        value={editedData.aboutMe || ''}
        onChange={handleInputChange}
        placeholder="Ingrese información sobre usted..."
      />
      {/* Otros campos de edición... */}
      <button onClick={handleSave}>Guardar</button>
    </div>
  );
};

export default EditForm;