// src/components/EventosAcademico.tsx
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Paper,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DrawerSidebar from "./DrawerSidebar";

export default function EventosAcademico() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const eventos = [
    {
      title: "UCV Eventos Lima Norte",
      date: "21 Junio",
      time: "5:00 pm",
      location: "Los Olivos - Lima",
      img: "/assets/evento2.jpg",
    },
    {
      title: "UCV Eventos Lima Norte",
      date: "21 Junio",
      time: "5:00 pm",
      location: "Los Olivos - Lima",
      img: "/assets/evento2.jpg",
    },
  ];

  return (
    <Box sx={{ bgcolor: "#f5dede", minHeight: "100vh" }}>
      {/* AppBar superior */}
      <AppBar position="static" sx={{ bgcolor: "red" }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => setMenuOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>
            Académico
          </Typography>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <Avatar sx={{ ml: 2 }}>U</Avatar>
        </Toolbar>
      </AppBar>

      <DrawerSidebar open={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Contenido */}
      <Container sx={{ mt: 2, pb: 4 }}>
        {eventos.map((evento, index) => (
          <Paper key={index} sx={{ p: 2, mb: 3, borderRadius: 4 }}>
            <Card sx={{ boxShadow: "none" }}>
              <CardMedia
                component="img"
                image={evento.img}
                alt={evento.title}
                sx={{ borderRadius: 2 }}
              />
              <CardContent>
                <Typography variant="caption" color="textSecondary">
                  Académico
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  {evento.title}
                </Typography>

                <Stack direction="row" alignItems="center" spacing={1} mt={1}>
                  <CalendarMonthIcon fontSize="small" />
                  <Typography variant="body2">{evento.date}</Typography>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={1}>
                  <AccessTimeIcon fontSize="small" />
                  <Typography variant="body2">{evento.time}</Typography>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={1}>
                  <LocationOnIcon fontSize="small" />
                  <Typography variant="body2">{evento.location}</Typography>
                </Stack>

                <Stack direction="row" justifyContent="flex-end" spacing={2} mt={2}>
                  <IconButton sx={{ bgcolor: "#e91e63", color: "white" }}>
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton sx={{ bgcolor: "#3f51b5", color: "white" }}>
                    <RadioButtonCheckedIcon />
                  </IconButton>
                </Stack>
              </CardContent>
            </Card>
          </Paper>
        ))}
      </Container>
    </Box>
  );
}
