import React from "react";
import useProfile from "../../store/profile/profile.hook";
import "../profile/profile.scss";
import CircularProgress from "@mui/material/CircularProgress";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Typography, Divider, Grid } from "@mui/material";

import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Item = ({ children }) => (
  <Grid item container alignItems={"center"} flexDirection={"column"}>
    {children}
  </Grid>
);

const SocialIcon = ({ children }) => {
  return (
    <Grid
      sx={{
        background: "rgb(255 179 0)",
        borderRadius: "50px",
        padding: "8px",
        margin: "10px",
        alignItems: "center",
        justifyContent: "center",
        display: "flex"
      }}
    >
      {children}
    </Grid>
  );
};

const Profile = () => {
  const { profile } = useProfile();
  return (
    <React.Fragment>
      {profile === undefined ? (
        <CircularProgress />
      ) : (
        <Stack
          pt={6.25}
          px={5}
          alignItems={"center"}
          direction="column"
          spacing={2}
          divider={<Divider orientation="horizontal" flexItem />}
        >
          <Item>
            <Avatar
              className={"avatar"}
              sx={{ width: 150, height: 150 }}
              alt={profile.name}
              src={profile.avatar_url}
            />
            <Typography variant={"h3"}>{"smhnaqvi"}</Typography>
            <Typography>{"Front-End Developer"}</Typography>
            <Grid item container justifyContent={"center"}>
              <SocialIcon>
                <FacebookIcon fontSize={"small"} />
              </SocialIcon>
              <SocialIcon>
                <InstagramIcon fontSize={"small"} />
              </SocialIcon>
              <SocialIcon item>
                <TwitterIcon fontSize={"small"} />
              </SocialIcon>
              <SocialIcon item>
                <LinkedInIcon fontSize={"small"} />
              </SocialIcon>
            </Grid>
          </Item>
          <Item item>
            <Typography></Typography>
          </Item>
        </Stack>
      )}
    </React.Fragment>
  );
};

export default Profile;
