import React, { useState } from 'react';
import './ResetPasswordScreen.css'; // CSS específico
import imagenReset from '../assets/imagen-login.png'; // Puedes usar una ilustración diferente
import fondo from '../assets/mi-fondo.jpeg'; // Mismo fondo
import { useNavigate, useSearchParams } from 'react-router-dom'; // Importar useSearchParams

interface ResetPasswordScreenProps {}

const ResetPasswordScreen: React.FC<ResetPasswordScreenProps> = () => {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams(); // Para leer parámetros de la URL
  const token = searchParams.get('token'); // Obtener el token de la URL

  const handleResetPassword = (): void => {
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    if (!token) {
        alert('Token de restablecimiento no encontrado.');
        // Opcional: redirigir a una página de error o al login
        // navigate('/login');
        return;
    }

    console.log('Restableciendo contraseña con token y nueva contraseña:', { token, password });
    // TODO: Aquí necesitas enviar el token y la nueva contraseña al backend
    // para que actualice la contraseña del usuario.

    // Después de enviar la solicitud al backend (y si fue exitosa):
    alert('Contraseña restablecida con éxito. Ya puedes iniciar sesión.');
    navigate('/'); // Redirigir al login después del éxito
  };

   // Opcional: Función para volver (si quieres un botón de volver en esta pantalla)
  // const handleGoBack = (): void => {
  //   navigate(-1); 
  // };

  return (
    <div
      className="login-container"
      style={{
        background: `url(${fondo}) center/cover no-repeat`
      }}
    >
      {/* Puedes añadir un botón de volver si quieres */}
      {/* <button className="back-button" onClick={handleGoBack}> ← Volver </button> */}

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
            {/* Usé la imagen de login temporalmente, cámbiala si tienes una para restablecer contraseña */}
            <img src={imagenReset} alt="Reset Password illustration" />
          </div>
        </div>

        {/* Título */}
        <h1 className="login-title">Restablecer Contraseña</h1>

        {/* Descripción (opcional) */}
        {/* <p style={{ textAlign: 'center', marginBottom: '20px', color: '#555' }}>\n            Ingrese su nueva contraseña\n        </p> */}

        {/* Formulario */}
        <div className="form-container">

          {/* Campo de nueva contraseña */}
          <div className="input-group">
            <label className="input-label">Nueva Contraseña</label>
            <div className="input-wrapper">
              <span className="input-icon">🔒</span>
              <input
                type={showPassword ? 'text' : 'password'}
                className="input-field"
                placeholder="••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
               <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '👁️' : '🙈'}
              </button>
            </div>
          </div>

          {/* Campo de confirmar nueva contraseña */}
          <div className="input-group">
            <label className="input-label">Confirmar Contraseña</label>
            <div className="input-wrapper">
              <span className="input-icon">🔒</span>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                className="input-field"
                placeholder="••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? '👁️' : '🙈'}
              </button>
            </div>
          </div>

          {/* Botón para restablecer contraseña */}
          <button 
            className="login-button" // Usamos los mismos estilos de botón
            onClick={handleResetPassword}
          >
            REESTABLECER CONTRASEÑA
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordScreen; 