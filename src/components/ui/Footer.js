import React from 'react';
import { Link } from 'react-router-dom';
import makeStyles from '@mui/styles/makeStyles';
import Grid from '@mui/material/Grid';

import instagram from '../../assets/instagram.svg';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: '#202020',
    width: '100%',
    zIndex: 999,
    position: 'relative'
  },
  logo: {
    width: '10em',
    color: 'white',
    margin: '1em',
    marginTop: '1.8em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('lg')]: {
      width: '8em'
    },
    [theme.breakpoints.down('sm')]: {
      width: '6em'
    }
  },
  mainContainer: {
    position: 'absolute'
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    marginTop: '0.5em',
    flex: 1,
    textAlign: 'center'
  },
  icon: {
    marginTop: '0.2em',
    height: '2em',
    width: '2em',
    [theme.breakpoints.down('sm')]: {
      height: '1em',
      width: '1em'
    },
    [theme.breakpoints.down('lg')]: {
      height: '1.5em',
      width: '1.5em',
      marginLeft: '3.5em'
    }
  },
  socialContainer: {
    marginTop: '-2.5em'
  },
  mobileFooter: {
    marginLeft: '3em',
    marginRight: '2em',
    paddingBottom: '0.5em'
  },
  gridStyling: {
    alignItems: 'center'
  }
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container className={classes.gridStyling}>
        <Grid
          className={`${classes.link} ${classes.mobileFooter}`}
          item
          component={Link}
          to="/politica-sobre-cookies"
          xs={4}
        >
          Política sobre cookies
        </Grid>
        <Grid
          className={`${classes.link} ${classes.mobileFooter}`}
          item
          component={Link}
          to="/afiliacion"
          xs={4}
        >
          Afiliación
        </Grid>
        <Grid
          className={`${classes.link} ${classes.mobileFooter}`}
          item
          component={Link}
          to="/politica-de-privacidad"
          xs={4}
        >
          Política de privacidad
        </Grid>
        <Grid
          className={`${classes.link} ${classes.mobileFooter}`}
          item
          component={Link}
          to="/aviso-legal"
          xs={4}
        >
          Aviso legal
        </Grid>
        <Grid
          item
          component={'a'}
          href="https://www.instagram.com/vitivipedia/"
          rel="noopener noreferrer"
          target="_blank"
          xs={4}
          className={`${classes.link} ${classes.mobileFooter}`}
        >
          <img alt="instagram logo" src={instagram} className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
}
