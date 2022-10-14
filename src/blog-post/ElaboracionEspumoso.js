import React, { useState } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Avatar from '@mui/material/Avatar';
import Disqus from '../components/ui/Disqus';

// -------- pictures ---------- /
import bodega from '../blog-fotos/espumosoElaboracion/bodega-champagne.jpg';
import botellasCava from '../blog-fotos/espumosoElaboracion/botellas-cava.jpg';
import dibujoChampagne from '../blog-fotos/espumosoElaboracion/champagne-botella-dibujo.jpg';
import taittinger from '../blog-fotos/espumosoElaboracion/champagne-taittinger.jpg';
import champagne from '../blog-fotos/espumosoElaboracion/champagne.jpg';
import levaduraCongelada from '../blog-fotos/espumosoElaboracion/congelacion-levadura.jpg';
import gyropalette from '../blog-fotos/espumosoElaboracion/gyropalette.jpg';
import levadura from '../blog-fotos/espumosoElaboracion/levadura-vino-espumoso.jpg';
import levaduraSalta from '../blog-fotos/espumosoElaboracion/levadura.jpg';
import pupitre from '../blog-fotos/espumosoElaboracion/pupitre-remuage.jpg';
import tapon from '../blog-fotos/espumosoElaboracion/tapon-jaula.jpg';
import uvas from '../blog-fotos/espumosoElaboracion/uvas.jpg';
import vinoBlanco from '../blog-fotos/elaboracionBlanco/vino-blanco.jpg';
import embotelladora from '../blog-fotos/elaboracionBlanco/embotelladora-vino.jpg';

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
      width: '40%',
      topMargin: '1em'
    },
    [theme.breakpoints.down('md')]: {
      width: '40%',
      topMargin: '1em'
    }
  }
}));

