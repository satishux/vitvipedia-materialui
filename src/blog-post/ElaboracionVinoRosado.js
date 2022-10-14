import React, { useState } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Avatar from '@mui/material/Avatar';
import Disqus from '../components/ui/Disqus';

// -------- pictures ---------- /
import vinoRosado from '../blog-fotos/elaboracionRosado/vino-rosado-botella-copa.jpg';
import baneraMaceracion from '../blog-fotos/elaboracionTinto/banera-maceracin-vino-tinto.jpg';
import cubaFermentacion from '../blog-fotos/elaboracionTinto/cuba-de-fermentacion.jpg';
import despalilladora from '../blog-fotos/elaboracionTinto/despalilladora-uvas.jpg';
import embotelladora from '../blog-fotos/elaboracionTinto/maquina-embotelladora.jpg';
import racimoTintas from '../blog-fotos/elaboracionTinto/racimo-uvas-tintas.jpg';
import tolvaUvasTintas from '../blog-fotos/elaboracionTinto/tolva-uvas-tintas.jpg';
import prensa from '../blog-fotos/elaboracionTinto/prensa-uvas-tintas.jpg';

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

const ElaboracionVinoRosado = props => {
  const classes = useStyles();

  const [getTitle] = useState('¿Qué es el vino rosado y cómo se elabora?');

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
            className={classes.mainImgStyle}
            src={tolvaUvasTintas}
            alt="tolva"
          />
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            La materia prima para la elaboración de vinos rosados son las uvas
            tintas.<br></br>
            <br></br> Las uvas son recolectadas en su punto optimo de
            maduración, ya sea a mano o máquina.<br></br>
            <br></br> Algunas de las zonas más famosas en la elaboración de
            vinos rosados son Navarra o Provence (Francia)
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
            Una vez recolectadas, las uvas pasan a las tolvas. Muchas veces
            tienen cintas correderas donde se hace una selección de uvas y todo
            lo que no se desea se descarta.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={tolvaUvasTintas}
            alt="tolva acero vino"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            La despalilladora se encarga de separar los escobajos de la uva.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={despalilladora}
            alt="despalilladora"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Después de estrujar las uvas tintas, estas pasarán a un proceso de
            maceración en frío (14/15°) donde el mosto adquirirá su color
            característico. Este proceso suele durar de 12 a 24 horas.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={baneraMaceracion}
            alt="maceracion vino"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            El siguiente paso es prensar, donde obtendremos un mosto de color
            rosado.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImglong}
            src={prensa}
            alt="prensa vino"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            A continuación, el mosto pasará a depósitos de acero inoxidable,
            donde fermentará de forma muy parecida a los vinos blancos. Este
            proceso puede durar entre 2 y 4 semanas.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImglong}
            src={cubaFermentacion}
            alt="cuba de fermentacion vino"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Prácticamente todos los vinos rosados -hay una minoría que se
            reservan en barricas- son para consumir el mismo año. Después de la
            fermentación, se embotella y el vino está listo para ser consumido.
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
            Los vinos rosados se disfrutan más fríos. Enfría tu vino favorito a
            una temperatura de entre 8/12° y usa una copa de vino blanco.{' '}
            <br></br>
            <br></br>
            Como todo en esta vida, siempre hay excepciones. Podemos encontrar
            algunos vinos rosados envejecidos en barrica, pero son muy pocos. La
            mayoría estan pensados para tomarlos en seguida, conservando toda su
            frescura y acidez. <br></br>
            <br></br>No te olvides de los vinos rosados, sobre todo cuando las
            temperaturas suben!
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgBottle}
            src={vinoRosado}
            alt="vino rosado"
          ></img>
        </div>
        <Disqus url={window.location.href} identifier={window.location.href} />
      </div>
    </div>
  );
};

export default ElaboracionVinoRosado;
