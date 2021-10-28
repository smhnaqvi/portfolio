import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Routes from "./routes";
import { Paper, Grid, Box, CssBaseline } from "@mui/material";
import StoreProvider from "./store/index";
import ProfileProvider from "./store/profile";

import Profile from "./components/profile";

import { ThemeProvider } from "@mui/material/styles";
import LightThemeConfig, { DarkThemeConfig } from "./assets/theme";
import "./assets/styles/global.scss";

import Menu from "./components/Menu";

export default function App() {
  const [dark, setDark] = useState(false);

  const updateTheme = () => {
    setDark(!dark);
  };

  return (
    <StoreProvider>
      <ThemeProvider theme={dark ? DarkThemeConfig : LightThemeConfig}>
        <Box
          sx={{
            height: "100vh"
          }}
        >
          <CssBaseline />
          <BrowserRouter>
            <Grid container spacing={3}>
              <Grid item lg={3}>
                <Paper square={true}>
                  <ProfileProvider>
                    <Profile />
                  </ProfileProvider>
                </Paper>
              </Grid>
              <Grid item lg={8}>
                {Routes.map((route, i) => {
                  return (
                    <Route
                      key={"route-" + i}
                      exact
                      path={route.path}
                      component={route.component}
                    />
                  );
                })}
              </Grid>
              <Grid item lg={1} position={"fixed"} right={0}>
                <Menu updateTheme={updateTheme} />
              </Grid>
            </Grid>
          </BrowserRouter>
        </Box>
      </ThemeProvider>
    </StoreProvider>
  );
}