const ElaboracionEspumoso = props => {
  const classes = useStyles();

  const [getTitle] = useState('¿Qué es el vino espumoso y cómo se elabora?');

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
            src={dibujoChampagne}
            alt="champagne"
          />
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            El vino espumoso es un vino de calidad que suele elaborarse con el
            método clásico o método tradicional o también denominado como
            ''método champenoise''. <br></br>
            <br></br>Se trata de un vino que como su propio nombre indica,
            contiene gas carbónico (Co2), el cual se produce de forma natural en
            la segunda fermentación en botella. <br></br>
            <br></br>Aquí te explico su elaboración de forma gráfica.<br></br>
            <br></br> La base para la elaboración de un vino espumoso según el
            método tradicional es un vino tranquilo.<br></br>
            <br></br> Los vinos espumosos son normalmente mezclas de diferentes
            vinos y variedades. Esto se conoce como cuvé, que pueden ser de
            diferente añadas.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgBottle}
            src={vinoBlanco}
            alt="vino blanco"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            El siguiente paso es añadir el licor de tiraje al vino. Consiste en
            añadir un vino muy azucarado y levaduras.<br></br>
            <br></br> A continuación sellaremos las botellas con una chapa. Las
            levaduras crearán una segunda fermentación gracias al azúcar. Pero
            como el gas carbónico no puede escapar, se integrará en el vino.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={embotelladora}
            alt="licor de tiraje"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Después de añadir el licor de tiraje, el futuro vino espumoso
            permanecerá en bodegas diseñadas para su crianza. Aquí el vino
            descansa sobre sus propias lias (levaduras).<br></br>
            <br></br> En este proceso sucede la magia: el vino se llena de
            burbujas y obtiene aromas característicos.{' '}
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={bodega}
            alt="bodega cava"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            A continuación las botellas de vino espumoso son llevadas hasta los
            pupitres. Las botellas rotan (manualmente) y se inclinan poco a poco
            para conducir las levaduras hasta el cuello de la botella. Este
            proceso es minucioso, repetitivo y caro y en francés se conoce como
            remuage.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={pupitre}
            alt="pupitre vino espumoso"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Aunque todavía hay bodegas que trabajan manualmente, muchas han
            introducido el gyropalette. Esta máquina lleva las levaduras al
            cuello de la botella como en el proceso anterior.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={gyropalette}
            alt="gyropalette"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Después del largo proceso de crianza y de remuage en pupitres o
            gyropalettes, la parte solida habrá llegado al cuello de la botella.
            Estas levaduras han hecho su trabajo y queremos deshacernos de ellas
            para obtener un vino espumoso limpio.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={levadura}
            alt="levadura botella champagne"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Una vez tenemos todas las levaduras en el cuello de la botella, esta
            se congela.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImglong}
            src={levaduraCongelada}
            alt="levadura congelada"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Una vez tenemos las levaduras congeladas procedemos al degüelle, el
            tapón de la botella se retira y a causa de la presión interna de la
            botella, la parte solida sale disparada. <br></br>
            <br></br>Este proceso, como el remuage, sucede cada vez más de forma
            mecánica.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={levaduraSalta}
            alt="levadura saltando"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            El vino espumoso ha perdido algo de liquido por lo que es necesario
            rellenar. El licor de expedición es lo que añadimos en este momento.
            <br></br>
            <br></br>
            En este proceso se decidirá también como de dulce será el futuro
            producto, añadiendo si es necesario un vino azucarado.
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
            El vino espumoso según el método tradicional está listo. Tan solo
            tenemos que encorcharlo y poner su característica jaula que lo
            sujeta.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImglong}
            src={tapon}
            alt="tapon jaula cava"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            El vino espumoso, antes de salir al mercado, debe reposar durante un
            tiempo. <br></br>
            <br></br>El tiempo dependerá de las exigencias de cada zona
            productora o del propio productor.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={bodega}
            alt="bodega champagne"
          ></img>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={dibujoChampagne}
            alt="Champagne en dibujo"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Después de este largo proceso, costoso y laborioso, podrás disfrutar
            de tu vino espumoso. ¡Salud!
          </p>
          <h3>El proceso de elaboración del vino espumoso</h3>
          <p className={classes.paragraphStyle}>
            Es largo, costoso y pasa por unos procesos muy concretos, muchas
            veces casi artesanales. Es de entender que el vino espumoso sea más
            caro que un vino tranquilo. Si encuentras un vino espumoso que se
            elabora según el método tradicional barato, deberías desconfiar de
            la calidad.
          </p>
          <h3>¿Qué vinos espumosos usan el método tradicional?</h3>
          <p className={classes.paragraphStyle}>
            Hay varios vinos espumosos con diferentes denominaciones de origen
            que siempre usan este método: Champagne, Crémant, Cava, Franciacorta
            y Trento. Los dos primeros vienen de Francia,el tercero de España y
            los dos últimos de Italia.<br></br>
            <br></br> Hay muchos otros vinos alrededor del mundo que usan este
            mismo método, prácticamente todos los países productores de vino
            tienen vinos espumosos que siguen el método tradicional.
          </p>
          <h3>¿Qué diferencias existen entre el Champagne y el Cava?</h3>
          <p className={classes.paragraphStyle}>
            ¿Si el método de elaboración es el mismo, cual es la diferencia
            entonces?
          </p>
          <h4>El lugar</h4>
          <p className={classes.paragraphStyle}>
            La principal diferencia y la más obvia es el lugar de elaboración.
            Si en la etiqueta reza Champagne, entonces estamos hablando
            exclusivamente de un vino espumoso elaborado en la zona de
            Champagne, Francia, y claro está, con uvas del mismo lugar.
          </p>
        </div>
        <div>
          <img
            style={{ width: '90%', marginTop: '1em' }}
            src={champagne}
            alt="sirviendo champagne"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Si hablamos de <b>cava,</b> bueno, aquí la cosa se complica más ya
            que cuando esta denominación de origen se puso en marcha, eran
            varias las zonas productoras de vino espumoso en España y podemos
            encontrar en diferentes zonas.<br></br>
            <br></br> Eso si, mayoritariamente (más de un 90%) todos los cavas
            están producidos en el Penedès, Cataluña. En particular en el pueblo
            llamado Sant Sadurní d'Anoia. En todo caso, todo vino espumoso en el
            que ponga Cava, será exclusivamente producido en España.
          </p>
          <h4>Las variedades</h4>
          <p className={classes.paragraphStyle}>
            La segunda diferencia más importante es las variedades de uvas
            usadas. Para producir Champagne están permitidas tres variedades
            (dos tintas y una blanca), estas son:{' '}
            <b> Pinot noir, Pinot meunier y Chardonnay.</b>
          </p>
        </div>
        <div>
          <img
            style={{ width: '90%', marginTop: '1em' }}
            src={uvas}
            alt="uvas"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Para la producción de cava son más de tres las variedades permitidas
            pero las clásicas, las autóctonas y las que muchas bodegas les dan
            todo el peso son tres variedades blancas, estas son:{' '}
            <b> parellada, xarel·lo y macabeo.</b>
          </p>
          <h4>La climatología y el terroir</h4>
          <p className={classes.paragraphStyle}>
            Champagne esta situada en una de las zonas más al norte donde se
            puede cultivar la vid (esto gracias al cambio climático esta
            cambiando). Esto hace que las uvas no maduren como lo hacen en otros
            lugares más al sur. El resultado son uvas con una acidez alta. El
            clima es frío, lluvioso y en general poco estable. Por esta razón
            muchos Champagnes son ensamblajes de diferentes añadas, algo que les
            permite homogeneizar la calidad de sus vinos.<br></br>
            <br></br> Cuando las condiciones son optimas y la casa decide crear
            un Champagne usando el vino de una mismo año, en la etiqueta
            podremos ver la añada y leer Millésimé.
          </p>
        </div>
        <div>
          <img
            className={classes.blogImages}
            src={taittinger}
            alt="champagne taittinger"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            En Cataluña y en general en la zona del Penedès las condiciones
            climatológicas son distintas, permitiendo a las uvas madurar más.
            Esto evita que se use la chaptalización del vino para aumentar el
            nivel de alcohol en el vino base.<br></br>
            <br></br> El famoso terroir de Champagne es único. Sus tierras
            calcáreas, blancas debido a sedimentos marinos que datan de millones
            de años. Esta particular tierra tiene influencia directa en la viña.
            Se dice que gran parte del éxito del Champagne es debido a esas
            tierras tan especiales.
          </p>
          <h4>La Crianza</h4>
          <p className={classes.paragraphStyle}>
            Los cavas y los champagnes tienen diferencias en la crianza.
            <br></br>
            <br></br> Para los cavas serán necesarios 9 meses de crianza, para
            los cavas reserva 15 y para los gran reserva un mínimo de 30. Hay
            casas que optan por dejarlos mucho más tiempo.<br></br>
            <br></br> Para los champagnes sin embargo el tiempo mínimo es de 15
            meses (de los cuales 12 deberán ser en sus lías). Para los
            champagnes Millésimé, el mínimo es de 3 años. Prácticamente todas
            las casas de Champagne dejan mucho más tiempo sus vinos en crianza.{' '}
          </p>
          <h4>Estilos de Champagne</h4>
          <p className={classes.paragraphStyle}>
            Champagne Non-vintage: un concepto anglosajón para designar el
            Champagne que no tiene añada, mezcla de de diferentes vinos, un
            factor diferencial que marca una calidad estable año tras año. Esto
            corresponde a la mayoría de Champagnes.
          </p>
        </div>
        <div>
          <img
            style={{ width: '90%', marginTop: '1em' }}
            src={botellasCava}
            alt="botellas cava"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            <b>Millésime/Vintage:</b> Los champagnes son esta denominación son
            producidos tan solo con vinos de un añada en concreto. Son más caros
            y muchos productores optan por largas crianzas (de 6 a 10 años).
            <br></br>
            <br></br>
            <b>Blanc de blancs:</b>Champagne elaborado exclusivamente con
            variedades blancas. Como en Champagne la única uva blanca permitida
            es la Chardonnay, este{' '}
            <b>Champagne está elaborado tan solo 100% Chardonnay.</b>
            <br></br>
            <br></br>
            <b>Blanc de Noir:</b> Al contrario que el anterior, tan solo uvas
            tintas se habrán usado para la elaboración de este Champagne. La
            carne de la uva no tiene color y si no maceramos el mosto y tan solo
            prensamos la uva, obtendremos un vino blanco de uvas tintas. Las
            variedades de estos Champagnes serán{' '}
            <b>Pinot Noir y Pinot Meunier.</b>
            <br></br>
            <br></br>
            <b>Rosé:</b> Champagne rosado. Una peculiaridad del Champagne rosado
            es que se puede mezclar vino blanco y tinto para obtener un vino
            rosado (antes de la segunda fermentación en botella). Una excepción
            en toda regla.
          </p>
        </div>
        <Disqus url={window.location.href} identifier={window.location.href} />
      </div>
    </div>
  );
};

export default ElaboracionEspumoso;
