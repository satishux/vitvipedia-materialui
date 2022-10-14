import React, { useState, useEffect } from 'react';
import makeStyles from '@mui/styles/makeStyles';

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

const Cookies = () => {
  const [pageName] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0, 'smooth');
  }, [pageName]);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.marginPage}>
        <h1 className={classes.titleStyle}>Información sobre las cookies</h1>
        <h2> ¿Qué son las cookies?</h2>
        <p className={classes.paragraphStyle}>
          Una cookie es un fichero que se descarga en su ordenador al acceder a
          determinadas páginas web. Las cookies permiten a una página web, entre
          otras cosas, almacenar y recuperar información sobre los hábitos de
          navegación de un usuario o de su equipo y, dependiendo de la
          información que contengan y de la forma en que utilice su equipo,
          pueden utilizarse para reconocer al usuario.
        </p>
        <div>
          <h3>¿Qué tipos de cookies utiliza esta página web?</h3>
          <ul className={classes.paragraphStyle}>
            <li>
              <b>Cookies de análisis –</b> Son aquéllas que bien tratadas por
              nosotros o por terceros, nos permiten cuantificar el número de
              usuarios y así realizar la medición y análisis estadístico de la
              utilización que hacen los usuarios del servicio ofertado. Para
              ello se analiza su navegación en nuestra página web con el fin de
              mejorar la oferta de productos o servicios que le ofrecemos.
              vitivipedia.com utiliza Google Analytics como servicio de análisis
              de datos estadísticos. Google Analytics usa cookies que recogen
              información de la visita de forma totalmente anónima. La
              responsabilidad de la gestión de estos datos corresponde a Google
              Inc., según se recoge en sus términos de servicio de Google Inc.
              que puedes consultar en https://policies.google.com/privacy?hl=es.
              Google indica que pudiera realizar un tratamiento externo de los
              datos según su política de privacidad.
            </li>
            <li>
              <b>Cookies publicitarias –</b> Son aquéllas que, bien tratadas por
              nosotros o por terceros, nos permiten gestionar de la forma más
              eficaz posible la oferta de los espacios publicitarios que hay en
              la página web, adecuando el contenido del anuncio al contenido del
              servicio solicitado o al uso que realice de nuestra página web.
              Para ello podemos analizar sus hábitos de navegación en Internet y
              podemos mostrarle publicidad relacionada con su perfil de
              navegación.
            </li>
          </ul>
        </div>
        <h3>Cómo desactivar las cookies</h3>
        <p className={classes.paragraphStyle}>
          Puede usted permitir, bloquear o eliminar las cookies instaladas en su
          equipo mediante la configuración de las opciones del navegador
          instalado en su ordenador. <br></br> <br></br>A continuación puede
          acceder a la configuración de los navegadores webs más frecuentes para
          aceptar, instalar o desactivar las cookies:
          <ul className={classes.paragraphStyle}>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias?redirectslug=habilitar-y-deshabilitar-cookies-que-los-sitios-we&redirectlocale=es"
              >
                Firefox
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://support.apple.com/es-es/HT201265"
              >
                Safari
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://support.google.com/chrome/answer/95647?hl=es"
              >
                Chrome
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
              >
                Microsoft Edge
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
              >
                Apple Safari
              </a>
            </li>
          </ul>
        </p>
        <h3>Cookies de redes sociales</h3>
        <p className={classes.paragraphStyle}>
          Las cookies de redes sociales pueden almacenarse en su navegador
          cuando, por ejemplo, utiliza el botón de compartir contenidos de
          alguna red social.<br></br> <br></br> Las empresas que generan estas
          cookies correspondientes a las redes sociales que utiliza esta web
          tienen sus propias políticas de cookies:
        </p>
        <div>
          <ul>
            <li>
              Cookie de Twitter, según lo dispuesto en su{' '}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/en/privacy"
              >
                política de privacidad y uso de cookies.
              </a>
            </li>
            <br></br>
            <li>
              Cookie de Facebook, según lo dispuesto en su{' '}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/policies/cookies/"
              >
                Política de Cookies
              </a>
            </li>
          </ul>
        </div>
        <p className={classes.paragraphStyle}>
          Si desea tener un mayor control sobre la instalación de cookies, puede
          instalar programas o complementos a su navegador, conocidos como
          herramientas de “Do Not Track”, que le permitirán escoger aquellas
          cookies que desea permitir.
        </p>
      </div>
    </div>
  );
};

export default Cookies;
