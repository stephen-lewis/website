import { createStyles, makeStyles, useTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid/v4';

const useStyles = makeStyles((theme) => createStyles({
  divider: {
    marginTop: theme.spacing(0.75),
    marginBottom: theme.spacing(1),
  },
  link: {
    color: theme.palette.primary,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const Job = ({ job }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Grid item xs={12}>
      <Paper square>
        <Box p={2}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Typography variant="h5">{job.title}</Typography>
              <Typography variant="subtitle1">
                {job.from}
                &nbsp;-&nbsp;
                {job.to}
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Typography variant="h5" align="right">{job.company}</Typography>
              <Typography variant="subtitle1" align="right">
                <a href={job.companyUrl} className={classes.link}>{job.companyUrl}</a>
              </Typography>
            </Grid>
            <Grid item md={12}>
              {job.description.map((para, index, all) => (<Typography key={uuid} variant="body1" paragraph={index !== (all.length - 1)}>{para}</Typography>))}
            </Grid>
            <Grid item md={12}>
              <Divider className={classes.divider} />
              <Typography variant="h6">Roles &amp; Responsibilities</Typography>
              <ul>
                {job.roles.map((role) => (<li>{role}</li>))}
              </ul>
            </Grid>
            <Grid item md={12}>
              <Typography variant="h6">Key Achievements</Typography>
              <ul>
                {job.achievements.map((achievement) => (<li>{achievement}</li>))}
              </ul>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Grid>
  );
};

Job.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  job: PropTypes.object.isRequired,
};

export default Job;
