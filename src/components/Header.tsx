import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  headerContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 2),
  },
}));

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <Container className={classes.headerContent}>
      <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
        Covid-19 cases in USA
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" paragraph>
        The table below uses data from <a href="https://covidtracking.com">The COVID Tracking Project</a> to show the
        amount of hospitalized patients in USA, as well as new deaths in the last 3 days.
      </Typography>
    </Container>
  );
};

export default Header;
