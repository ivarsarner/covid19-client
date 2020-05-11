import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
      flexDirection: 'column',
      alignItems: 'center',
    },
  }),
);

const Loader: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>Loading...</div>
      <CircularProgress />
    </div>
  );
};

export default Loader;
