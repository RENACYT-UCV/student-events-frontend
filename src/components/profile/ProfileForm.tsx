import React, { useState, useEffect } from 'react';
import './ProfileForm.css';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';


const ProfileForm: React.FC = () => {

  const location = useLocation();
  const navigate = useNavigate();
  // No longer strictly dependent on route for editing state
  // const isEditing = location.pathname === "/edit-profile";

  const [showPopup, setShowPopup] = useState(false);
  const [isFormEditable, setIsFormEditable] = useState(false); // New state for form edit mode
  const [hasChanges, setHasChanges] = useState(false); // New state to track changes

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent saving if no changes or not in edit mode (button should be disabled anyway)
    if (!isFormEditable || !hasChanges) {
      return;
    }

    const form = e.target as HTMLFormElement;
    const data = {
      nombre: form.nombre.value,
      apellido: form.apellido.value,
      correo: form.correo.value,
      carrera: form.carrera.value,
      telefono: form.telefono.value,
      codigo_alumno: form.codigo_alumno.value,
    };

    // Aquí puedes hacer el fetch al backend
    console.log('Datos enviados:', data);
    setShowPopup(true);
    setIsFormEditable(false); // Disable form after saving
    setHasChanges(false); // Reset changes state
  };

  const handleEditClick = () => {
    setIsFormEditable(true); // Enable form editing
    setHasChanges(false); // Reset changes state when entering edit mode
    // Optional: navigate to /edit-profile if you still want the URL to reflect the state
    // navigate('/edit-profile');
  };

  const handleInputChange = () => {
    if (isFormEditable) {
        setHasChanges(true); // Mark as changed only when editing
    }
  };

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
        // Optional: navigate back to /profile after saving if you navigated to /edit-profile
        // if (location.pathname === '/edit-profile') {
        //   navigate('/profile');
        // }
      }, 1500);

      return () => clearTimeout(timer);
    }
    // Optional: set initial isFormEditable state based on route on component mount
    // if (location.pathname === '/edit-profile') {
    //   setIsFormEditable(true);
    // }
  }, [showPopup, navigate]);
  

  return (
  <>
    <form className={`profile-form ${isFormEditable ? 'editing' : ''}`} onSubmit={handleSubmit}>
      <div className="form-header-with-button">
        <h2>Información Personal</h2> {/* Title */}
        {!isFormEditable && (
            // Editar Perfil button moved next to title
            <button type="button" className="edit-button-inline" onClick={handleEditClick}>
              Editar Perfil
              <img src='/assets/images/editIcon_darkMode.svg' alt="Editar" className="icon-right" width={20} />
            </button>
          )}
      </div>

      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        id="nombre"
        name="nombre"
        disabled={!isFormEditable} // Use new state
        placeholder="Juan Nicolás"
        required
        onChange={handleInputChange} // Added onChange handler
      />

      <label htmlFor="apellido">Apellido:</label>
      <input
        type="text"
        id="apellido"
        name="apellido"
        disabled={!isFormEditable} // Use new state
        placeholder="Pérez Nuñez"
        required
        onChange={handleInputChange} // Added onChange handler
      />

      <label htmlFor="correo">Correo:</label>
      <input
        type="email"
        id="correo"
        name="correo"
        disabled={!isFormEditable} // Use new state
        placeholder="juanNicolas123@correo.com"
        required
        onChange={handleInputChange} // Added onChange handler
      />

      <label htmlFor="carrera">Carrera:</label>
      <input
        type="text"
        id="carrera"
        name="carrera"
        disabled={!isFormEditable} // Use new state
        placeholder="Ingeniería de Sistemas"
        required
        onChange={handleInputChange} // Added onChange handler
      />

      <label htmlFor="telefono">Teléfono:</label>
      <input
        type="tel"
        id="telefono"
        name="telefono"
        disabled={!isFormEditable} // Use new state
        placeholder="987654321"
        required
        onChange={handleInputChange} // Added onChange handler
      />

      <label htmlFor="codigo_alumno">Código Alumno:</label>
      <input
        type="text"
        id="codigo_alumno"
        name="codigo_alumno"
        disabled={!isFormEditable} // Use new state
        placeholder="U12345678"
        required
        onChange={handleInputChange} // Added onChange handler
      />

      {/* Guardar Cambios button remains at the bottom, disabled when no changes or not editing */}
      <div className="edit-button-wrapper">
        {isFormEditable && (
          <button type="submit" className="edit-button" disabled={!hasChanges}>
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

