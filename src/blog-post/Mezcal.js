import React, { useState } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Avatar from '@mui/material/Avatar';
import Disqus from '../components/ui/Disqus';
import { Link } from 'react-router-dom';

// -------- pictures ---------- /
import agave from '../blog-fotos/tequila/agave.jpg';
import alambique from '../blog-fotos/mezcal/alambique.jpg';
import fermentacion from '../blog-fotos/mezcal/fermentacion.jpg';
import horno from '../blog-fotos/mezcal/horno_mezcal.jpg';
import jimador from '../blog-fotos/mezcal/jimador.jpg';
import chupito from '../blog-fotos/mezcal/mezcal_chupito.jpg';
import mezcal from '../blog-fotos/mezcal/mezcal.jpg';
import mezcal1 from '../blog-fotos/mezcal/mezcal1.jpg';
import tahona from '../blog-fotos/mezcal/tahona.jpg';
import pinas from '../blog-fotos/tequila/pinas_tequila.jpg';
import barrica from '../blog-fotos/mezcal/barrica_tequila.jpg';
import hornoMezcal from '../blog-fotos/tequila/horno-mezcal.jpg';
import pinasCocinadas from '../blog-fotos/mezcal/mezontles-cocinados.jpg';
import molinoMezcal from '../blog-fotos/mezcal/molino-mezcal.jpg';
import alambiquesMezcal from '../blog-fotos/mezcal/alambiques-mezcal.jpg';

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
      marginTop: '1em'
    },
    [theme.breakpoints.down('md')]: {
      width: '60%',
      marginTop: '1em'
    }
  },
  responsiveImgBottle: {
    [theme.breakpoints.up('md')]: {
      width: '30%',
      marginTop: '1em'
    },
    [theme.breakpoints.down('md')]: {
      width: '25%',
      marginTop: '1em'
    },
    [theme.breakpoints.down('sm')]: {
      width: '35%',
      marginTop: '1em'
    }
  },
  responsiveImglong: {
    [theme.breakpoints.up('md')]: {
      width: '40%',
      marginTop: '1em'
    },
    [theme.breakpoints.down('md')]: {
      width: '40%',
      marginTop: '1em'
    }
  },
  responsiveVideo: {
    height: '360px',
    width: '640px',
    marginTop: '1em',
    [theme.breakpoints.down('md')]: {
      height: '360px',
      width: '640px',
      marginTop: '1em'
    },
    [theme.breakpoints.down('sm')]: {
      height: '240px',
      width: '360px',
      marginTop: '1em'
    }
  }
}));

