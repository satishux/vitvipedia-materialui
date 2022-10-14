import React, { useState } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Avatar from '@mui/material/Avatar';
import Disqus from '../components/ui/Disqus';

// -------- pictures ---------- /
import wset from '../blog-fotos/masterSommelier/wset.png';
import vino from '../blog-fotos/masterSommelier/vino-partitura.jpg';

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

const Wset = props => {
  const classes = useStyles();

  const [getTitle] = useState(
    '¿Qué es el Wine and Spirit Education Trust (WSET)?'
  );

  return (
    <div className={classes.root}>
      <div className={classes.marginPage}>
        <h1 className={classes.titleStyle}>{getTitle}</h1>
        <h2 className={classes.subtitle}>
          El título que cualquier profesional del vino debería obtener.
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
            src={wset}
            alt="wine and spirit education trust"
          />
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Probablemente uno de los títulos a nivel internacional más sonados.
            El Wine and Spirit Education Trust, una escuela donde la sede
            oficial está ubicada en Londres.<br></br>
            <br></br> Para realizar alguno de sus cursos no es necesario ir a
            Londres. Hay escuelas asociadas a este programa en muchas ciudades
            donde uno puede estudiar.
            <br></br>
            <br></br> Durante el curso hay unas horas minimas de asistencia a
            clase, donde se explica la metodologia a seguir y se catan los
            vinos. Después habrá que hacer un examen que lo dictamina la escuela
            de Londres.
          </p>
          <div>
            <img
              className={classes.responsiveImgs}
              src={vino}
              alt="vino con partitura"
            ></img>
          </div>
          <h3>¿Qué es el WSET?</h3>
          <p>
            Los cursos de WSET estan orientados a gente que quiera entender el
            vino desde una perspectiva global, capaz de poder valorar la calidad
            y tipicidad de un vino de forma objetiva.<br></br>
            <br></br> En el curso se aprenden conceptos importantes como las
            principales variedades de uvas y donde se plantan, terminologia,
            entender el etiquetado y procesos de elaboración. Las bebidas
            espirituosas y licores son también una parte a aprender.<br></br>
            <br></br>
            Una de las partes más importantes del curso es poder describir un
            vino siguiendo su metodologia, para{' '}
            <b>llegar a una conclusión final del vino y definir su calidad.</b>
            <br></br>
            <br></br> Existen diferentes niveles en la escuela:<br></br>
            <br></br>
            <b>Nivel 2:</b> Aquí se aprende lo básico del mundo del vino y
            bebidas espirituosas. Algunas nociones de maridaje, regiones
            vitivinícolas más importantes del mundo, uvas principales y catar el
            vino según la metodologia adaptada a este nivel.
            <br></br>
            <br></br>
            <b>Nivel 3:</b> Aunque tan solo hay un salto desde el nivel
            anterior, la dificultad es mucho mayor. Aquí se estudia en
            profundidad el cultivo de la viña y la elaboración del vino. El
            examen consta de una parte teórica y otra practica donde se da a
            catar a ciegas un vino blanco y uno tinto y se debe valorar la
            calidad y tipicidad usando su metodologia.
            <br></br>
            <br></br>
            <b>Diploma o level 4:</b> El Diploma es un curso donde se profundiza
            sobre vinos y espirituosos y consta de 6 unidades. El curso solo se
            realiza en inglés o alemán y recomiendan 600 horas de estudio
            (aunque los que lo han logrado aseguran que en realidad son muchas
            más). Es un título ambicioso pero muy completo y valorado en todo el
            mundo. Este curso es también la antesala para estudiar el Master of
            Wine.
            <b>Master of Wine (MW)</b> Un titulo muy prestigioso que tan solo
            unos cuantos han conseguido (hasta la fecha 380). En realidad este
            título no pertenece a la misma escuela, pero el <b>Diploma</b> es un
            requisito para entrar. También se puede acceder si se tiene por
            ejemplo un master en enologia o un nivel suficientemente alto de
            reconocimiento como sommelier. El obtener este título lleva al menos
            3 años teniendo que superar 3 niveles y se podría comparar con un
            doctorado en el mundo académico.
          </p>
          <h3>
            ¿A quien va dirigido los cursos de WSET (Wine and Spirit Education
            Trust)?
          </h3>
          <p>
            <b>Los cursos de WSET van dirigidos a profesionales</b> en el sector
            de las bebidas alcohólicas, pero también a aficionados y gente
            involucrada en el sector.<br></br>
            <br></br> El objetivo principal de estos cursos es capacitar al
            profesional para poder{' '}
            <b>
              evaluar y valorar la calidad del vino de la forma más objetiva
              posible y siguiendo un sistema.
            </b>
            <br></br>
            <br></br> Estos cursos sin embargo no se enfocan en el oficio del
            sommelier ya que es mucho más teórico y los aspectos de trabajo en
            sala no están recogidos. <br></br>
            <br></br> Hay otras escuelas como la CMS (Court of Masters
            Sommeliers) donde se enfocan en el oficio de sommelier.
          </p>
        </div>
        <Disqus url={window.location.href} identifier={window.location.href} />
      </div>
    </div>
  );
};

export default Wset;
