import React from 'react';
import { CircularProgress } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
    loaderContainer: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        background: 'rgba(0, 0, 0, 0.3)',
      },
      loaderCircle: {
        color: 'white',
      }
}));

const Loader = () => {
    const classes = useStyles();
  return (
    <div className={classes.loaderContainer}><CircularProgress classes={{svg: classes.loaderCircle}}  /></div>
  )
}

export default Loader