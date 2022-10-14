import React, { useState } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Avatar from '@mui/material/Avatar';
import Disqus from '../components/ui/Disqus';

// -------- pictures ---------- /
import alambique from '../blog-fotos/elaboracionPisco/alambique-cobre.jpg';
import alambique1 from '../blog-fotos/elaboracionPisco/alambique.jpg';
import contenedor from '../blog-fotos/elaboracionPisco/contenedor-hormigon.jpg';
import contenedor1 from '../blog-fotos/elaboracionPisco/contenedores-pisco.jpg';
import mostoVerde from '../blog-fotos/elaboracionPisco/mosto-verde-cuba.jpg';
import piscos from '../blog-fotos/elaboracionPisco/piscos.jpg';
import racimos from '../blog-fotos/elaboracionPisco/racimos.jpg';
import uvaEstrujada from '../blog-fotos/elaboracionPisco/uva-estrujada.jpg';
import prensa from '../blog-fotos/elaboracionBlanco/prensa-tradicional.jpg';
import cubaVino from '../blog-fotos/elaboracionTinto/cuba-vino.jpg';
import decantacion from '../blog-fotos/elaboracionTinto/proceso-decantacion-vino.jpg';
import embotelladora from '../blog-fotos/elaboracionTinto/maquina-embotelladora.jpg';
import despalilladora from '../blog-fotos/elaboracionTinto/despalilladora-uvas.jpg';
import botijos from '../blog-fotos/elaboracionPisco/botijas-pisco.jpg';
import porton from '../blog-fotos/elaboracionPisco/botellas-porton.jpg';
import caravedo from '../blog-fotos/elaboracionPisco/hacienda-caravedo.jpg';
import antigua from '../blog-fotos/elaboracionPisco/destiladora-antigua.jpg';
import oficina from '../blog-fotos/elaboracionPisco/oficina.jpg';
import moderna from '../blog-fotos/elaboracionPisco/destiladora-moderna.jpg';
import cubas from '../blog-fotos/elaboracionPisco/cuvas-porton.jpg';
import portonPiscos from '../blog-fotos/elaboracionPisco/piscos-porton.jpg';

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

