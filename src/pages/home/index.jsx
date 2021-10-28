import React from "react";
import PersonImage from "./../../assets/images/person.png";
import { Button, Box, Paper, Typography } from "@mui/material";
import "./style.scss";
const Home = () => {
  return (
    <Paper>
      <Box className={"homeBanner"}>
        <img alt={"person image"} className={"personImage"} src={PersonImage} />
        <Box className={"info"}>
          <Box mb={1}>
            <Typography sx={{ fontWeight: 700 }} variant="h3">
              I'm Syed Hussain Naqvi
            </Typography>
            <Box mb={2}>
              <Typography
                component={"span"}
                color={"primary"}
                sx={{ fontWeight: 700 }}
                variant="h4"
                mr={1}
              >
                Front-End
              </Typography>
              <Typography
                component={"span"}
                sx={{ fontWeight: 700 }}
                variant="h4"
              >
                Developer
              </Typography>
            </Box>
          </Box>

          <Box mb={5}>
            <Button size={"large"} color="primary" variant="contained">
              <Typography
                sx={{ fontWeight: 700, fontSize: 16 }}
                variant={"button"}
              >
                HIRE ME
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default Home;
