import { createStyles, makeStyles, useTheme } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
  Facebook as FacebookIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles((theme) => createStyles({
  avatar: {
    width: '150px',
    height: 'auto',
    borderRadius: theme.spacing(0.25),
    borderWidth: theme.spacing(0.25),
    borderColor: theme.palette.background.paper,
    borderStyle: 'solid',
  },
}));

const Header = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box m={3}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <Avatar
            variant="square"
            alt="Stephen Lewis"
            src="/images/avatar.jpg"
            className={classes.avatar}
          />
        </Grid>
        <Grid item>
          <Typography variant="h4">Stephen Lewis</Typography>
          <Typography variant="h6">Engineering Design Manager</Typography>
          <Toolbar disableGutters>
            <IconButton size="large" color="inherit">
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton size="large" color="inherit">
              <FacebookIcon fontSize="large" />
            </IconButton>
            <IconButton size="large" color="inherit">
              <GitHubIcon fontSize="large" />
            </IconButton>
          </Toolbar>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
