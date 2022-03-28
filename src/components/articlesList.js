import Pablo from '../blog-fotos/pablo.png';
import copaTinto from '../blog-fotos/elaboracionTinto/vino-tinto-botella-copa.jpg';
import copaBlanco from '../blog-fotos/elaboracionBlanco/vino-blanco.jpg';
import copaRosado from '../blog-fotos/elaboracionRosado/vino-rosado-botella-copa.jpg';
import Pisco from '../blog-fotos/elaboracionPisco/piscos.jpg';
import Espumoso from '../blog-fotos/espumosoElaboracion/champagne-botella-dibujo.jpg';
import Carbonico from '../blog-fotos/elaboracionCarbonica/elaboracion-carbonica.jpg';
import jimador from '../blog-fotos/tequila/jimador.jpg';
import horno from '../blog-fotos/mezcal/horno_mezcal.jpg';
import master from '../blog-fotos/masterSommelier/court_of_master_sommeliers_logo.jpg';
import wset from '../blog-fotos/masterSommelier/wset.png';

const listOfArticles = [
  {
    img: copaTinto,
    title: '¿Cómo se elabora el vino tinto?',
    content: `Podemos afirmar que el vino tinto es una bebida milenaria,
      pero ¿sabes cómo se elabora? En Vitivipedia te lo explicamos.`,
    avatar: Pablo,
    author: 'Pablo Galisteo',
    route: '/blog/elaboracion-vino-tinto',
    bookmarked: false
  },
  {
    img: copaBlanco,
    title: '¿Cómo se elabora el vino blanco?',
    content: `El vino blanco es, junto al tinto, de los más producidos del mundo, 
      en Vitivipedia te enseñamos el proceso de elaboración del vino blanco.`,
    avatar: Pablo,
    author: 'Pablo Galisteo',
    route: '/blog/elaboracion-vino-blanco',
    bookmarked: false
  },
  {
    img: copaRosado,
    title: '¿Cómo se elabora el vino rosado?',
    content: `El vino rosado es sinonimo de verano. Este vino resulta algo así como
      el hermano pequeño de los vinos, pero puede encajar perfectamente para según que ocasiones`,
    avatar: Pablo,
    author: 'Pablo Galisteo',
    route: '/blog/elaboracion-vino-rosado',
    bookmarked: false
  },
  {
    img: Espumoso,
    title: '¿Cómo se elabora el vino espumoso?',
    content: `El pisco es un destilado elaborado en países como Perú o Chile. Descubre
      como se elabora esta controvertida bebida, perfecta para elaborar un riquísimo pisco-sour`,
    avatar: Pablo,
    author: 'Pablo Galisteo',
    route: '/blog/elaboracion-vino-espumoso',
    bookmarked: false
  },
  {
    img: Carbonico,
    title: '¿Qué es la fermentación carbónica?',
    content: `El pisco es un destilado elaborado en países como Perú o Chile. Descubre
      como se elabora esta controvertida bebida, perfecta para elaborar un riquísimo pisco-sour`,
    avatar: Pablo,
    author: 'Pablo Galisteo',
    route: '/blog/fermentacion-carbonica',
    bookmarked: false
  },
  {
    img: Pisco,
    title: 'Descubre cómo se elabora el pisco',
    content: `El pisco es un destilado elaborado en países como Perú o Chile. Descubre
      como se elabora esta controvertida bebida, perfecta para elaborar un riquísimo pisco-sour`,
    avatar: Pablo,
    author: 'Pablo Galisteo',
    route: '/blog/elaboracion-pisco',
    bookmarked: false
  },
  {
    img: jimador,
    title: '¿Cómo se elabora el tequila?',
    content: `¿Quién no conoce el tequila? ¿pero sabrías cómo se elabora este fascinante destilado?
    en Vitivipedia te explicamos todos sus secretos`,
    avatar: Pablo,
    author: 'Pablo Galisteo',
    route: '/blog/elaboracion-tequila',
    bookmarked: false
  },
  {
    img: horno,
    title: '¿Cómo se elabora el mezcal?',
    content: `El mezcal ha sido en los últimos años venerado como un tequila superior. Su 
    caracter ahumado lo hace único y especial. Descubre como se elabora gracias a este artículo.`,
    avatar: Pablo,
    author: 'Pablo Galisteo',
    route: '/blog/elaboracion-mezcal',
    bookmarked: false
  },
  {
    img: master,
    title: '¿Qué es la Court of Master Sommeliers (CMS)?',
    content: `Los títulos de esta institución son altamente reconocidos en el mundo del vino. También son 
    de las pruebas más duras que existen.`,
    avatar: Pablo,
    author: 'Pablo Galisteo',
    route: '/blog/master-sommelier',
    bookmarked: false
  },
  {
    img: wset,
    title: '¿Qué es el Wine and Spirit Education Trust (WSET)?',
    content: `Los títulos de la Wine and Spirit Education Trust ofrecen una base solida de la cata del vino y todo lo relacionado con la vitivinicultura.`,
    avatar: Pablo,
    author: 'Pablo Galisteo',
    route: '/blog/wset-wine-spirit-education-trust',
    bookmarked: false
  }
];

export default listOfArticles;
