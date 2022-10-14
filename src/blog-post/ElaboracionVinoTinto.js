import React, { useState } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Avatar from '@mui/material/Avatar';
import Disqus from '../components/ui/Disqus';

// -------- pictures ---------- /
import copaTinto from '../blog-fotos/elaboracionTinto/vino-tinto-botella-copa.jpg';
import baneraMaceracion from '../blog-fotos/elaboracionTinto/banera-maceracin-vino-tinto.jpg';
import cubaFermentacion from '../blog-fotos/elaboracionTinto/cuba-de-fermentacion.jpg';
import cubaVino from '../blog-fotos/elaboracionTinto/cuba-vino.jpg';
import depositoAcero from '../blog-fotos/elaboracionTinto/depositos-acero-inoxidable.jpg';
import despalilladora from '../blog-fotos/elaboracionTinto/despalilladora-uvas.jpg';
import embotelladora from '../blog-fotos/elaboracionTinto/maquina-embotelladora.jpg';
import mezclaBordelesa from '../blog-fotos/elaboracionTinto/mezcla-bordelesa-vino.jpg';
import racimoTintas from '../blog-fotos/elaboracionTinto/racimo-uvas-tintas.jpg';
import tolvaUvasTintas from '../blog-fotos/elaboracionTinto/tolva-uvas-tintas.jpg';
import decantacion from '../blog-fotos/elaboracionTinto/proceso-decantacion-vino.jpg';
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

const ElaboracionVinoTinto = props => {
  const classes = useStyles();

  const [getTitle] = useState('¿Qué es el vino tinto y cómo se elabora?');

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
            src={baneraMaceracion}
            alt="maceración vino"
          />
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            La elaboración del vino tinto puede usar diferentes métodos. Sin
            embargo, todo proceso tiene unos puntos en común. Aquí intento
            describir los pasos más relevantes. <br></br> <br></br>
            El siguiente artículo podría ser un resumen o esbozo. Cuando un
            productor decide elaborar vino tinto, existen multiples variables a
            tomar en cuenta.
            <br></br>
            <br></br>Los siguiente pasos descritos, son una buena guía para
            saber como se elabora el vino tinto.
            <br></br>
            <br></br>Uvas tintas son recolectadas durante la vendimia, ya sea a
            mano o con máquina. La vendimia a veces se hace durante la noche
            para evitar altas temperaturas.​
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
            Los racimos de uvas son llevados hasta las tolvas, donde se reciben.
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
            Las uvas pasan de la tolva a la despalilladora, máquina que separará
            la uva del escobajo, parte que no interesa por sus taninos y
            asperezas.
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
            Después de estrujar las uvas, estas pasan a unos tanques de
            maceración. El contacto del mosto con los hollejos de la uva aportan
            aromas y sabores.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={baneraMaceracion}
            alt="bañera maceración vino"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            A continuación, se lleva a cabo el proceso de encubado. Aquí las
            levaduras se encargan de transformar el azúcar natural del mosto en
            alcohol, es decir, el proceso de fermentación. Es aquí donde el vino
            adquiere su color característico, taninos y aromas al estar en
            contacto con el hollejo.​
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImglong}
            src={cubaFermentacion}
            alt="fermentación cuba acero"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Cuando el proceso de fermentación ha terminado llega el proceso de
            descube. Consiste en vaciar el tanque por gravedad. Los hollejos se
            quedan en la parte de arriba.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImglong}
            src={decantacion}
            alt="decantación vino cuba"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Llegamos al prensado de los hollejos. Este proceso hace que
            obtengamos un vino con muchos taninos. Tiene diferentes usos. Entre
            ellos mezclarlo con el anterior. En este proceso obtendremos el
            llamado vino de prensa.
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
            Uno de los procesos finales es la fermentación maloláctica. Este
            proceso es importante para la calidad final del vino ya que le
            aportará más suavidad. Durante este proceso el ácido málico se
            convierte en ácido láctico.
          </p>
        </div>
        <div>
          <div>
            <img
              className={classes.responsiveImglong}
              src={cubaVino}
              alt="cuba de vino acero"
            ></img>
          </div>
          <div className={classes.paragraphStyleContainer}>
            <p className={classes.paragraphStyle}>
              El vino puede embotellarse directamente (después de un proceso de
              trasiego y filtrado y clarificado) o puede pasar a envejecer en
              barricas de roble francés y/o americano. El tiempo de añejamiento
              dependerá de si es un vino con crianza, reserva o gran reserva.
            </p>
          </div>
          <img
            className={classes.responsiveImgs}
            src={mezclaBordelesa}
            alt="mezcla vino"
          ></img>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={depositoAcero}
            alt="coupage bordelés"
          ></img>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={embotelladora}
            alt="embotelladora vino"
          ></img>
        </div>
        <div>
          <img
            className={classes.responsiveImglong}
            src={copaTinto}
            alt="copa vino tinto"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            SALUD! <br></br>
            <br></br> Nota importante: El proceso descrito en este artículo es
            una forma generalizada de describir el proceso de elaboración de
            vinos tintos.<br></br>
            <br></br>
            No es lo mismo el proceso de elaboración de un vino industrial, el
            cual usa procesos mucho más mecanizados que una elaboración
            artesanal.<br></br>
            <br></br>
            Algunos ejemplos diferenciadores a la hora de la elaboración del
            vino tinto pueden ser: <br></br>
            <br></br>
            <ul>
              <li>
                La decisión de dejar los raspones o no (total o parcialmente)
              </li>
              <li>El tiempo total de maceración</li>
              <li>
                Diferentes tipos de fermentación: carbònica, semi-carbònica...
              </li>
              <li>
                Fermentar en barricas de roble o en depósitos de acero
                inoxidable
              </li>
              <li>Tiempo total de fermentación</li>
              <li>Cantidad de mosto obtenido a la hora de prensar</li>
              <li>
                Duración de crianza del vino en las barricas (o en tinajas de
                barro, o en depósitos de cemento, etc.)
              </li>
              <li>Realizar un vino con coupage o un monovarietal</li>
              <li>No realizar filtrados o clarificados.</li>
              <li>No sulfitar.</li>
              <li>
                Seguir las normas y criterios que indican las D.O o desmarcarse
                de ellas
              </li>
              <li>Utilizar levaduras autóctonas y ''naturales'' o añadidas.</li>
              <li>
                Seguir el estándar de cultivo ecológico u otras filosofia como
                la biodinámica o vinos naturales
              </li>
            </ul>
            El vino no es una ciencia exacta y según las necesidades de cada
            productor el proceso puede ser distinto. Es la decisión de cada
            bodeguero, enólogo, tradición y filosofia de la casa la que marcará
            como se elabora el vino. <br></br>
            <br></br> Dicho todo esto, el proceso descrito arriba e ilustrado
            con dibujos, es una buena guía general para entender el proceso de
            elaboración del vino.
          </p>
        </div>
        <Disqus url={window.location.href} identifier={window.location.href} />
      </div>
    </div>
  );
};

export default ElaboracionVinoTinto;
