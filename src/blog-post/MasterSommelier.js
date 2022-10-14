import React, { useState } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Avatar from '@mui/material/Avatar';
import Disqus from '../components/ui/Disqus';

// -------- pictures ---------- /
import master from '../blog-fotos/masterSommelier/court_of_master_sommeliers_logo.jpg';

import SocialMediaIcons from '../components/ui/SocialMediaIcons';

import Pablo from '../blog-fotos/pablo.png';

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
      width: '60%',
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
      width: '60%',
      topMargin: '1em'
    },
    [theme.breakpoints.down('md')]: {
      width: '40%',
      topMargin: '1em'
    }
  }
}));

const MasterSommelier = props => {
  const classes = useStyles();

  const [getTitle] = useState('¿Qué es la Court of Master Sommeliers (CMS)?');

  return (
    <div className={classes.root}>
      <div className={classes.marginPage}>
        <h1 className={classes.titleStyle}>{getTitle}</h1>
        <h2 className={classes.subtitle}>
          Un título exclusivo de alto rendimiento.
        </h2>
        <div className={classes.articleInfo}>
          <div className={classes.authorContainer}>
            <div className={classes.avatarStyle}>
              <Avatar img src={Pablo} alt="Pablo" />
            </div>

            <div className={classes.authorStyle}>
              <p>Pablo Galisteo</p>
            </div>
          </div>
          <SocialMediaIcons title={getTitle} />
        </div>
        <div className={classes.imgContainerStyle}>
          <img
            className={classes.responsiveImglong}
            src={master}
            alt="master sommelier"
          />
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            La Court of Master Sommeliers fue creada para incentivar la calidad
            en el servicio de bebidas en hoteles y restaurantes.<br></br>
            <br></br> Consta de cuatro títulos y cada uno de ellos lleva
            asociada una serie de pruebas, teóricas y practicas ya que aquí y a
            diferencia del WSET se analiza la puesta en escena de un sommelier.
            <br></br>
            <br></br> Las cuatro calificaciones son:
            <ul>
              <li>Introductory Sommelier Certificate</li>
              <li>Certified Sommelier</li>
              <li>Advanced Sommelier</li>
              <li>Master Sommelier Diploma</li>
            </ul>
          </p>
          <p>
            El último es seguramente el título de sumillería más prestigiosos a
            nivel mundial, también el más difícil de obtener (desde que fue
            creado en el 1977 tan solo 249 personas lo han logrado).<br></br>
            <br></br> Una forma entretenida de saber más sobre como convertirse
            en Master Sommelier es viendo el documental Somm:<br></br>
            <br></br>
            Las pruebas para obtener el merecido título de Master Sommelier (uno
            debe tener los otros tres títulos anteriores) son una prueba teórica
            oral, cata a ciegas de diversos vinos y una prueba práctica en sala.
            Todo esto llevado a una dificultad extrema. Los números hablan por
            si solos y son muchos los que se han presentado y no han obtenido el
            título.<br></br>
            <br></br> ¿te animas? 🙂
          </p>
        </div>
        <Disqus url={window.location.href} identifier={window.location.href} />
      </div>
    </div>
  );
};

export default MasterSommelier;
