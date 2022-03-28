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

const AvisoLegal = () => {
  const classes = useStyles();
  const [pageName] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0, 'smooth');
  }, [pageName]);
  return (
    <div className={classes.root}>
      <div className={classes.marginPage}>
        <h1 className={classes.titleStyle}>Aviso Legal</h1>
        <h2> Identificación y Titularidad</h2>
        <p className={classes.paragraphStyle}>
          En cumplimiento del artículo 10 de la Ley 34 / 2002, de 11 de julio,
          de Servicios de la Sociedad de la Información y Comercio Electrónico,
          el Titular expone sus datos identificativos.
        </p>
        <div>
          <ul className={classes.paragraphStyle}>
            <li>Titular: Pablo Galisteo Hernández</li>
            <li>Registro mercantil: Ninguno</li>
            <li>NIF: L45828484H</li>
            <li>Domicilio: Bastuhagsvägen, 3, Stockholm.</li>
            <li>Correo electrónico: vitivipedia@gmail.com</li>
            <li>Sitio Web: https://www.vitivipedia.com</li>
          </ul>
        </div>
        <h3>Finalidad</h3>
        <p className={classes.paragraphStyle}>
          La finalidad del sitio web es escribir sobre la cultura del vino en
          general. Además de informar y recomendar sobre los mejores vinos de
          España ordenados de una forma accesible para todos, ordenados por sus
          diferentes CC.AA.
        </p>
        <h3>Condiciones de Uso</h3>
        <p className={classes.paragraphStyle}>
          La utilización del sitio Web le otorga la condición de Usuario, e
          implica la aceptación completa de todas las cláusulas y condiciones de
          uso incluidas en las páginas:
        </p>
        <div>
          <ul className={classes.paragraphStyle}>
            <li>Aviso Legal</li>
            <li>Política de Privacidad</li>
            <li>Política de Cookies</li>
          </ul>
        </div>
        <p className={classes.paragraphStyle}>
          Si no estuviera conforme con todas y cada una de estas cláusulas y
          condiciones absténgase de utilizar este sitio Web.<br></br>
          <br></br> El acceso a este sitio Web no supone, en modo alguno, el
          inicio de una relación comercial con el Titular.<br></br>
          <br></br> A través de este sitio Web, el Titular le facilita el acceso
          y la utilización de diversos contenidos que el Titular o sus
          colaboradores han publicadon por medio de Internet.<br></br> <br></br>
          A tal efecto, usted está obligado y comprometido a NO utilizar
          cualquiera de los contenidos del sitio Web con fines o efectos
          ilícitos, prohibidos en este Aviso Legal o por la legislación vigente,
          lesivos de los derechos e intereses de terceros, o que de cualquier
          forma puedan dañar, inutilizar, sobrecargar, deteriorar o impedir la
          normal utilización de los contenidos, los equipos informáticos o los
          documentos, archivos y toda clase de contenidos almacenados en
          cualquier equipo informático propios o contratados por el Titular, de
          otros usuarios o de cualquier usuario de Internet.
        </p>
        <h3>Medidas de seguridad</h3>
        <p className={classes.paragraphStyle}>
          Los datos personales que facilite al Titular pueden ser almacenados en
          bases de datos automatizadas o no, cuya titularidad corresponde en
          exclusiva a el Titular, que asume todas las medidas de índole técnica,
          organizativa y de seguridad que garantizan la confidencialidad,
          integridad y calidad de la información contenida en las mismas de
          acuerdo con lo establecido en la normativa vigente en protección de
          datos.<br></br> <br></br>
          No obstante, debe ser consciente de que las medidas de seguridad de
          los sistemas informáticos en Internet no son enteramente fiables y
          que, por tanto el Titular no puede garantizar la inexistencia de virus
          u otros elementos que puedan producir alteraciones en los sistemas
          informáticos (software y hardware) del Usuario o en sus documentos
          electrónicos y ficheros contenidos en los mismos aunque el Titular
          pone todos los medios necesarios y toma las medidas de seguridad
          oportunas para evitar la presencia de estos elementos dañinos.
        </p>
        <h3>Datos personales</h3>
        <p className={classes.paragraphStyle}>
          Usted puede consultar toda la información relativa al tratamiento de
          datos personales que recoge el Titular en la página de la Política de
          Privacidad.
        </p>
        <h3>Contenidos</h3>
        <p className={classes.paragraphStyle}>
          El Titular ha obtenido la información, el contenido multimedia y los
          materiales incluidos en el sitio Web de fuentes que considera fiables,
          pero, si bien ha tomado todas las medidas razonables para asegurar que
          la información contenida es correcta, el Titular no garantiza que sea
          exacta, completa o actualizada. El Titular declina expresamente
          cualquier responsabilidad por error u omisión en la información
          contenida en las páginas de este sitio Web.<br></br> <br></br>
          Queda prohibido transmitir o enviar a través del sitio Web cualquier
          contenido ilegal o ilícito, virus informáticos, o mensajes que, en
          general, afecten o violen derechos de el Titular o de terceros.
          <br></br> <br></br>
          Los contenidos del Sitio Web tienen únicamente una finalidad
          informativa y bajo ninguna circunstancia deben usarse ni considerarse
          como oferta de venta, solicitud de una oferta de compra ni
          recomendación para realizar cualquier otra operación, salvo que así se
          indique expresamente.
          <br></br> <br></br>
          El Titular se reserva el derecho a modificar, suspender, cancelar o
          restringir el contenido del Sitio Web, los vínculos o la información
          obtenida a través del sitio Web, sin necesidad de previo aviso.
          <br></br> <br></br>
          El Titular no es responsable de los daños y perjuicios que pudieran
          derivarse de la utilización de la información del sitio Web o de la
          contenida en las redes sociales del Titular.
        </p>
      </div>
    </div>
  );
};

export default AvisoLegal;
