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

  const [getTitle] = useState('??C??mo se elabora el pisco peruano?');

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
            El pisco es el destilado tradicional de Per??. Si alguna vez te has
            preguntado cual es el proceso de elaboraci??n del pisco peruano, aqu??
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
            com??nmente conocidas como arom??ticas y no arom??ticas.<br></br>
            <br></br> Las arom??ticas son: Italia, Torontel, Moscatel y Albilla.
            <br></br>
            <br></br>
            Las no arom??ticas: Negra Criolla, Mollar, Quebranta y Uvina (esta
            ??ltima no recomendable por su gen??tica).
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
            <br></br>En este proceso no se inicia la fermentaci??n alcoh??lica y
            se debe hacer en temperaturas bajas.
          </p>
        </div>
        <div>
          <img
            className={classes.responsiveImgs}
            src={uvaEstrujada}
            alt="uva estrujada dep??sito"
          ></img>
        </div>
        <div className={classes.paragraphStyleContainer}>
          <p className={classes.paragraphStyle}>
            Una vez macerada, se prensa para obtener el mosto, materia prima
            para la elaboraci??n del vino.
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
            El mosto de la uva pasa a los tanques de fermentaci??n.<br></br>
            <br></br> Aqu?? empieza la fermentaci??n controlada con la ayuda de
            las levaduras.<br></br>
            <br></br>
            Obtendremos vino, que ser?? la materia prima para la elaboraci??n del
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
            Si queremos obtener pisco mosto verde, detendremos la fermentaci??n
            cuando el vino tenga un alcohol entre el 8% o 9%. <br></br>
            <br></br>El az??car residual del vino que no llega a fermentar, es la
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
            A continuaci??n, el pisco pasa a unos contenedores de hormig??n
            neutros (no aportan sabor, olor ni color) donde deber?? reposar un
            m??nimo de tres meses antes de ser embotellado.
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
            El pisco pasa a ser embotellado y listo para su comercializaci??n.
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
            diferentes varietales. no pasa por ning??n proceso de a??ejamiento,
            conservando las propiedades organol??pticas del producto original.
            <br></br>
            <br></br>
            El pisco sour es el c??ctel m??s emblem??tico de este destilado. Un
            acierto sobre todo cuando hace calor!
            <br></br>
            <br></br>
            El pisco puede ser tanto de uva tinta o blanca y el primer proceso
            es la elaboraci??n de vino.
            <br></br>
            <br></br>
            Adem??s, una vez destilado, puede mezclarse, obteniendo as?? el
            destilado <b>denominado pisco acholado.</b>
          </p>
          <div>
            <img
              className={classes.responsiveImgs}
              src={piscos}
              alt="piscos"
            ></img>
          </div>
          <h3>Pisco: el destilado por excelencia del Per??</h3>
          <p className={classes.paragraphStyle}>
            Pisco, palabra que proviene de la lenguas prehisp??nicas y que
            significa ???ave???, es una Denominaci??n de Origen Calificada. Tambi??n
            es el r??o y el valle llamados del mismo modo.<br></br>
            <br></br> El nombre de Pisco tambi??n sirve para denominar a las
            antiguas botijas y a la gente pobladora de la zona, adem??s del
            puerto.
          </p>
          <img
            className={classes.responsiveImgs}
            src={botijos}
            alt="botijos de pisco"
          ></img>
          <h3>Las regiones de producci??n del pisco</h3>
          <p className={classes.paragraphStyle}>
            Seg??n el consejo regulador del Pisco, las ??nicas zonas autorizadas
            para la producci??n son: Lima, Ica, Arequipa, Moquegua, los valles de
            Locumba, Sama y Caplina.{' '}
            <b>Destaca la regi??n de Ica como la de mayor producci??n.</b>
            <br></br>
            <br></br>
            La zona costera del sur del Per?? es la m??s apropiada para el cultivo
            de la vid destinada a la producci??n del Pisco. Su clima es seco, con
            variaciones altas entre las temperaturas durante el d??a y noche
            adem??s de no tener apenas precipitaciones.
          </p>
          <h3>Las variedades pisqueras</h3>
          <p className={classes.paragraphStyle}>
            Las ocho variedades pisqueras aceptadas son diferenciadas entre las
            <b>arom??ticas y las no arom??ticas.</b> Las no arom??ticas:<br></br>
            <br></br>
            <ul>
              <li>
                <b>Negra criolla:</b> Una variedad que se relaciona con la
                listan negro, cultivada en las Islas Canarias. Probablemente una
                de las primeras variedades importadas al Per??. Tambi??n conocidas
                en California como mission???s grape y en Argentina como criolla
                chica. Esta variedad produce piscos con buena estructura y una
                percepci??n alcoh??lica alta.
              </li>
              <br></br>
              <li>
                <b>Mollar:</b> Esta variedad se relaciona con la negramoll,
                tambi??n de las Islas Canarias. Se cultiva sobre todo en Arequipa
                y los piscos que se obtienen de ella son de buena estructura y
                una percepci??n alcoh??lica alta.
              </li>
              <br></br>
              <li>
                <b>Quebranta:</b> Reconocida como aut??ctona de Per?? ya que
                despu??s de tantos a??os se consigui?? aclimatar al terroir
                peruano. Se considera la hija de la negra criolla. Es la
                variedad m??s cultivada. Los piscos producidos con esta variedad
                tienen una percepci??n alcoh??lica muy marcada al igual que sus
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
                . Se trata de una variedad h??brida (vitis vinifera y especie
                americana), de poca estructura y una percepci??n alcoh??lica
                menor.
              </li>
              <br></br>
            </ul>
            Y las arom??ticas:<br></br>
            <br></br>
            <ul>
              <li>
                <b>Italia:</b> Se trata de un cruce entre la Bicane y Moscatel
                de Hamburgo. Una variedad muy cultivada en el sur de Europa. Se
                conoce tambi??n en Espa??a como Do??a Sofia. Los piscos que se
                obtienen de esta variedad son muy arom??ticos, con una percepci??n
                de alcohol m??s bien baja.
              </li>
              <br></br>
              <li>
                <b>Torontel:</b> Se trata de otro moscatel, emparentada con el
                moscato bianco de Italia. Muy cultivada en Ica. Los piscos que
                obtenemos con esta variedad son sutiles, de poca percepci??n
                alcoh??lica, no tan arom??ticos como la Italia pero muy finos en
                boca.
              </li>
              <br></br>
              <li>
                <b>Moscatel:</b> Esta variedad se relaciona directamente con la
                moscato rosso Italiana. Se cultiva en todas las regiones,
                destacando la zona de Arequipa. Los piscos que se obtienen de
                esta variedad son arom??ticos, delicados y suaves.
              </li>
              <br></br>
              <li>
                <b>Albilla:</b> En Espa??a se conoce como albilla blanca. Se
                cultiva en todas las zonas productoras de Per??. Los piscos
                obtenidos con esta variedad son frescos y de estructura ligera.
              </li>
            </ul>
            <br></br>
          </p>
          <h2>Los distintos tipos de pisco en Per??</h2>
          <p className={classes.paragraphStyle}>
            Los piscos se pueden clasificar en tres tipos, seg??n como se hayan
            producido:
            <br></br>
            <br></br>
            <ul>
              <li>
                <b>Pisco puro:</b> pisco elaborado exclusivamente de una de las
                variedades autorizadas para la producci??n de pisco. Si
                hici??ramos un s??mil con el vino, ser??a este como un
                monovarietal.
              </li>
              <br></br>
              <li>
                <b>Pisco acholado:</b> pisco que mezcla diferentes variedades
                autorizadas. No hay reglas que indiquen las proporciones ni
                tampoco la cantidad de variedades a mezclar. Adem??s, se puede
                hacer la mezcla en cualquiera de los procesos de producci??n del
                producto; es decir, antes o despu??s de que fermente el mosto, o
                incluso despu??s de ser destilado.
              </li>
              <br></br>
              <li>
                <b>Pisco Mosto verde:</b> pisco elaborado destilando el vino
                base con az??car residual. El aporte de az??cares en el vino no
                hace que el destilado tenga az??car en s??, pero si ciertas
                cualidades. La ligereza y finura en boca son ejemplos de ellas.
                El precio suele ser m??s elevado ya que el rendimiento menor.
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
            <b>??Puede ser un pisco mosto verde, a la vez, un pisco acholado?</b>{' '}
            si. El pisco mosto verde es un destilado a partir de un vino el cual
            no fue fermentado del todo . Si mezclamos diferentes piscos mosto
            verde, obtendremos un pisco acholado de mosto verde.
            <br></br>
            <br></br>
            De la misma forma, podremos obtener piscos mostos verde puros. Estos
            ser??n piscos mostos verdes monovarietales.<br></br>
            <br></br> El secreto de un buen pisco acholado -ya sea a base de
            pisco mosto verde o pisco puro- reside en la mezcla de las
            diferentes variedades. Los expertos que deciden esto toman en cuenta
            las propiedades organol??pticas de cada variedad y las mezclan en
            proporciones adecuadas para dar lugar a un producto ??nico.
          </p>
          <h3>Cualidades ??nicas del pisco peruano</h3>
          <p className={classes.paragraphStyle}>
            De la misma forma que el Brandy de Jerez o la Grappa italiana son
            productos ??nicos y bien definidos, as?? es el pisco. Los procesos de
            producci??n, regiones, materias primas y denominaciones son propios
            de cada producto.
            <br></br>
            <br></br>
            Adem??s de las regiones autorizadas que apunt??bamos al principio de
            este articulo, hay otras caracter??sticas para que este destilado sea
            ??nico y no pueda confundirse con otros:
            <br></br>
            <br></br>
            <ul>
              <li>
                Solo puede producirse con las ocho variedades de uva pisquera
                que hemos visto anteriormente. Cualquier otra variedad no ser??
                aceptada por la denominaci??n de origen.
              </li>
              <br></br>
              <li>
                Su destilaci??n es inmediata, despu??s de la primera fermentaci??n.
                No existe la fermentaci??n malol??ctica.
              </li>
              <br></br>
              <li>
                Nunca se a??eja en barrica. El destilado reposa, seg??n el
                reglamento, un m??nimo de 3 meses en contenedores neutros que no
                aportan ni sabores ni olores. Tampoco se puede usar ning??n tipo
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
            Sin querer entrar en debate sobre quien merece la denominaci??n de
            origen Pisco, citar?? las principales diferencias entre el destilado
            producido en Per?? y Chile:
            <br></br>
            <br></br>
            <ul>
              <li>
                En Per?? se obtiene un destilado con un alcohol entre el 40% y el
                48%. En Chile puede llegar hasta el 73% para despu??s agregar
                agua hasta lograr el porcentaje adecuado, procedimiento no
                permitido en Per??.
              </li>
              <br></br>
              <li>
                El pisco chileno puede ser a??ejado en barricas de roble, en Per??
                no est?? permitido.
              </li>
              <br></br>
              <li>
                Las variedades, aunque muchas veces coinciden, no son las mismas
                para ambos pa??ses.
              </li>
              <br></br>
              <li>
                Las zonas geogr??ficas son diferentes -obviamente las
                pertenecientes a cada pa??s-.
              </li>
            </ul>
            Como conclusi??n decir que los destilados que producen un pa??s y otro
            tienen similitudes pero tambi??n propiedades ??nicas. En ambos pa??ses
            hay destilados de diversas calidades.
          </p>
          <h3>Pisco Port??n (Bodega Caravedo)</h3>
          <p className={classes.paragraphStyle}>
            Durante un viaje que hice a Per??, pude vistar la bodega Caravedo, en
            Ica. Donde se produce el Pisco Port??n.
          </p>
          <img
            className={classes.responsiveImgs}
            src={porton}
            alt="pisco porton"
          ></img>
          <p className={classes.paragraphStyle}>
            No se trata de cualquier bodega, si no de la destiler??a m??s antigua
            de Am??rica y ahora mismo, una de las m??s moderna. Gracias a Johnny
            Schuler aqu?? se produce uno de los piscos m??s exclusivos.
            <br></br>
            <br></br>A pesar de que producen pisco puro su producto insignia es
            el mosto verde. Tienen piscos mosto verde de todas las variedades
            menos de la uvina, adem??s de un acholado elaborado con quebranta,
            torontel, italia y albilla.
            <br></br>
            <br></br>
            Cuando uno visita esta bodega, se puede observar la historia y el
            cari??o que hay detr??s. Se fund?? en 1684 por Juan Facundo Caravedo y
            la nombro como Hacienda La Caravedo. All?? ya se empez?? a producir
            pisco para la venta al p??blico. Fue en el 2011 cuando Johnny Schuler
            junto a los propietarios Bill y Brent Kallop tomaron la andadura de
            crear todos estos productos.
          </p>
          <img
            className={classes.responsiveImgs}
            src={caravedo}
            alt="hacienda caravedo"
          ></img>
          <p className={classes.paragraphStyle}>
            Todas sus instalaciones son modernas o antiqu??simas, es curioso
            apreciar la transformaci??n de lo tradicional a lo moderno.
            <br></br>
            <br></br>Tuvimos la oportunidad de pasearnos por sus jardines, donde
            tienen varios caballos de paso peruano y dos alpacas muy simp??ticas
            y bonitas. <br></br>
            <br></br>En las instalaciones viejas encontramos desde una prensa
            antiqu??sima compuesta por un tronco de huarango de dos toneladas,
            hasta la ???oficina???, lugar llamado as?? a las cubas de cemento donde
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
              ''oficina'', aqu?? llegaba el mosto reci??n prensado
            </p>
            Tambi??n encontramos lugares como las antiguas destiladoras, las
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
            pisco port??n reposa 14 meses. Tiempo muy superior a los 3 meses
            m??nimos contemplados por el consejo), y la preciosa y moderna
            destiladora de cobre de construcci??n alemana. <br></br>
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
              Grandes cubas de cemento donde reposa pisco port??n durante 14
              meses
            </p>
            Despu??s de charlar un buen rato con la gu??a que nos ense???? y explic??
            todo fuimos a hacer la cata de piscos. Todos los mostos verdes que
            pisco port??n produce los degustamos y pudimos apreciar sus
            cualidades y diferencias de forma clara. <br></br>
            <br></br>Degustando las diferentes variedades queda clara la calidad
            del producto y las diferencias entre unos y otros. La negra criolla,
            la torontel e italia fueron mis favoritos.<br></br>
            <br></br> Para todo aquel que pase por Per?? y visite Ica, creo que
            no deber??a perderse esta experiencia.
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
