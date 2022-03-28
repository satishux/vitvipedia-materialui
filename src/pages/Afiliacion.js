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

const Afiliacion = () => {
  const classes = useStyles();
  const [pageName] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0, 'smooth');
  }, [pageName]);
  return (
    <div className={classes.root}>
      <div className={classes.marginPage}>
        <h1 className={classes.titleStyle}>Afiliación</h1>
        <p className={classes.paragraphStyle}>
          vitivipedia.com está formado por un grupo de profesionales cuyo
          objetivo es facilitar el proceso de búsqueda de información de los
          usuarios sobre productos de su interés y asesorarles en su decisión de
          compra. Todo el contenido e información que se puede encontrar en este
          sitio web está basado en las valoraciones profesionales y personales
          de nuestros expertos especializados en el mundo del vino.
        </p>

        <p className={classes.paragraphStyle}>
          En algunos casos ganamos comisiones a través los enlaces de los
          productos que se encuentran en algunos artículos y las listas de los
          mejores vinos. Pero, en cualquier caso, los análisis y comparativas de
          productos son independientes y no están patrocinados por ninguna marca
          ni proveedor por lo que la información ofrecida es objetiva, confiable
          y veraz.
        </p>

        <p className={classes.paragraphStyle}>
          Así mismo, los precios de los productos son fijados por los vendedores
          correspondientes en cada tienda online, están sujetos a variaciones y
          en ningún caso vitivipedia.com tiene control sobre las condiciones de
          venta, el stock disponible o los envíos y devoluciones de los mismos.
          Los enlaces de afiliado pueden generar comisiones para nuestra empresa
          pero de ningún modo modificar los precios que son iguales para los
          usuarios independientemente de desde dónde accedan a las tiendas para
          comprar los productos online
        </p>

        <p className={classes.paragraphStyle}>
          Las ganancias obtenidas con estas comisiones de afiliado permiten
          ampliar y mejorar los contenidos de este sitio web.
        </p>
        <p className={classes.paragraphStyle}>
          Este sitio web está inscrito en el programa de afiliados de Amazon.es
          y genera ingresos por las compras realizadas por los usuarios a través
          de los enlaces de afiliado que se pueden encontrar en ésta. Puede
          consultar las condiciones de este programa en la{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://afiliados.amazon.es/"
          >
            página oficial de Amazon.
          </a>
        </p>

        <p className={classes.paragraphStyle}>
          La inscripción a este programa no afecta a la información
          proporcionada en las páginas de este sitio web, es independiente,
          veraz y su finalidad principal es ayudar a los usuarios en su decisión
          de compra para cualquiera de los productos que se analizan en
          vitivipedia.com<br></br> <br></br> Amazon y el logotipo de Amazon son
          marcas comerciales de Amazon.com, Inc. o de sociedades de su grupo.
        </p>
      </div>
    </div>
  );
};

export default Afiliacion;
