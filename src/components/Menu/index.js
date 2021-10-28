import React from "react";
import { Paper, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import { useTheme } from "@mui/material/styles";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";

const Menu = (props) => {
  const [value, setValue] = React.useState("recents");
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Paper square={true}>
      {/* <Link>theme</Link>
      <Link to={"/"}>
        <HomeIcon />
      </Link>
      <Link to={"/profile"}>Profile</Link> */}
      <Grid item></Grid>
      <Grid item container alignItems={"center"} sx={{ height: "100vh" }}>
        <BottomNavigation
          sx={{ width: "100%", background: "none", flexDirection: "column" }}
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction
            onClick={() => props.updateTheme()}
            label={theme.palette.mode}
            value={theme.palette.mode}
            icon={
              theme.palette.mode === "dark" ? (
                <LightModeIcon />
              ) : (
                <DarkModeIcon />
              )
            }
          />
          <BottomNavigationAction
            LinkComponent={Link}
            to={"/"}
            label="Home"
            value="home"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            LinkComponent={Link}
            to={"/projects"}
            label="Projects"
            value="projects"
            icon={<CodeIcon />}
          />
          <BottomNavigationAction
            LinkComponent={Link}
            to={"/education"}
            label="Education"
            value="education"
            icon={<SchoolIcon />}
          />
          <BottomNavigationAction
            LinkComponent={Link}
            to={"/experience"}
            label="Experience"
            value="experience"
            icon={<WorkIcon />}
          />
        </BottomNavigation>
      </Grid>
    </Paper>
  );
};

export default Menu;
