import { createStyles, makeStyles, useTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles((theme) => createStyles({
  divider: {
    marginBottom: theme.spacing(1),
  },
}));

const Overview = ({ skills }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper square>
          <Box p={2}>
            <Typography variant="h6" align="center">
              About Me
            </Typography>
            <Divider className={classes.divider} />
            <Typography variant="body1" paragraph>
              I have always enjoyed solving puzzles and problems - engineering
              is a continual challenge to find solutions to often complex
              problems. Through hard work and dedication, I have made a
              successful career in mechanical engineering design. I started on
              a
              workshop floor and progressed, via university, now leading a
              team
              of design engineers, developing new bespoke equipment for our
              customers. As a very competent designer and draughtsman myself,
              I
              work to get the best solutions at the highest quality.
            </Typography>
            <Typography variant="body1" paragraph>
              I have always had an affinity for computers. I learnt to program
              at a very young age and have found both joy and many practical
              uses working with computers. This has allowed me to develop a
              secondary set of skills that complement my engineering
              abilities,
              offering me ways to improve quality and efficiency.
            </Typography>
            <Typography variant="body1">
              I enjoy running and hiking. At the moment much of my spare time
              is
              spent working on renovating our house. I&apos;m aiming to do as
              much as possible myself which is proving to be an interesting
              challenge!
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper square>
          <Box p={2}>
            <Typography variant="h6" align="center">
              Key Skills and Experience
            </Typography>
            <Divider className={classes.divider} />
            <Grid container>
              <Grid item xs={6}>
                <ul>
                  {skills.map((value, index) => (index % 2 === 1 ? <li>{value}</li> : ''))}
                </ul>
              </Grid>
              <Grid item xs={6}>
                <ul>
                  {skills.map((value, index) => (index % 2 !== 1 ? <li>{value}</li> : ''))}
                </ul>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

Overview.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  skills: PropTypes.array.isRequired,
};

export default Overview;
