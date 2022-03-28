import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import axios from 'axios';


import makeStyles from '@mui/styles/makeStyles';

// -------- pictures ---------- /
import Espana from '../mapas/Espana.svg'; // change to static image
import sketch from '../assets/sketch.jpg';
import castilla from '../mapas/Castilla-la-Mancha.svg';
import Loader from './Loader';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#ffff',
    fontFamily: 'Lora',
    paddingBottom: '11em'
  },
  marginPage: {
    width: '640px',
    [theme.breakpoints.up('md')]: {
      margin: '0px 64px'
    },
    [theme.breakpoints.down('lg')]: {
      margin: '0px 48px'
    },
    [theme.breakpoints.down('md')]: {
      margin: '0px 24px'
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

  useEffect(async () => {
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
      {/* <Grid item className={classes.marginPage}>
        <h1 className={classes.titleStyle}>Bienvenido a Vitivipedia</h1>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Hola, me llamo Pablo y he creado Vitivipedia partiendo de una idea
            que tuve hace años. Mi pasión por el vino me llevo a estudiar un
            curso como sommelier en Estocolmo, donde resido, además de realizar
            el WSET 3.<br></br>
            <br></br>
            Además de algunos
            <b> artículos informativos sobre vino</b> que encontrarás en el{' '}
            <Link to="/blog">blog</Link>, he creado en la página de{' '}
            <Link to="/">Inicio</Link> unos mapas interactivos clasificados por
            comunidades autónomas.<br></br>
            <br></br>En ellas encontrarás los vinos más representitavos de cada
            zona. Los vinos son escogidos por su
            <b> importancia histórica, calidad o reconocimiento. </b>
            Son vinos que merecen ser la pena probados o como mínimo conocer de
            su existencia.<br></br>
            <br></br>Algunos de estos vinos pueden ser extremadamente caros,
            otros no. Lo importante es que son vinos que no pueden pasar
            desapercibidos.
            <br></br>
            <br></br>
            Al entrar a la página de <Link to="/">Inicio</Link>, podrás
            seleccionar la comunidad autónoma deseada, para así descubrir esos
            vinos únicos en forma tarjetas.
          </p>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <img src={Espana} alt="mapa España"></img>
      </Grid>
      <Grid item className={classes.marginPage}>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Al hacer click en cualquiera de las comunidades, verás diferentes
            fronteras dibujadas.<br></br>
            <br></br>Si la linea es continua y el fondo de otro color, significa
            que en esa zona existe una{' '}
            <b>
              Denominación de Origen (D.O) o Denominación de Origen Calificada
              (D.O.C).
            </b>
            <br></br>
            <br></br> En el caso de las lineas discontinuas, se trata de una{' '}
            <b>
              Indicación Geográfica (I.G.P) también conocido como Vino de la
              Tierra (V.T).
            </b>{' '}
            Aquí puedes observar el ejemplo de Castilla la Mancha.
          </p>
        </div>
      </Grid>
      <Grid container justifyContent="center">
        <img
          className={classes.responsiveImgs}
          src={castilla}
          alt="mapa castilla la mancha"
        ></img>
      </Grid>
      <Grid item className={classes.marginPage}>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Al observar las tarjetas, verás que existen 2 iconos.{' '}
            <b>
              Si pulsas el corazón en una de esas tarjetas, podrás guardar tus
              vinos favoritos para la próxima vez que entres.
            </b>
            <br></br>
            <br></br> En el lado derecho, en la parte de abajo, existe una
            flecha apuntando hacía abajo. Si presionas en ella, podrás expandir
            la información del vino y aprender más sobre él.
          </p>
        </div>
      </Grid>
      <Grid container justifyContent="center">
        <img
          className={classes.responsiveImglong}
          src={sketch}
          alt="vino sketch"
        ></img>
      </Grid>
      <Grid item className={classes.marginPage}>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Si crees que hay algún vino que debería estar en esta lista, o
            cualquier otra consulta o reclamación que tengas, házmelo saber
            poniéndote en <Link to="/contacto">contacto</Link> conmigo
            rellenando el formulario.<br></br>
            <br></br>
            Espero que disfrutes del contenido publicado en Vitivipedia, además
            de descubrir vinos que marquen huella en tu vida. ¡Gracias!
          </p>
        </div>
      </Grid> */}
    </Grid>
  );
};

export default Sobre;
