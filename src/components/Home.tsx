// src/components/Home.tsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Badge,
  Container,
  Paper
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DrawerSidebar from "./DrawerSidebar";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const eventosHoy = [
    {
      title: "Congreso Internacional de Psicoterapia",
      date: "17 Junio",
      time: "3:00 pm",
      img: "/assets/evento1.jpg",
    },
  ];

  const proximosEventos = [
    {
      title: "Taller de Dibujo, Anime y Más",
      date: "17 Diciembre",
      time: "3:00 pm",
      img: "/assets/evento2.jpg",
    },
  ];

  return (
    <Box>
      {/* Barra de navegación */}
      <AppBar position="static" sx={{ bgcolor: "red" }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => setMenuOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>
            Inicio
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={1} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Avatar sx={{ ml: 2 }}>U</Avatar>
        </Toolbar>
      </AppBar>

      {/* Drawer lateral */}
      <DrawerSidebar open={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Saludo con fondo rojo curvo */}
      <Box
        sx={{
          bgcolor: "red",
          color: "white",
          p: 3,
          pb: 6,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Hola, XXXXXXXX
        </Typography>
        <Typography variant="subtitle1">¿Qué haremos hoy?</Typography>
      </Box>

      {/* Contenedor principal con fondo blanco redondeado */}
      <Paper
        elevation={3}
        sx={{
          bgcolor: "white",
          borderRadius: 4,
          mt: -4,
          p: 3,
          mx: 2,
        }}
      >
        {/* Eventos de hoy */}
        <Typography variant="h6" color="red" sx={{ mb: 2, fontWeight: "bold" }}>
          Mis Eventos de Hoy
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {eventosHoy.map((evento, index) => (
            <Card key={index} sx={{ display: "flex", alignItems: "center", boxShadow: 2 }}>
              <CardMedia
                component="img"
                sx={{ width: 100 }}
                image={evento.img}
                alt={evento.title}
              />
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold" color="primary">
                  {evento.title}
                </Typography>
                <Typography variant="body2">
                  {evento.date} - {evento.time}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Próximos eventos */}
        <Typography variant="h6" color="red" sx={{ mt: 4, mb: 2, fontWeight: "bold" }}>
          Mis Próximos Eventos
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {proximosEventos.map((evento, index) => (
            <Card key={index} sx={{ display: "flex", alignItems: "center", boxShadow: 2 }}>
              <CardMedia
                component="img"
                sx={{ width: 100 }}
                image={evento.img}
                alt={evento.title}
              />
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold" color="primary">
                  {evento.title}
                </Typography>
                <Typography variant="body2">
                  {evento.date} - {evento.time}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Paper>
    </Box>
  );
}
