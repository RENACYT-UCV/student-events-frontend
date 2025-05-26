import React, { useState, useEffect } from 'react'
import './ProfileForm.css'
// import { useLocation, useNavigate } from 'react-router-dom'
// import { useAccessToken } from '@store/auth.store'
import { useProfile } from '@/hooks/user/use-profile'

const ProfileForm: React.FC = () => {
  // const location = useLocation()
  // const navigate = useNavigate()

  const [showPopup, setShowPopup] = useState(false)
  const [isFormEditable, setIsFormEditable] = useState(false)
  const [hasChanges, setHasChanges] = useState(false)

  const { profile, proifileLoading } = useProfile()
  // console.log('ProfileForm rendered', profile, profileSuccess)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!isFormEditable || !hasChanges) return

    const form = e.target as HTMLFormElement
    const data = {
      nombre: form.nombre.value,
      apellido: form.apellido.value,
      correo: form.correo.value,
      carrera: form.carrera.value,
      telefono: form.telefono.value,
      codigo_alumno: form.codigo_alumno.value
    }

    console.log('Datos enviados:', data)
    setShowPopup(true)
    setIsFormEditable(false)
    setHasChanges(false)
  }

  const handleEditClick = () => {
    setIsFormEditable(true)
    setHasChanges(false)
  }

  const handleInputChange = () => {
    if (isFormEditable) {
      setHasChanges(true)
    }
  }

  // useEffect(() => {
  //   if (showPopup) {
  //     const timer = setTimeout(() => {
  //       setShowPopup(false)
  //       // Puedes redirigir si deseas: navigate('/profile');
  //     }, 1500)
  //     return () => clearTimeout(timer)
  //   }
  // }, [showPopup])

  return (
    <>
      <form className={`profile-form ${isFormEditable ? 'editing' : ''}`} onSubmit={handleSubmit}>
        <div className="form-header-with-button">
          <h2 className="text-8xl">Información Personal</h2>
          {!isFormEditable && (
            <button type="button" className="edit-button-inline" onClick={handleEditClick}>
              Editar Perfil
              <img
                src="/assets/images/editIcon_darkMode.svg"
                alt="Editar"
                className="icon-right"
                width={20}
              />
            </button>
          )}
        </div>

        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          disabled={!isFormEditable}
          placeholder={!proifileLoading ? 'asdf' : 'Juan Nicolás'}
          required
          onChange={handleInputChange}
        />

        <label htmlFor="apellido">Apellido:</label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          disabled={!isFormEditable}
          placeholder="Pérez Nuñez"
          required
          onChange={handleInputChange}
        />

        <label htmlFor="correo">Correo:</label>
        <input
          type="email"
          id="correo"
          name="correo"
          disabled={!isFormEditable}
          placeholder="juanNicolas123@correo.com"
          required
          onChange={handleInputChange}
        />

        <label htmlFor="carrera">Carrera:</label>
        <input
          type="text"
          id="carrera"
          name="carrera"
          disabled={!isFormEditable}
          placeholder="Ingeniería de Sistemas"
          required
          onChange={handleInputChange}
        />

        <label htmlFor="telefono">Teléfono:</label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          disabled={!isFormEditable}
          placeholder="987654321"
          required
          onChange={handleInputChange}
        />

        <label htmlFor="codigo_alumno">Código Alumno:</label>
        <input
          type="text"
          id="codigo_alumno"
          name="codigo_alumno"
          disabled={!isFormEditable}
          placeholder="U12345678"
          required
          onChange={handleInputChange}
        />

        {isFormEditable && (
          <div className="edit-button-wrapper">
            <div className="edit-button-row">
              <button type="submit" className="edit-button" disabled={!hasChanges}>
                Guardar Cambios
              </button>
              <button
                type="button"
                className="cancel-button"
                onClick={() => {
                  setIsFormEditable(false)
                  setHasChanges(false)
                  // navigate('/profile'); // Descomenta si quieres volver a la vista anterior
                }}
              >
                Cancelar
              </button>
            </div>
          </div>
        )}
      </form>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <img src="/assets/images/checkIcon.svg" alt="check" className="popup-icon" width={60} />
            <p className="popup-text">¡Cambios guardados exitosamente!</p>
          </div>
        </div>
      )}
    </>
  )
}

export default ProfileForm
