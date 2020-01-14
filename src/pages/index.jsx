import { createStyles, makeStyles, useTheme } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { v4 as uuid } from 'uuid/v4';
import {
  KeyboardArrowDown as KeyboardArrowDownIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
} from '@material-ui/icons';
import Header from '../components/Header';
import Job from '../components/Job';
import Overview from '../components/Overview';
import TabPanel from '../components/TabPanel';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },
  divider: {
    marginBottom: theme.spacing(1),
  },
  link: {
    color: theme.palette.primary,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  linkButton: {
    color: theme.palette.primary,
    textDecoration: 'none',
  },
}));

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

const Index = ({ data }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [value, setValue] = React.useState(0);

  const { skills } = data.allSkillsJson.edges[0].node;
  const jobs = data.allJobsJson.edges;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Header />
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="Curriculum Vitae" {...a11yProps(1)} />
          <Tab label="Portfolio" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel index={0} value={value}>
        <Overview skills={skills} />
      </TabPanel>
      <TabPanel index={1} value={value}>
        <Box m={2}>
          <Grid container justify="space-between">
            <Grid item>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a name="experience">
                <Typography variant="h4">Experience</Typography>
              </a>
            </Grid>
            <Grid item>
              <a href="#education" className={classes.linkButton}>
                <Button variant="outlined" size="large">
                  <KeyboardArrowDownIcon />
                &nbsp;Go to Education &amp; Qualification
                </Button>
              </a>
            </Grid>
          </Grid>
        </Box>
        <Grid container spacing={2}>
          {jobs.map((job) => (<Job key={uuid} job={job.node} />))}
        </Grid>
        <Box m={2}>
          <Grid container justify="space-between">
            <Grid item>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a name="education">
                <Typography variant="h4">
                Education &amp; Qualification
                </Typography>
              </a>
            </Grid>
            <Grid item>
              <a href="#experience" className={classes.linkButton}>
                <Button variant="outlined" size="large">
                  <KeyboardArrowUpIcon />
                  &nbsp;Go to Experience
                </Button>
              </a>
            </Grid>
          </Grid>
        </Box>
        <Paper square>
          <Box p={2}>
            <Grid container spacing={2}>
              <Grid item md={6}>
                <Typography variant="h5">
                  MEng Space Systems Engineering
                </Typography>
                <Typography variant="subtitle1">
                  2009&nbsp;-&nbsp;2013
                </Typography>
              </Grid>
              <Grid item md={6}>
                <Typography variant="h5" align="right">
                  University of Southampton
                </Typography>
                <Typography variant="subtitle1" align="right">
                  <a href="https://www.southampton.ac.uk/" className={classes.link}>
                    https://www.southampton.ac.uk/
                  </a>
                </Typography>
              </Grid>
              <Grid item md={12}>
                <Typography variant="body1" paragraph>
                  I achieved a master of engineering (MEng) degree
                  (classification 2:1) in space systems engineering. The course
                  involved mechanical engineering principles: mathematics,
                  dynamics, fluids, design, management, etc., as well as systems
                  engineering principles and spacecraft specific engineering
                  topics. I additionally specialised in optimisation and
                  computational methods.
                </Typography>
                <Typography variant="h6">Notable Achievements</Typography>
                <ul>
                  <li>President of the Engineering Society (2010-2011)</li>
                  <li>Chairperson of the Engineering Society (2011-2012)</li>
                  <li>Webmaster of the Engineering Society (2012-2013)</li>
                </ul>
                <Typography variant="h6">Qualification Details</Typography>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>Degree:</TableCell>
                      <TableCell>Master of Engineering</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Classification:</TableCell>
                      <TableCell>Second Class with Honours (Upper Division)</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Subject:</TableCell>
                      <TableCell>Space Systems Engineering</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Institution:</TableCell>
                      <TableCell>University of Southampton</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Date Awarded:</TableCell>
                      <TableCell>28 June 2013</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Date of Admission:</TableCell>
                      <TableCell>1 August 2009</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>HESA ID:</TableCell>
                      <TableCell>0911602181269</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <Typography variant="body1">
                  <br />
                  A copy of my degree certificate can be provided upon request.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Paper>
        <Paper square>
          <Box p={2}>
            <Grid container spacing={2}>
              <Grid item md={6}>
                <Typography variant="h5">
                  A-Levels &amp; GCSEs
                </Typography>
                <Typography variant="subtitle1">
                  2001&nbsp;-&nbsp;2006
                </Typography>
              </Grid>
              <Grid item md={6}>
                <Typography variant="h5" align="right">
                  Midhurst Grammar School
                </Typography>
                <Typography variant="subtitle1" align="right">
                  <a href="https://en.wikipedia.org/wiki/Midhurst_Grammar_School" className={classes.link}>
                    https://en.wikipedia.org/wiki/Midhurst_Grammar_School
                  </a>
                </Typography>
              </Grid>
              <Grid item md={12}>
                <Typography variant="body1" paragraph>
                  Midhurst Grammar School no longer exists; it closed in
                  December 2008 after 336 years. It re-opened shortly afterwards
                  as Midhurst Rother Academy. Former students include the
                  geologist Charles Lyell and author H. G. Wells.
                </Typography>
                <Typography variant="h6">A-Levels</Typography>
                <Typography variant="body1">
                  Certificate copies available upon request.
                </Typography>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Subject</TableCell>
                      <TableCell>Level</TableCell>
                      <TableCell>Grade</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>Physics</TableCell>
                      <TableCell>A2</TableCell>
                      <TableCell>A</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Design and Technology: Product Design</TableCell>
                      <TableCell>A2</TableCell>
                      <TableCell>A</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Mathematics</TableCell>
                      <TableCell>A2</TableCell>
                      <TableCell>B</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Chemistry</TableCell>
                      <TableCell>A2</TableCell>
                      <TableCell>B</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Religion &amp; Philosophy</TableCell>
                      <TableCell>AS</TableCell>
                      <TableCell>B</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <br />
                <Typography variant="h6">GCSEs</Typography>
                <Typography variant="body1">
                  Certificate copies available upon request.
                </Typography>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Subject</TableCell>
                      <TableCell>Grade</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>English / English Literature</TableCell>
                      <TableCell>A / A*</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Mathematics</TableCell>
                      <TableCell>A</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Science (Double Award)</TableCell>
                      <TableCell>A* / A*</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Geography</TableCell>
                      <TableCell>A</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Business Studies</TableCell>
                      <TableCell>B</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Design &amp; Technology: Product Design</TableCell>
                      <TableCell>C</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>French</TableCell>
                      <TableCell>C</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Religious Studies</TableCell>
                      <TableCell>C</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <br />
                <Typography variant="h6">Notable Achievements</Typography>
                <ul>
                  <li>Head Boy (2003-2014)</li>
                  <li>Gifted and Talented Register</li>
                </ul>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </TabPanel>
      <TabPanel index={2} value={value}>
        Update in progress
      </TabPanel>
    </div>
  );
};

Index.propTypes = {
  data: PropTypes.shape({
    allSkillsJson: PropTypes.object,
    allJobsJson: PropTypes.object,
  }),
};

Index.defaultProps = {
  data: {
    allSkillsJson: {
      edges: {
        node: {
          skills: ['No skills loaded'],
        },
      },
    },
  },
};

export default Index;

export const query = graphql`
  query {
    allSkillsJson {
      edges {
        node {
          skills
        }
      }
    }
    allJobsJson(sort: {order: DESC, fields: from}) {
      edges {
        node {
          id
          company
          companyUrl
          description
          achievements
          from
          title
          to
          roles
          references
        }
      }
    }
  }
`;
