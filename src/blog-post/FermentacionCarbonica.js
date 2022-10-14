import React, { useState } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Avatar from '@mui/material/Avatar';
import Disqus from '../components/ui/Disqus';

// -------- pictures ---------- /
import racimoTintas from '../blog-fotos/elaboracionTinto/racimo-uvas-tintas.jpg';
import carbonico from '../blog-fotos/elaboracionCarbonica/elaboracion-carbonica.jpg';
import intracelular from '../blog-fotos/elaboracionCarbonica/intracelular.jpg';
import cubaVino from '../blog-fotos/elaboracionTinto/cuba-vino.jpg';
import tanque from '../blog-fotos/elaboracionCarbonica/tanque.jpg';
import embotelladora from '../blog-fotos/elaboracionTinto/maquina-embotelladora.jpg';
import copaTinto from '../blog-fotos/elaboracionTinto/vino-tinto-botella-copa.jpg';

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
      width: '40%',
      topMargin: '1em'
    },
    [theme.breakpoints.down('md')]: {
      width: '40%',
      topMargin: '1em'
    }
  }
}));

const FermentacionCarbonica = props => {
  const classes = useStyles();

  const [getTitle] = useState('¿Qué es la fermentación carbónica?');

  return (
    <div className={classes.root}>
      <div className={classes.marginPage}>
        <h1 className={classes.titleStyle}>{getTitle}</h1>
        <h2 className={classes.subtitle}>El proceso paso a paso.</h2>
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
            style={{ width: '70%' }}
            src={intracelular}
            alt="fermentación intracelular"
          />
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            El primer proceso de la fermentación carbónica sería{' '}
            <b>vendimiar con todo el raspón</b> (no se pueden usar máquinas), es
            decir, queremos conservar el racimo entero.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImglong}
            src={racimoTintas}
            alt="racimo uvas tintas"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Los racimos se introducen en un tanque de acero inoxidable y{' '}
            <b>se llenan con Co2</b> (dióxido de carbono).
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={tanque}
            alt="tanque CO2"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Gracias al proceso anterior, conseguimos una atmosfera libre de
            oxigeno. El oxigeno se desplaza de forma natural ya que dióxido de
            carbono pesa más. `
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={carbonico}
            alt="detalle oxigeno"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            La fermentación ocurre de forma interna{' '}
            <b>(fermentación intracelular)</b> y cuando el alcohol llega al 2%
            la uva empieza a romperse y el mosto va saliendo. Normalmente,
            cuando esto ocurre, se prensa para que la fermentación siga su curso
            sin contacto con las pieles.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={intracelular}
            alt="fermentación carbónica vino"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            El proceso de fermentación sin oxigeno suele durar entre 2 y 7 dias.
            Es muy típico de la zona de Beaujolais, en el sur de la Borgoña
            francesa y en Rioja para vinos jóvenes.
          </p>
        </div>
        <div>
          <img
            style={{ width: '35%', marginTop: '2em' }}
            src={cubaVino}
            alt="cuba vino"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Los vinos que se obtienen según este método de elaboración, por
            norma general <b>no suelen ser añejados.</b> Hay excepciones como en
            los Crus de Beaujolais.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={embotelladora}
            alt="embotelladora"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Los vinos que siguen el método de fermentación carbónica suelen ser
            frescos, muy aromáticos y fáciles de beber. Se recomienda que se
            beban frescos (15°-16°). No son vinos de guarda, disfrútalos cuanto
            antes!
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgBottle}
            src={copaTinto}
            alt="botella vino tinto"
          ></img>
        </div>
        <Disqus url={window.location.href} identifier={window.location.href} />
      </div>
    </div>
  );
};

export default FermentacionCarbonica;
