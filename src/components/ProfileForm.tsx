import React, { useState, useEffect } from 'react';
import './ProfileForm.css';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';


const ProfileForm: React.FC = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const isEditing = location.pathname === "/edit-profile";

  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const data = {
      nombre: form.nombre.value,
      apellido: form.apellido.value,
      correo: form.correo.value,
    };

    // Aquí puedes hacer el fetch al backend
    console.log('Datos enviados:', data);
    setShowPopup(true);
  };

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
        navigate('/profile');
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [showPopup, navigate]);
  

  return (
  <>
    <form className={`profile-form ${isEditing ? 'editing' : ''}`} onSubmit={handleSubmit}>
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        id="nombre"
        name="nombre"
        disabled={!isEditing}
        placeholder="Juan Nicolás"
        required
      />

      <label htmlFor="apellido">Apellido:</label>
      <input
        type="text"
        id="apellido"
        name="apellido"
        disabled={!isEditing}
        placeholder="Pérez Nuñez"
        required
      />

      <label htmlFor="correo">Correo:</label>
      <input
        type="email"
        id="correo"
        name="correo"
        disabled={!isEditing}
        placeholder="juanNicolas123@correo.com"
        required
      />

      <div className="edit-button-wrapper">
        {!isEditing && (
          <Link to="/edit-profile" className="edit-button">
            Editar Perfil
            <img src='/assets/images/editIcon_darkMode.svg' alt="Editar" className="icon-right" width={20} />
          </Link>
        )}

        {isEditing && (
          <button type="submit" className="edit-button">
            Guardar Cambios
          </button>
        )}


      </div>
    </form>

    {showPopup && (
      <div className="popup-overlay">
        <div className="popup-content">
          <img
            src='/assets/images/checkIcon.svg'
            alt="check"
            className="popup-icon"
            width={60}
          />
          <p className="popup-text">¡Cambios guardados exitosamente!</p>
        </div>
      </div>
    )}
  </>
);
};

export default ProfileForm;

