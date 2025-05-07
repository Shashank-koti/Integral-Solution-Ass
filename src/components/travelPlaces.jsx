import React, { useState } from "react";
import { Box, Typography, List, ListItem, Paper, Divider } from "@mui/material";

const TravelPlaces = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const places = [
    { from: "Paris", to: "London", description: "A beautiful journey between two iconic cities." },
    { from: "Tokyo", to: "New York", description: "A long flight from Asia to America with amazing sights." },
  ];

  const handleClick = (place) => {
    setSelectedPlace(place);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Stacks the items vertically on small screens, side by side on medium screens
        maxWidth: "1000px",
        margin: "auto",
        mt: 5,
        gap: { xs: 2, md: 4 }, // Adds space between the sections based on screen size
      }}
    >
      <Box sx={{ flex: 1, maxWidth: { xs: "100%", md: 400 } }}>
        <Typography variant="h4" align="center" gutterBottom>
          Travel Places
        </Typography>
        <List>
          {places.map((place, index) => (
            <ListItem key={index} sx={{ p: 0 }}>
              <Paper
                elevation={3}
                sx={{
                  p: 2,
                  m: 1,
                  width: "100%",
                  borderRadius: 2,
                  cursor: "pointer",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.02)",
                    backgroundColor: "#808080",
                  },
                }}
                onClick={() => handleClick(place)}
              >
                <Typography>
                  From <strong>{place.from}</strong> to <strong>{place.to}</strong>
                </Typography>
              </Paper>
            </ListItem>
          ))}
        </List>
      </Box>

      <Divider orientation="vertical" flexItem sx={{ mx: 3, display: { xs: "none", md: "block" } }} />

      <Box
        sx={{
            flex: 1,
            padding: 3,
          width: "100%",
        }}
      >
        {selectedPlace ? (
          <>
            <Typography variant="h5" gutterBottom>
              Details:
            </Typography>
            <Typography variant="h6">
              From: <strong>{selectedPlace.from}</strong>
            </Typography>
            <Typography variant="h6">
              To: <strong>{selectedPlace.to}</strong>
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Description: {selectedPlace.description}
            </Typography>
          </>
        ) : (
          <Typography variant="h6">Select a place to see the details.</Typography>
        )}
      </Box>
    </Box>
  );
};

export default TravelPlaces;
