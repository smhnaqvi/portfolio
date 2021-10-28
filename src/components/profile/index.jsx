import React from "react";
import useProfile from "../../store/profile/profile.hook";
import "../profile/profile.scss";
import CircularProgress from "@mui/material/CircularProgress";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Typography, Divider, Box, Grid } from "@mui/material";
import LinearProgress, {
  linearProgressClasses
} from "@mui/material/LinearProgress";

import { makeStyles, styled } from "@mui/styles";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Item = ({ children }) => (
  <Grid
    item
    container
    alignItems={"center"}
    flexDirection={"column"}
    rowSpacing={2}
  >
    {children}
  </Grid>
);

const SocialIcon = ({ children }) => {
  return (
    <Grid
      sx={{
        background: "rgb(255 179 0)",
        borderRadius: "50px",
        padding: "5px",
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
          py={6.25}
          px={4}
          alignItems={"center"}
          direction="column"
          spacing={2}
          divider={<Divider orientation="horizontal" flexItem />}
        >
          <Item>
            <Grid item container justifyContent={"center"} mb={3}>
              <Avatar
                className={"avatar"}
                sx={{ width: 150, height: 150 }}
                alt={profile.name}
                src={profile.avatar_url}
              />
            </Grid>
            <Grid item container justifyContent={"center"}>
              <Typography variant={"h4"}>{"smhnaqvi"}</Typography>
            </Grid>
            <Grid item container justifyContent={"center"}>
              <Typography color={"GrayText"} variant={"h6"}>
                {"Front-End Developer"}
              </Typography>
            </Grid>
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
          <Item item container>
            <PersonalInformation />
          </Item>
          <Item item container>
            <MySkills />
          </Item>
        </Stack>
      )}
    </React.Fragment>
  );
};

const PersonalInformation = () => {
  const useStyles = makeStyles((theme) => ({
    value: {
      fontSize: 15
    },
    key: {
      padding: "0 10px",
      backgroundColor: theme.palette.primary.main
    }
  }));
  const classes = useStyles();
  const InfoItem = ({ title, value, valueStyle }) => (
    <Grid item container justifyContent={"space-between"}>
      <div className={classes.key}>{title}</div>
      <Typography variant={"span"} className={classes.value} sx={valueStyle}>
        {value}
      </Typography>
    </Grid>
  );

  return (
    <React.Fragment>
      <InfoItem title={"Age:"} value={"24"} />
      <InfoItem
        title={"Freelance:"}
        value={"Available"}
        valueStyle={{ color: "#7EB942", fontWeight: "900" }}
      />
      <InfoItem title={"Address:"} value={"Mashhad Iran"} />
    </React.Fragment>
  );
};

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  borderRadius: 10,
  height: 10,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800]
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 10,
    backgroundColor: theme.palette.primary.main
  }
}));

const MySkills = () => {
  const Skills = ({ title, value }) => (
    <Grid item container flexDirection={"column"} mb={2}>
      <Grid
        item
        container
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography color={"textGray"}>{title}</Typography>
        <Typography ml={1} color={"textGray"}>
          %{value}
        </Typography>
      </Grid>
      <Grid item sx={{ flexGrow: 1 }}>
        <BorderLinearProgress variant="determinate" value={value} />
      </Grid>
    </Grid>
  );
  return (
    <React.Fragment>
      <Grid item container>
        <Typography variant={"h6"}>Skills</Typography>
      </Grid>
      <Grid item container>
        <Skills title={"PHP"} value={"90"} />
        <Skills title={"Javascript"} value={"90"} />
        <Skills title={"ReactJS"} value={"90"} />
        <Skills title={"CSS3"} value={"90"} />
        <Skills title={"HTML5"} value={"90"} />
      </Grid>
    </React.Fragment>
  );
};

export default Profile;
