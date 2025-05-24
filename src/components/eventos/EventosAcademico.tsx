// src/components/EventosAcademico.tsx
import React, { useState, useEffect } from "react";
import { getAllEvents, Event } from '../../services/eventService';
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
import DrawerSidebar from "../DrawerSidebar";

export default function EventosAcademico() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const fetchedEvents = await getAllEvents();
        setEvents(fetchedEvents);
      } catch (error) {
        console.error('Failed to fetch academic events:', error);
        // Handle error appropriately, e.g., show an error message to the user
      }
    };

    fetchEvents();
  }, []);

  // You might want to filter events based on type 'Académico' if your backend supports it
  // For now, displaying all fetched events as academic events
  const academicEvents = events; // Apply filtering if needed

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
        {academicEvents.map((evento) => (
          <Paper key={evento.id} sx={{ p: 2, mb: 3, borderRadius: 4 }}>
            <Card sx={{ boxShadow: "none" }}>
              {/* Assuming you have an image URL in eventDetails or event object */}
              {/* <CardMedia
                component="img"
                image={evento.img} // Replace with actual image source from event data
                alt={evento.name}
                sx={{ borderRadius: 2 }}
              /> */}
              <CardContent>
                <Typography variant="caption" color="textSecondary">
                  {evento.eventType?.title || 'Académico'} {/* Display event type if available */}
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  {evento.name}
                </Typography>

                {/* Display event details from event.eventDetails */}
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
