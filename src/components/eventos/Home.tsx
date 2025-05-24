// src/components/Home.tsx
import React, { useState, useEffect } from "react";
import { getAllEvents, Event } from '../../services/eventService';
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
  Paper,
  Stack
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DrawerSidebar from "../DrawerSidebar";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [allEvents, setAllEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const events = await getAllEvents();
        setAllEvents(events);
      } catch (error) {
        // Handle error appropriately
        console.error('Failed to fetch events:', error);
      }
    };

    fetchEvents();
  }, []);

  // You might want to filter allEvents into eventosHoy and proximosEventos based on date
  const eventosHoy: Event[] = []; // Filter logic here
  const proximosEventos: Event[] = allEvents; // For now, display all events as upcoming

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
          {eventosHoy.map((evento) => (
            <Card key={evento.id} sx={{ display: "flex", alignItems: "center", boxShadow: 2 }}>
              {/* Assuming you have an image URL in eventDetails or event object */}
              {/* <CardMedia
                component="img"
                sx={{ width: 100 }}
                image={evento.img} // Replace with actual image source from event data
                alt={evento.name}
              /> */}
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold" color="primary">
                  {evento.name}
                </Typography>
                {/* Display relevant event details like date, time, location from event.eventDetails */}
                {/* <Typography variant="body2">
                  {evento.date} - {evento.time}
                </Typography> */}
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Próximos eventos */}
        <Typography variant="h6" color="red" sx={{ mt: 4, mb: 2, fontWeight: "bold" }}>
          Mis Próximos Eventos
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {proximosEventos.map((evento) => (
            <Card key={evento.id} sx={{ display: "flex", alignItems: "center", boxShadow: 2 }}>
               {/* Assuming you have an image URL in eventDetails or event object */}
              {/* <CardMedia
                component="img"
                sx={{ width: 100 }}
                image={evento.img} // Replace with actual image source from event data
                alt={evento.name}
              /> */}
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold" color="primary">
                  {evento.name}
                </Typography>
                 {/* Display relevant event details like date, time, location from event.eventDetails */}
                 {evento.eventDetails && evento.eventDetails.length > 0 && (
                  <>
                    <Stack direction="row" alignItems="center" spacing={1} mt={1}>
                      <CalendarMonthIcon fontSize="small" />
                      <Typography variant="body2">{evento.eventDetails[0].startDate} - {evento.eventDetails[0].endDate}</Typography>
                    </Stack>

                    <Stack direction="row" alignItems="center" spacing={1}>
                      <AccessTimeIcon fontSize="small" />
                      <Typography variant="body2">{evento.eventDetails[0].startTime} - {evento.eventDetails[0].endTime}</Typography>
                    </Stack>

                    <Stack direction="row" alignItems="center" spacing={1}>
                      <LocationOnIcon fontSize="small" />
                      <Typography variant="body2">{evento.eventDetails[0].location}</Typography>
                    </Stack>
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </Box>
      </Paper>
    </Box>
  );
}
