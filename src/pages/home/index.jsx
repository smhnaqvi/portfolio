import React from "react";
import Profile from "./../../components/profile";
import { Button, Paper, Typography } from "@mui/material";
const Home = () => {
  return (
    <Paper>
      <Typography variant="h3">Hi!</Typography>
      <Button color="primary" variant="contained">
        HIRE ME
      </Button>
    </Paper>
  );
};

export default Home;
