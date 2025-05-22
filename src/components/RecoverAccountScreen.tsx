import React, { useState } from 'react';
import './RecoverAccountScreen.css'; // CSS específico para esta pantalla
import imagenRecuperar from '../assets/recuperar-cuenta.png'; // Usar la nueva imagen
import fondo from '../assets/mi-fondo.jpeg'; // Mismo fondo
import { useNavigate } from 'react-router-dom';

interface RecoverAccountScreenProps {}

const RecoverAccountScreen: React.FC<RecoverAccountScreenProps> = () => {
  const [email, setEmail] = useState<string>('');
  const navigate = useNavigate();

  const handleSendResetEmail = (): void => {
    console.log('Solicitando restablecimiento para:', { email });
    // TODO: Aquí es donde necesitas integrar la lógica de backend
    // para enviar el correo electrónico de restablecimiento.
    // Esto NO se puede hacer directamente desde el frontend por seguridad.

    // Después de enviar la solicitud al backend (y si fue exitosa):
    alert(`Si el correo ${email} está registrado, recibirás un enlace para restablecer tu contraseña.`);
    // Opcional: Navegar a una pantalla de confirmación o de vuelta al login
    // navigate('/login'); 
  };

   // Función para volver a la pantalla anterior
   const handleGoBack = (): void => {
    navigate(-1); // Vuelve a la página anterior (Login en este caso)
  };

  return (
    <div
      className="login-container"
      style={{
        background: `url(${fondo}) center/cover no-repeat`
      }}
    >
      {/* Botón de volver */}
      <button className="back-button" onClick={handleGoBack}>
        ← Volver
      </button>

      {/* Decoraciones de fondo (pueden ser las mismas) */}
      <div className="decoration-top-left"></div>
      <div className="decoration-top-right"></div>
      <div className="decoration-bottom-left"></div>
      <div className="decoration-bottom-right"></div>
      
      {/* Contenido principal */}
      <div className="login-content">
        {/* Ilustración principal (puedes usar una diferente) */}
        <div className="illustration-container">
          <div className="people-illustration">
            <img src={imagenRecuperar} alt="Recover Account illustration" />
          </div>
        </div>

        {/* Título */}
        <h1 className="login-title">Recuperar Cuenta</h1>

        {/* Descripción */}
        <p style={{ textAlign: 'center', marginBottom: '20px', color: '#555' }}>
            Ingrese su correo electrónico para recuperar su cuenta
        </p>

        {/* Formulario (solo campo de correo) */}
        <div className="form-container">
          {/* Campo de correo */}
          <div className="input-group">
            <label className="input-label">Correo</label>
            <div className="input-wrapper">
              <span className="input-icon">✉️</span>
              <input
                type="email"
                className="input-field"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required // Campo obligatorio
              />
            </div>
          </div>

          {/* Botón para enviar correo de restablecimiento */}
          <button 
            className="login-button" // Puedes usar los mismos estilos de botón
            onClick={handleSendResetEmail}
          >
            ENVIAR
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default RecoverAccountScreen; 