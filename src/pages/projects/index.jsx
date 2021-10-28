import React from "react";
import { Paper, Typography,Box } from "@mui/material";
const Projects = () => {
  return (
    <Paper>
      <Box my={3} py={10} sx={{textAlign:"center"}}>
        <Typography variant={"h3"} >My  Projects</Typography>
      </Box>
    </Paper>
  );
};

export default Projects;
