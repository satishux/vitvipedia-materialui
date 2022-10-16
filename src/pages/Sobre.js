import React, {useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import axios from 'axios';


import makeStyles from '@mui/styles/makeStyles';

// -------- pictures ---------- /
import Loader from './Loader';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#ffff',
    fontFamily: 'Lora',
    paddingBottom: '11em',
    flex: 1,
    alignItems: 'center',
  },
  marginPage: {
    width: '1200px',
    maxWidth: '1200px',
    [theme.breakpoints.up('md')]: {
      margin: '0px 64px',
      width: '100%',
    },
    [theme.breakpoints.down('lg')]: {
      margin: '0px 48px',
      width: '100%',
    },
    [theme.breakpoints.down('md')]: {
      margin: '0px 24px',
      maxWidth: '400px',
      width: '100%',
    },
    '& img': {
      maxWidth: '100%',
      height: 'auto',
      [theme.breakpoints.up('md')]: {
        marginTop: '1em'
      },
      [theme.breakpoints.down('md')]: {
        marginTop: '1em'
      }
    }
  },
  titleStyle: {
    fontFamily: 'Raleway',
    fontWeight: 400,
    fontSize: '2.8em'
  },
  subtitle: {
    fontWeight: 300,
    color: '#888'
  },
  articleInfo: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  authorContainer: {
    display: 'flex'
  },
  authorStyle: {
    marginLeft: '10px',
    fontSize: '0.9em',
    color: '#888'
  },
  iconButton: {
    color: 'white',
    background: '#333',
    padding: '0.3em',
    marginLeft: '0.5em',

    '&:hover': {
      background: '#000000'
    }
  },
  mainImgStyle: {
    width: '100%',
    height: 'auto'
  },
  imgContainerStyle: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '3em'
  },
  paragraphStyleContainer: {
    [theme.breakpoints.up('md')]: {
      fontSize: '21px'
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: '18px'
    }
  },
  paragraphStyle: {
    [theme.breakpoints.up('md')]: {
      lineHeight: '32px'
    },
    [theme.breakpoints.down('md')]: {
      lineHeight: '28px'
    }
  },
  responsiveImgs: {
    [theme.breakpoints.up('md')]: {
      width: '60%',
      topMargin: '1em'
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      topMargin: '1em'
    }
  },
  responsiveImgBottle: {
    [theme.breakpoints.up('md')]: {
      width: '30%',
      topMargin: '1em'
    },
    [theme.breakpoints.down('md')]: {
      width: '25%',
      topMargin: '1em'
    },
    [theme.breakpoints.down('sm')]: {
      width: '35%',
      topMargin: '1em'
    }
  },
  responsiveImglong: {
    [theme.breakpoints.up('md')]: {
      width: '40%',
      topMargin: '1em'
    },
    [theme.breakpoints.down('md')]: {
      width: '90%',
      topMargin: '1em'
    }
  }
}));

const Sobre = () => {
  const classes = useStyles();
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    const loadSobre = async () => {
      setLoading(true);
      try {
          const response = await axios.get(
            `https://backend.vitivipedia.com/wp-json/wp/v2/pages?slug=sobre`,
          );
      
          if(response.data) {
            setPage(response.data[0].content.rendered);
          } else {
            setPage(null);
          }
      } catch(err) {
          setPage(null);
      }
  
      setLoading(false);
    }

    loadSobre();

  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = '#fff';

    return () => {
      document.body.style.backgroundColor = '#EEEEEE';
    };
  }, []);

  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.marginPage} >
        { loading ? <Loader /> : page  ?  <div  dangerouslySetInnerHTML={{ __html: page }} /> : <div>Unable to load content</div> }
      </Grid>
    </Grid>
  );
};

export default Sobre;
