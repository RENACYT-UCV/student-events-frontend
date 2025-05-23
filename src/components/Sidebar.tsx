import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Home as HomeIcon,
  Event as EventIcon,
  History as HistoryIcon,
  Person as PersonIcon,
  ExitToApp as ExitIcon,
  ExpandMore,
  ExpandLess,
  School,
  SportsSoccer,
  Palette,
  RecordVoiceOver,
  VolunteerActivism,
  EmojiPeople,
  Work,
  Menu as MenuIcon,
} from "@mui/icons-material";

export default function Sidebar({ onClose }: { onClose?: () => void }) {
  const [showEventos, setShowEventos] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Aquí puedes limpiar datos del usuario si estás usando localStorage, cookies, etc.
    // localStorage.removeItem("token"); por ejemplo
    navigate("/login"); // Redirige al login
    if (onClose) onClose(); // Cierra el drawer si está abierto
  };

  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Encabezado rojo con UniEventos y hamburguesa */}
      <div
        style={{
          background: "red",
          color: "white",
          padding: "10px 15px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {onClose && (
          <MenuIcon onClick={onClose} style={{ cursor: "pointer" }} />
        )}
        <span style={{ fontWeight: "bold", fontSize: "18px" }}>UniEventos</span>
      </div>

      {/* Menú blanco */}
      <div
        style={{
          background: "white",
          flex: 1,
          padding: "20px",
          overflowY: "auto",
          position: "relative",
        }}
      >
        <SidebarItem icon={<HomeIcon />} label="Inicio" to="/" />
        <SidebarItem
          icon={<EventIcon />}
          label="Eventos"
          onClick={() => setShowEventos(!showEventos)}
        >
          {showEventos ? <ExpandLess /> : <ExpandMore />}
        </SidebarItem>

        {showEventos && (
          <div style={{ paddingLeft: "20px", color: "blue" }}>
            <SidebarItem icon={<School />} label="Académico" to="/eventos/academico" />
            <SidebarItem icon={<SportsSoccer />} label="Deportivo" to="/eventos/deportivo" />
            <SidebarItem icon={<Palette />} label="Cultural" to="/eventos/cultural" />
            <SidebarItem icon={<RecordVoiceOver />} label="Charlas y Conferencias" to="/eventos/charlas" />
            <SidebarItem icon={<VolunteerActivism />} label="Voluntariados" to="/eventos/voluntariados" />
            <SidebarItem icon={<EmojiPeople />} label="Orientación" to="/eventos/orientacion" />
            <SidebarItem icon={<Work />} label="Presentaciones de P y E" to="/eventos/pe" />
          </div>
        )}

        <SidebarItem icon={<HistoryIcon />} label="Historial" to="/historial" />
        <SidebarItem icon={<PersonIcon />} label="Mi Perfil" to="/perfil" />

        {/* Botón de cerrar sesión */}
        <div
          onClick={handleLogout}
          style={{ position: "absolute", bottom: "20px", left: "20px", cursor: "pointer" }}
        >
          <SidebarItem icon={<ExitIcon />} label="Cerrar Sesión" red />
        </div>
      </div>
    </div>
  );
}

function SidebarItem({
  icon,
  label,
  to,
  onClick,
  children,
  red = false,
}: any) {
  return (
    <div style={{ marginBottom: "10px" }} onClick={onClick}>
      {to ? (
        <Link
          to={to}
          style={{
            textDecoration: "none",
            color: red ? "red" : "blue",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {icon}
          <span>{label}</span>
        </Link>
      ) : (
        <div
          style={{
            color: "blue",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {icon}
          <span>{label}</span>
          {children}
        </div>
      )}
    </div>
  );
}
