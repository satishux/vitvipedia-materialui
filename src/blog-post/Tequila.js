import React, { useState } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Avatar from '@mui/material/Avatar';
import Disqus from '../components/ui/Disqus';

// -------- pictures ---------- /
import agave from '../blog-fotos/tequila/agave.jpg';
import alambique from '../blog-fotos/tequila/alambique.jpg';
import jimador from '../blog-fotos/tequila/jimador.jpg';
import pinas from '../blog-fotos/tequila/pinas_tequila.jpg';
import tanques from '../blog-fotos/tequila/tanques_coccion.jpg';
import botella from '../blog-fotos/tequila/tequila_botella.jpg';
import chupito from '../blog-fotos/tequila/tequila_chupito.jpg';
import fermentacion from '../blog-fotos/tequila/tequila_fermentacion.jpg';
import reposado from '../blog-fotos/tequila/tequila_reposado.jpg';
import barrica from '../blog-fotos/mezcal/barrica_tequila.jpg';
import maguey from '../blog-fotos/tequila/maguey.jpg';
import arette from '../blog-fotos/tequila/tequila-arette.jpg';
import mezcal from '../blog-fotos/tequila/mezcal.jpg';
import quiote from '../blog-fotos/tequila/quiote.jpg';
import magueyes from '../blog-fotos/tequila/magueyes-tequila.jpg';
import mezontles from '../blog-fotos/tequila/mezontles.jpg';
import alambiqueArette from '../blog-fotos/tequila/alambiques-arette.jpg';

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

