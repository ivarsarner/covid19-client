import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 2),
  },
}));

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
          Covid-19 cases in USA
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          The table below uses data from <a href="https://covidtracking.com">covidtracking.com</a> to show the amount of
          people who are hospitalized in USA.
        </Typography>
      </Container>
    </div>
  );
};

export default Header;