const Pisco = props => {
  const classes = useStyles();

  const [getTitle] = useState('¿Cómo se elabora el pisco peruano?');

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
            El pisco es el destilado tradicional de Perú. Si alguna vez te has
            preguntado cual es el proceso de elaboración del pisco peruano, aquí
            lo tienes.
          </p>
        </div>
        <div className={classes.imgContainerStyle}>
          <img
            className={classes.mainImgStyle}
            src={contenedor1}
            alt="contenedor pisco"
          />
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            El primer paso es vendimiar las variedades de uvas aceptadas.
            <br></br>
            <br></br> Las variedades se suelen distinguir entre dos clases,
            comúnmente conocidas como aromáticas y no aromáticas.<br></br>
            <br></br> Las aromáticas son: Italia, Torontel, Moscatel y Albilla.
            <br></br>
            <br></br>
            Las no aromáticas: Negra Criolla, Mollar, Quebranta y Uvina (esta
            última no recomendable por su genética).
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={racimos}
            alt="racimo uvas blancas"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Los racimos se depositan en la despalilladora, maquina que separa la
            uva del escobajo.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={despalilladora}
            alt="tolva acero vino"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            La uva estrujada (que no prensada) se deja macerar junto al hollejo
            de la uva. <br></br>
            <br></br>En este proceso no se inicia la fermentación alcohólica y
            se debe hacer en temperaturas bajas.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={uvaEstrujada}
            alt="uva estrujada depósito"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Una vez macerada, se prensa para obtener el mosto, materia prima
            para la elaboración del vino.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={prensa}
            alt="prensa vino"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            El mosto de la uva pasa a los tanques de fermentación.<br></br>
            <br></br> Aquí empieza la fermentación controlada con la ayuda de
            las levaduras.<br></br>
            <br></br>
            Obtendremos vino, que será la materia prima para la elaboración del
            pisco.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImglong}
            src={cubaVino}
            alt="cuba acero inoxidable"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Si queremos obtener pisco mosto verde, detendremos la fermentación
            cuando el vino tenga un alcohol entre el 8% o 9%. <br></br>
            <br></br>El azúcar residual del vino que no llega a fermentar, es la
            diferencia entre el pisco mosto verde y otros piscos.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImglong}
            src={mostoVerde}
            alt="mosto verde cuba"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            En el descube, el vino sale por abajo por gravedad. Quedando las
            partes solidas arriba. A estas partes solidas se las conoce como
            ''sombrero''.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImglong}
            src={decantacion}
            alt="decantacion vino"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            El vino fermentado se destila. Tras este proceso obtendremos el
            destilado llamado pisco. <br></br>
            <br></br> El pisco peruano solo puede destilarse una vez y nunca se
            rebaja con agua destilada.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgBottle}
            src={alambique}
            alt="alambique"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            A continuación, el pisco pasa a unos contenedores de hormigón
            neutros (no aportan sabor, olor ni color) donde deberá reposar un
            mínimo de tres meses antes de ser embotellado.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={contenedor}
            alt="contenedor"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            El pisco pasa a ser embotellado y listo para su comercialización.
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
            En resumen: el pisco peruano es un brandy de vino obtenido de
            diferentes varietales. no pasa por ningún proceso de añejamiento,
            conservando las propiedades organolépticas del producto original.
            <br></br>
            <br></br>
            El pisco sour es el cóctel más emblemático de este destilado. Un
            acierto sobre todo cuando hace calor!
            <br></br>
            <br></br>
            El pisco puede ser tanto de uva tinta o blanca y el primer proceso
            es la elaboración de vino.
            <br></br>
            <br></br>
            Además, una vez destilado, puede mezclarse, obteniendo así el
            destilado <b>denominado pisco acholado.</b>
          </p>
          <div>
            <img
              className={classes.responsiveImgs}
              src={piscos}
              alt="piscos"
            ></img>
          </div>
          <h3>Pisco: el destilado por excelencia del Perú</h3>
          <p className={classes.paragraphStyle}>
            Pisco, palabra que proviene de la lenguas prehispánicas y que
            significa ”ave”, es una Denominación de Origen Calificada. También
            es el río y el valle llamados del mismo modo.<br></br>
            <br></br> El nombre de Pisco también sirve para denominar a las
            antiguas botijas y a la gente pobladora de la zona, además del
            puerto.
          </p>
          <img
            className={classes.responsiveImgs}
            src={botijos}
            alt="botijos de pisco"
          ></img>
          <h3>Las regiones de producción del pisco</h3>
          <p className={classes.paragraphStyle}>
            Según el consejo regulador del Pisco, las únicas zonas autorizadas
            para la producción son: Lima, Ica, Arequipa, Moquegua, los valles de
            Locumba, Sama y Caplina.{' '}
            <b>Destaca la región de Ica como la de mayor producción.</b>
            <br></br>
            <br></br>
            La zona costera del sur del Perú es la más apropiada para el cultivo
            de la vid destinada a la producción del Pisco. Su clima es seco, con
            variaciones altas entre las temperaturas durante el día y noche
            además de no tener apenas precipitaciones.
          </p>
          <h3>Las variedades pisqueras</h3>
          <p className={classes.paragraphStyle}>
            Las ocho variedades pisqueras aceptadas son diferenciadas entre las
            <b>aromáticas y las no aromáticas.</b> Las no aromáticas:<br></br>
            <br></br>
            <ul>
              <li>
                <b>Negra criolla:</b> Una variedad que se relaciona con la
                listan negro, cultivada en las Islas Canarias. Probablemente una
                de las primeras variedades importadas al Perú. También conocidas
                en California como mission’s grape y en Argentina como criolla
                chica. Esta variedad produce piscos con buena estructura y una
                percepción alcohólica alta.
              </li>
              <br></br>
              <li>
                <b>Mollar:</b> Esta variedad se relaciona con la negramoll,
                también de las Islas Canarias. Se cultiva sobre todo en Arequipa
                y los piscos que se obtienen de ella son de buena estructura y
                una percepción alcohólica alta.
              </li>
              <br></br>
              <li>
                <b>Quebranta:</b> Reconocida como autóctona de Perú ya que
                después de tantos años se consiguió aclimatar al terroir
                peruano. Se considera la hija de la negra criolla. Es la
                variedad más cultivada. Los piscos producidos con esta variedad
                tienen una percepción alcohólica muy marcada al igual que sus
                aromas.
              </li>
              <br></br>
              <li>
                <b>Uvina:</b> Se cree que nace a partir de un cruce entre la
                lenoir y la black spanish. En Europa se reconoce como{' '}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://es.wikipedia.org/wiki/Jacquet_(uva)"
                >
                  jacquet
                </a>
                . Se trata de una variedad híbrida (vitis vinifera y especie
                americana), de poca estructura y una percepción alcohólica
                menor.
              </li>
              <br></br>
            </ul>
            Y las aromáticas:<br></br>
            <br></br>
            <ul>
              <li>
                <b>Italia:</b> Se trata de un cruce entre la Bicane y Moscatel
                de Hamburgo. Una variedad muy cultivada en el sur de Europa. Se
                conoce también en España como Doña Sofia. Los piscos que se
                obtienen de esta variedad son muy aromáticos, con una percepción
                de alcohol más bien baja.
              </li>
              <br></br>
              <li>
                <b>Torontel:</b> Se trata de otro moscatel, emparentada con el
                moscato bianco de Italia. Muy cultivada en Ica. Los piscos que
                obtenemos con esta variedad son sutiles, de poca percepción
                alcohólica, no tan aromáticos como la Italia pero muy finos en
                boca.
              </li>
              <br></br>
              <li>
                <b>Moscatel:</b> Esta variedad se relaciona directamente con la
                moscato rosso Italiana. Se cultiva en todas las regiones,
                destacando la zona de Arequipa. Los piscos que se obtienen de
                esta variedad son aromáticos, delicados y suaves.
              </li>
              <br></br>
              <li>
                <b>Albilla:</b> En España se conoce como albilla blanca. Se
                cultiva en todas las zonas productoras de Perú. Los piscos
                obtenidos con esta variedad son frescos y de estructura ligera.
              </li>
            </ul>
            <br></br>
          </p>
          <h2>Los distintos tipos de pisco en Perú</h2>
          <p className={classes.paragraphStyle}>
            Los piscos se pueden clasificar en tres tipos, según como se hayan
            producido:
            <br></br>
            <br></br>
            <ul>
              <li>
                <b>Pisco puro:</b> pisco elaborado exclusivamente de una de las
                variedades autorizadas para la producción de pisco. Si
                hiciéramos un símil con el vino, sería este como un
                monovarietal.
              </li>
              <br></br>
              <li>
                <b>Pisco acholado:</b> pisco que mezcla diferentes variedades
                autorizadas. No hay reglas que indiquen las proporciones ni
                tampoco la cantidad de variedades a mezclar. Además, se puede
                hacer la mezcla en cualquiera de los procesos de producción del
                producto; es decir, antes o después de que fermente el mosto, o
                incluso después de ser destilado.
              </li>
              <br></br>
              <li>
                <b>Pisco Mosto verde:</b> pisco elaborado destilando el vino
                base con azúcar residual. El aporte de azúcares en el vino no
                hace que el destilado tenga azúcar en sí, pero si ciertas
                cualidades. La ligereza y finura en boca son ejemplos de ellas.
                El precio suele ser más elevado ya que el rendimiento menor.
              </li>
              <br></br>

              <br></br>
              <img
                className={classes.responsiveImglong}
                src={alambique1}
                alt="alambique pisco"
              ></img>
            </ul>
          </p>
          <p className={classes.paragraphStyle}>
            <b>¿Puede ser un pisco mosto verde, a la vez, un pisco acholado?</b>{' '}
            si. El pisco mosto verde es un destilado a partir de un vino el cual
            no fue fermentado del todo . Si mezclamos diferentes piscos mosto
            verde, obtendremos un pisco acholado de mosto verde.
            <br></br>
            <br></br>
            De la misma forma, podremos obtener piscos mostos verde puros. Estos
            serán piscos mostos verdes monovarietales.<br></br>
            <br></br> El secreto de un buen pisco acholado -ya sea a base de
            pisco mosto verde o pisco puro- reside en la mezcla de las
            diferentes variedades. Los expertos que deciden esto toman en cuenta
            las propiedades organolépticas de cada variedad y las mezclan en
            proporciones adecuadas para dar lugar a un producto único.
          </p>
          <h3>Cualidades únicas del pisco peruano</h3>
          <p className={classes.paragraphStyle}>
            De la misma forma que el Brandy de Jerez o la Grappa italiana son
            productos únicos y bien definidos, así es el pisco. Los procesos de
            producción, regiones, materias primas y denominaciones son propios
            de cada producto.
            <br></br>
            <br></br>
            Además de las regiones autorizadas que apuntábamos al principio de
            este articulo, hay otras características para que este destilado sea
            único y no pueda confundirse con otros:
            <br></br>
            <br></br>
            <ul>
              <li>
                Solo puede producirse con las ocho variedades de uva pisquera
                que hemos visto anteriormente. Cualquier otra variedad no será
                aceptada por la denominación de origen.
              </li>
              <br></br>
              <li>
                Su destilación es inmediata, después de la primera fermentación.
                No existe la fermentación maloláctica.
              </li>
              <br></br>
              <li>
                Nunca se añeja en barrica. El destilado reposa, según el
                reglamento, un mínimo de 3 meses en contenedores neutros que no
                aportan ni sabores ni olores. Tampoco se puede usar ningún tipo
                de aditivos, colorantes ni aromatizantes. Debe ser, en esencia,
                un destilado puro de mosto de uva fermentado total o
                parcialmente (en el caso del pisco mosto verde).
              </li>
              <br></br>
              <li>
                No puede diluirse en agua para alcanzar el porcentaje de alcohol
                comercial deseado. Debe mantenerse entre los 40% y 48%.
              </li>
              <br></br>
              <li>Solo se puede destilar una vez.</li>
              <br></br>
            </ul>
          </p>
          <h3>
            Principales diferencias entre el pisco peruano y el pisco chileno
          </h3>
          <p className={classes.paragraphStyle}>
            Sin querer entrar en debate sobre quien merece la denominación de
            origen Pisco, citaré las principales diferencias entre el destilado
            producido en Perú y Chile:
            <br></br>
            <br></br>
            <ul>
              <li>
                En Perú se obtiene un destilado con un alcohol entre el 40% y el
                48%. En Chile puede llegar hasta el 73% para después agregar
                agua hasta lograr el porcentaje adecuado, procedimiento no
                permitido en Perú.
              </li>
              <br></br>
              <li>
                El pisco chileno puede ser añejado en barricas de roble, en Perú
                no está permitido.
              </li>
              <br></br>
              <li>
                Las variedades, aunque muchas veces coinciden, no son las mismas
                para ambos países.
              </li>
              <br></br>
              <li>
                Las zonas geográficas son diferentes -obviamente las
                pertenecientes a cada país-.
              </li>
            </ul>
            Como conclusión decir que los destilados que producen un país y otro
            tienen similitudes pero también propiedades únicas. En ambos países
            hay destilados de diversas calidades.
          </p>
          <h3>Pisco Portón (Bodega Caravedo)</h3>
          <p className={classes.paragraphStyle}>
            Durante un viaje que hice a Perú, pude vistar la bodega Caravedo, en
            Ica. Donde se produce el Pisco Portón.
          </p>
          <img
            className={classes.responsiveImgs}
            src={porton}
            alt="pisco porton"
          ></img>
          <p className={classes.paragraphStyle}>
            No se trata de cualquier bodega, si no de la destilería más antigua
            de América y ahora mismo, una de las más moderna. Gracias a Johnny
            Schuler aquí se produce uno de los piscos más exclusivos.
            <br></br>
            <br></br>A pesar de que producen pisco puro su producto insignia es
            el mosto verde. Tienen piscos mosto verde de todas las variedades
            menos de la uvina, además de un acholado elaborado con quebranta,
            torontel, italia y albilla.
            <br></br>
            <br></br>
            Cuando uno visita esta bodega, se puede observar la historia y el
            cariño que hay detrás. Se fundó en 1684 por Juan Facundo Caravedo y
            la nombro como Hacienda La Caravedo. Allí ya se empezó a producir
            pisco para la venta al público. Fue en el 2011 cuando Johnny Schuler
            junto a los propietarios Bill y Brent Kallop tomaron la andadura de
            crear todos estos productos.
          </p>
          <img
            className={classes.responsiveImgs}
            src={caravedo}
            alt="hacienda caravedo"
          ></img>
          <p className={classes.paragraphStyle}>
            Todas sus instalaciones son modernas o antiquísimas, es curioso
            apreciar la transformación de lo tradicional a lo moderno.
            <br></br>
            <br></br>Tuvimos la oportunidad de pasearnos por sus jardines, donde
            tienen varios caballos de paso peruano y dos alpacas muy simpáticas
            y bonitas. <br></br>
            <br></br>En las instalaciones viejas encontramos desde una prensa
            antiquísima compuesta por un tronco de huarango de dos toneladas,
            hasta la ”oficina”, lugar llamado así a las cubas de cemento donde
            llegaba el mosto de la uva prensado.
            <br></br>
            <br></br>
            <img
              className={classes.responsiveImgs}
              src={oficina}
              alt="oficina porton"
            ></img>
            <br></br>
            <p style={{ fontSize: '14px' }}>
              ''oficina'', aquí llegaba el mosto recién prensado
            </p>
            También encontramos lugares como las antiguas destiladoras, las
            cuales se siguen usando (y hasta el 2009 se usaban solo estas).
            <br></br>
            <br></br>
            <img
              className={classes.responsiveImgs}
              src={antigua}
              alt="destiladora antigua"
            ></img>
            <br></br>
            <p style={{ fontSize: '14px' }}>antigua destiladora</p>
            En la parte moderna de las instalaciones tenemos las cubas de acero
            inoxidable, los enormes tanques de cemento donde reposa el pisco (el
            pisco portón reposa 14 meses. Tiempo muy superior a los 3 meses
            mínimos contemplados por el consejo), y la preciosa y moderna
            destiladora de cobre de construcción alemana. <br></br>
            <br></br>
            <img
              className={classes.responsiveImgs}
              src={moderna}
              alt="destiladora moderna"
            ></img>
            <br></br>
            <p style={{ fontSize: '14px' }}>destiladora moderna</p>
            <img
              className={classes.responsiveImgs}
              src={cubas}
              alt="cubas pisco porton"
            ></img>
            <br></br>
            <p style={{ fontSize: '14px' }}>
              Grandes cubas de cemento donde reposa pisco portón durante 14
              meses
            </p>
            Después de charlar un buen rato con la guía que nos enseñó y explicó
            todo fuimos a hacer la cata de piscos. Todos los mostos verdes que
            pisco portón produce los degustamos y pudimos apreciar sus
            cualidades y diferencias de forma clara. <br></br>
            <br></br>Degustando las diferentes variedades queda clara la calidad
            del producto y las diferencias entre unos y otros. La negra criolla,
            la torontel e italia fueron mis favoritos.<br></br>
            <br></br> Para todo aquel que pase por Perú y visite Ica, creo que
            no debería perderse esta experiencia.
          </p>

          <img
            className={classes.responsiveImgs}
            src={portonPiscos}
            alt="seleccion piscos porton mosto verde"
          ></img>
          <br></br>
          <p style={{ fontSize: '14px' }}>Cata de piscos mosto verde</p>
          <Disqus
            url={window.location.href}
            identifier={window.location.href}
          />
        </div>
      </div>
    </div>
  );
};

export default Pisco;