const Mezcal = props => {
  const classes = useStyles();

  const [getTitle] = useState('¿Cómo se elabora el mezcal?');

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
            El mezcal es el 'hermano pequeño' del tequila. Sin embargo, en según
            que circulos, se considera como un destilado de calidades
            superiores. <br></br>
            <br></br>Nosotros creemos que se pueden encontrar calidades
            similares en ambas bebidas, eso si, con sus propias diferencias.
            <br></br>
          </p>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            <b>El agave o maguey es silvestre</b> y puede ser de diferentes
            variedades (el más común es el espadín).
          </p>
        </div>
        <div className={classes.imgContainerStyle}>
          <img className={classes.mainImgStyle} src={agave} alt="agave" />
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            El jimador corta las espinas de la planta para obtener la piña o
            mezontle.
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
          <p className={classes.paragraphStyle}>Las piñas se acumulan.</p>
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
            A continuación se cuecen introduciéndolas en un horno tradicional
            con piedras precalentadas y acaba totalmente cubierto durante unas
            72 horas.<br></br>
            <br></br>Este sea problemente unos de los pasos más singulares en la
            producción del mezcal ya que marcará su carácter único.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={horno}
            alt="horno tradicional mezcal"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Una vez cocidas, se cortan y acaban moliéndose de forma artesanal
            (fuerza animal) sobre la tahona (molino tradicional).
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={tahona}
            alt="tahona mezcal"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            La masa obtenida se mezcla con agua en los tanques de fermentación.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={fermentacion}
            alt="fermentacion mezcal"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            El liquido fermentado pasa a los alambiques de cobre para ser
            destilado, normalmente de forma artesanal (calentando con leña el
            alambique).
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={alambique}
            alt="alambique mezcal"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            El mezcal que en un futuro lleve en su etiqueta “reposado” o “añejo”
            (de dos meses a un año y al menos un año respectivamente) será
            almacenado en barricas de roble. Si no es añejado, será etiquetado
            cómo blanco.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={barrica}
            alt="barrica mezcal"
          ></img>
        </div>
        <div>
          <div className={classes.paragraphStyleContainer}>
            <p className={classes.paragraphStyle}>!Salud!</p>
          </div>
          <div>
            <img
              className={classes.responsiveImglong}
              src={mezcal}
              alt="tequila reposado"
            ></img>
          </div>
          <img
            className={classes.responsiveImglong}
            src={chupito}
            alt="chupito tequila"
          ></img>
        </div>
        <iframe
          src="https://player.vimeo.com/video/169613053?h=088fd5cca1"
          title="mezcal"
          className={classes.responsiveVideo}
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className={classes.paragraphStyleContainer}>
          <h3>El proceso en la producción del Mezcal</h3>
          <p className={classes.paragraphStyle}>
            Aquí explicaré el proceso de producción del mezcal de forma
            sintetizada y general. Existe muchas de formas de obtener este
            producto destilado. Se puede cocer en hornos de diferente clase, o
            usar diferentes leñas o diferentes bañeras de destilación (madera,
            piedra, pieles o acero inoxidable). Además la variedad de magueyes
            usados, regiones, tradiciones y culturas lo hace difícilmente
            clasificable.<br></br>
            <br></br>La primera diferencia del Mezcal con el{' '}
            <Link to="/blog/elaboracion-tequila">tequila</Link> la encontramos
            en el cultivo: mientras los agaves para producir Tequila son
            cultivados, en el caso del Mezcal, los magueyes son de origen
            silvestre y pueden mezclarse diferentes variedades.<br></br>
            <br></br>
            <img
              className={classes.responsiveImglong}
              src={mezcal1}
              alt=" mezcal"
            ></img>
            Si se quiere obtener todo el potencial de la planta y retener
            suficientes azúcares en las piñas o mezontles para después poder
            fermentarlos, se debe seguir el mismo procedimiento que en el
            Tequila, es decir, impedir que crezca el quiote.<br></br>
            <br></br>
            Una vez se tienen las piñas recolectadas, se someten a cocción para
            conseguir sus azúcares. El proceso tradicional utiliza hornos
            cavados en el suelo y rellenos de piedras, los cuales se llenan de
            leña para prenderle fuego, cuando quedan al rojo vivo, se echan las
            piñas. Todo queda cubierto con <i>petate</i> (tapete tradicional
            elaborado con una planta llamada petate) o una lona mojada y sobre
            ello tierra. Todo bien cubierto sin que entre arena ni aire en el
            horno.
          </p>
          <img
            className={classes.responsiveImgs}
            src={hornoMezcal}
            alt="horno mezcal"
          ></img>
          <p className={classes.paragraphStyle}>
            Hay que destacar que este proceso{' '}
            <b>supone un desperdicio a nivel de producción</b>, ya que los jugos
            que las piñas van soltando se evaporan al estar sobre las piedras
            calientes. En el caso del Tequila no hay desperdicio (sus jugos van
            cayendo y son recogidos). Es precisamente este paso el interesante
            en la elaboración del mezcal, pues le proporciona su carácter
            personal, rústico y artesanal que{' '}
            <b>en el sabor lo distinguiremos por sus notas ahumadas.</b>
          </p>
          <img
            className={classes.responsiveImgs}
            src={pinasCocinadas}
            alt="piñas mezcal cocinadas"
          ></img>
          <p className={classes.paragraphStyle}>
            El proceso de cocción en este tipo de hornos suele ser de 72 horas.
            Cuando ya se tienen las cabezas de maguey cocidas, se pasa al
            proceso de machacado o molienda. Los magueyes se parten en trozos
            mas pequeños y se ponen sobre la <i>tahona</i> o piedra chilena. La
            piedra gira gracias a la fuerza animal de un buey o caballo. El
            resultado final es el mosto y bagazo que mezclado junto al agua
            pasará al proceso de fermentación en las bañeras.
          </p>
          <img
            className={classes.responsiveImgs}
            src={molinoMezcal}
            alt="molino tradicional mezcal"
          ></img>
          <p className={classes.paragraphStyle}>
            La fermentación suele durar entre 72 y 96 horas. Por último queda
            solo la destilación, la cual dependerá bastante según la región y
            los medios económicos, desde maquinaria mas rústica (como ollas
            ebullidoras de cobre y complementada con madera) hasta sistemas
            modernos de destilación.
          </p>
          <img
            className={classes.responsiveImglong}
            src={alambiquesMezcal}
            alt="alambiques destilacion mezcal"
          ></img>
          <h3>Datos interesantes y curiosos sobre el Tequila y el Mezcal</h3>
          <ul className={classes.paragraphStyle}>
            <li>
              Según donde se elabore el destilado del agave puede obtener un
              nombre distinto además de Tequila o Mezcal, algunos{' '}
              <b>
                ejemplos son la Bacanora en el estado de Sonora o Raicilla en el
                estado de Jalisco.
              </b>
            </li>
            <br></br>
            <li>
              La producción de estos destilados estuvo prohibida hasta finales
              del siglo XVIII.
            </li>
            <br></br>
            <li>
              La primera marca en poder explotar legalmente el destilado fue{' '}
              <b>José Cuervo.</b>
            </li>
            <br></br>
            <li>
              <b>
                El tequila etiquetado como 100% de agave contiene exclusivamente
                azucares de la planta del maguey.
              </b>{' '}
              Sin embargo el etiquetado como ”tequila” a secas puede contener
              desde el 1 al 49% de otros azúcares (normalmente de caña) sin
              necesidad de especificar la procedencia ni la cantidad en la
              etiqueta.
            </li>
            <br></br>
            <li>
              El etiquetado como mezcal 100% de agave contiene azúcares que
              provienen exclusivamente del maguey. El etiquetado como mezcal
              puede contener hasta el 20% de otros azúcares.
            </li>
            <br></br>
            <li>
              <b>
                La Bacanora, originaria de Sonora, solo puede ser 100% de agave
              </b>{' '}
              y no existe una calidad inferior.
            </li>
            <br></br>
            <li>
              <b>
                Los destilados del agave que no obtienen denominación de origen
                deben ser siempre 100% de agave.
              </b>{' '}
              Irónicamente cualquier destilado que no obtenga denominación de
              origen deberá cumplir las exigencias mínimas de los mejores
              tequilas y mezcales 100% agave.
            </li>
            <br></br>
            <li>El gusano en las botellas de mezcal es solo marketing.</li>
          </ul>
          <Disqus
            url={window.location.href}
            identifier={window.location.href}
          />
        </div>
      </div>
    </div>
  );
};

export default Mezcal;
