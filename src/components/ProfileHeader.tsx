import React, { useRef, useState } from 'react';
import './ProfileHeader.css';
import { useLocation } from 'react-router-dom';

const ProfileHeader: React.FC = () => {
  const location = useLocation();
  const isEditing = location.pathname === "/edit-profile";

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleEditPhotoClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log("📸 Imagen seleccionada:", file);
      setSelectedImage(file);
      // A este `file` lo puedes mandar al backend luego en el submit
    }
  };

  return (
    <div className='profile-body-container'>
      <div className="profile-header-wrapper">
        <img src='/assets/images/background_1(1).png' alt="Fondo perfil" className="profile-background-image" />

        <div className="profile-header">
          <div className="profile-content">
            <div className="profile-pin">

              {isEditing && (
                <div className='edit-pin-photo' onClick={handleEditPhotoClick}>
                  <img src='/assets/images/editIcon_darkMode.svg' alt="Editar" className='edit-icon-photo' />
                </div>
              )}

              <img src='/assets/images/userPhoto.svg' alt="Foto de usuario" className="pin-photo" />
              <img src='/assets/images/userFrame.svg' alt="Marco de perfil" className="pin-frame" />

              {/* Hidden file input */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: 'none' }}
                accept="image/*"
              />
            </div>

            <div className="profile-text">
              <h1>
                Hola, <span id="user-name">user</span>!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