const Tequila = props => {
  const classes = useStyles();

  const [getTitle] = useState('¿Cómo se elabora el tequila?');

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
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            El tequila es el destilado insigna de México. <br></br>
            <br></br>Se trata de una bebida mundialmente conocida, responsable
            de resacas insoportables, pero también de algunos de los tragos más
            sofisticados que existen.<br></br>
            <br></br>
            Aquí te enseñamos el proceso de elaboración, desde su cultivo hasta
            el embotellado.
          </p>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            <b>El agave</b> usado para la producción del tequila solo puede ser
            de la variedad <b>blue agave (Agave tequilana).</b>
          </p>
        </div>
        <div className={classes.imgContainerStyle}>
          <img className={classes.mainImgStyle} src={agave} alt="agave" />
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            El <b>jimador</b> se encarga de cortar todas las espinas cuando la
            planta a madurado suficiente (unos 7 años) y{' '}
            <b>extrae la piña, también llamada mezontle.</b>
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={jimador}
            alt="jimador"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Una gran cantidad de piñas de agave se acumulan para comenzar la
            elaboración de tequila.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={pinas}
            alt="piñas de agave"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            La materia prima se introduce en tanques de acero inoxidables
            sellados. Se inyecta vapor y las piñas se cuecen, convirtiendo
            practicamente todas las féculas en azúcar.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={tanques}
            alt="tanques cocción tequila"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Una vez fuera del horno, las piñas se trituran, se mezclan con agua
            y se separa el bagazo (la fibra) para a continuación llenar las
            bañera de fermentación del liquido obtenido. <br></br>
            <br></br>Aquí empieza el proceso de fermentación dónde las levaduras
            convertirán los azucares en alcohol.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={fermentacion}
            alt="fermentación tequila"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            El liquido fermentado pasa a destilarse en alambiques de cobre o
            acero inoxidable.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImglong}
            src={alambique}
            alt="alambique tequila"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            El tequila que en un futuro lleve las etiquetas de “reposado”,
            “añejo” o “extra añejo” pasará por un proceso de envejecimiento en
            barricas de roble.<br></br>
            <br></br> El que no pase por este proceso será denominado como
            “blanco”.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImglong}
            src={barrica}
            alt="barrica tequila"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            El tequila es finalmente embotellado y está listo para su
            comercialización.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImglong}
            src={botella}
            alt="botella tequila"
          ></img>
        </div>
        <div>
          <div className={classes.paragraphStyleContainer}>
            <p className={classes.paragraphStyle}>!Salud!</p>
          </div>
          <div>
            <img
              className={classes.responsiveImglong}
              src={reposado}
              alt="tequila reposado"
            ></img>
          </div>
          <img
            className={classes.responsiveImglong}
            src={chupito}
            alt="chupito tequila"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <h2 className={classes.paragraphStyle}>El maguey, agave o metl</h2>
          <p className={classes.paragraphStyle}>
            La palabra maguey, se emplea para designar a todas las especies de
            agaves. Es decir, son sinónimas. Los nahuas se referían a todos
            ellos con el nombre de metl, añadiendo después un sufijo para
            determinar la variedad. Con esta planta se pueden extraer muchos
            productos, tales como sirope, aguamiel, pulque, mezcal, papel, tejas
            hechas de las pencas, clavos y agujas…
          </p>
          <img
            className={classes.responsiveImglong}
            src={maguey}
            alt="maguey tequila"
          ></img>
          <br></br>
          <p className={classes.paragraphStyle}>
            El origen de la palabra agave lo encontramos en el griego agavos que
            significa noble y admirable. El maguey tiene una vida que puede
            oscilar entre los cinco y cien años. Obviamente para obtener bebidas
            no debemos esperar tanto tiempo, el tiempo medio en el crecimiento
            de la planta del maguey para empezar el proceso es de 7 años.
          </p>
          <br></br>
          <p className={classes.paragraphStyle}>
            La planta del agave tiene gran variedad de especies y se desconoce a
            ciencia cierta la evolución de ésta. Aun así, podemos decir que solo
            en México existen unas 125 de las 166 existentes, es decir, un 75%
            de las cuales se usan alrededor de 20 variedades para producir
            tequila, mezcal o pulque.
          </p>
          <h3>Diferencia entre tequila y mezcal</h3>
          <p className={classes.paragraphStyle}>
            La diferencia básica entre el tequila y el mezcal es su forma de
            producción y la variedad de plantas usadas. Además, obtienen
            diferente denominaciones de origen según su procedencia: DOT y DOM.
          </p>
          <img
            className={classes.responsiveImglong}
            src={arette}
            alt="tequila arette"
          ></img>
          <p className={classes.paragraphStyle}>
            Para la producción de tequila{' '}
            <b>debe ser usada la variedad de agave azul</b> y solo se puede
            producir bajo la Denominación de Origen de Tequila (DOT) en los
            estados de Tamaulipas, Nayarit, Guanajuato, Michoacan y Jalisco.
            <br></br>
            <br></br> La forma de producción del tequila es industrial y sus
            agaves son cultivados, aumentando así el rendimiento de todo el
            proceso y creando un producto homogéneo y de iguales calidades
            dentro de sus respectivas categorías.
          </p>
          <p className={classes.paragraphStyle}>
            En el caso del mezcal, los procesos son más rústicos y artesanales,
            en los cuales se usan diferentes tipos de agaves y muchos de estos
            pueden ser silvestres. La Denominación de Origen Mezcal (DOM) puede
            ser obtenida si el mezcal se produce en los estados de{' '}
            <b>
              Tamaulipas, San Luis Potosí, Zacatecas, Durango, Guerrero y
              Oaxaca.
            </b>
          </p>
          <img
            className={classes.responsiveImgs}
            src={mezcal}
            alt="mezcal donagave"
          ></img>
          <p className={classes.paragraphStyle}>
            Como conclusión y de forma sintetizada podemos afirmar que el
            Tequila y el Mezcal obtienen diferentes denominaciones de origen
            según las diferencias en su producción, variedad de plantas y origen
            de producción.
          </p>
          <h3>El proceso en la producción de Tequila</h3>
          <p className={classes.paragraphStyle}>
            Cuando la planta del agave empieza a madurar, produce un asta floral
            llamada <b>quiote</b> (quiotl en lengua indígena), esta flor puede
            alcanzar en especies grandes los cuatro o cinco metros. Para que la
            flor no aparezca y la planta pueda{' '}
            <b>concentrar toda su energía y azucares en el mezontle o piña</b>{' '}
            (de donde se extraerá mas tarde el jugo que dará lugar al Tequila),
            se debe hacer un despunte en la piña para que la flor no se
            desarrolle.
          </p>
          <img
            className={classes.responsiveImglong}
            src={quiote}
            alt="quiote agave"
          ></img>
          <p className={classes.paragraphStyle}>
            Cuando el mezontle a desarrollado lo suficiente (unos siete años)
            llega la hora de deshacerse de las pencas que sobresalen y dejar
            solo el corazón, piña o mezontle. El procedimiento para la
            elaboración del tequila pasa por introducir todas las piñas de agave
            en un tanque de acero inoxidable que, a modo de olla a presión,
            introducirá gases calientes y los almidones almacenados por las
            piñas del agave se convertirán en azucares (hidrólisis). Este
            proceso dura 48 horas en caso de que los corazones estén en hornos
            de mampostería y 12 horas en el caso de autoclaves.
          </p>
          <img
            className={classes.responsiveImgs}
            src={magueyes}
            alt="magueyes tequila arette"
          ></img>
          <p className={classes.paragraphStyle}>
            A continuación y después de sacarlos del tanque, llega el proceso de
            maceración, el cual consiste en machacar los corazones, triturarlos
            y mezclarlos con agua. En el caso del Tequila se usa un
            triturador-amasador para este proceso.<br></br>
            <br></br> El proceso que sigue consiste en separar los jugos que
            seguirán hasta las bañeras de fermentación y el bagazo (que se
            descarta), que es la materia fibrosa ya agotada.
          </p>
          <img
            className={classes.responsiveImgs}
            src={mezontles}
            alt="mezontles cocinados"
          ></img>
          <p className={classes.paragraphStyle}>
            Una vez tenemos los azucares del agave en forma liquida, pasamos al
            proceso de fermentación en bañeras de acero inoxidable.<br></br>
            <br></br> Cuando ha terminado de fermentar, y las levaduras han
            convertido el azúcar en alcohol ya se puede destilar, lo cual se
            hace en alambiques de cobre o acero inoxidable.<br></br>
            <br></br>Ya tenemos el Tequila listo. Dependiendo de si el Tequila
            se añeja o no obtendrá <b>diferentes categorías:</b>
            <br></br>
            <br></br>
            <ul className={classes.paragraphStyle}>
              <li>
                <b>Blanco</b> para el Tequila que no pasa por barrica, es decir,
                el destilado tal cual
              </li>
              <br></br>
              <li>
                <b>Reposado</b> cuando el Tequila a pasado por barrica de roble
                2 meses
              </li>
              <br></br>
              <li>
                <b>Añejo</b> cuando el Tequila a pasado por barrica 1 año
              </li>
              <br></br>
              <li>
                <b>Extra añejo</b> cuando el Tequila pasa por barrica 3 años
              </li>
              <br></br>
            </ul>
          </p>
          <img
            className={classes.responsiveImglong}
            src={alambiqueArette}
            alt="alambiques destilacion tequila"
          ></img>
        </div>

        <Disqus url={window.location.href} identifier={window.location.href} />
      </div>
    </div>
  );
};

export default Tequila;
