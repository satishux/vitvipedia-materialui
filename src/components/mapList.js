// -------- mapas ----------- //
import EspanaMapa from '../mapas/España.js';

import { ReactComponent as AndaluciaMapa } from '../mapas/Andalucia.svg';
import { ReactComponent as AragonMapa } from '../mapas/Aragón.svg';
import { ReactComponent as AsturiasMapa } from '../mapas/Asturias.svg';
import { ReactComponent as CantabriaMapa } from '../mapas/Cantabria.svg';
import { ReactComponent as CastillaLaManchaMapa } from '../mapas/Castilla-la-Mancha.svg';
import { ReactComponent as CastillaLeonMapa } from '../mapas/Castilla y León.svg';
import { ReactComponent as CatalunaMapa } from '../mapas/Cataluña.svg';
import { ReactComponent as ExtremaduraMapa } from '../mapas/Extremadura.svg';
import { ReactComponent as GaliciaMapa } from '../mapas/Galicia.svg';
import { ReactComponent as IslasBalearesMapa } from '../mapas/Islas Baleares.svg';
import { ReactComponent as IslasCanariasMapa } from '../mapas/Islas Canarias.svg';
import { ReactComponent as MadridMapa } from '../mapas/Madrid.svg';
import { ReactComponent as MurciaMapa } from '../mapas/Murcia.svg';
import { ReactComponent as NavarraMapa } from '../mapas/Navarra.svg';
import { ReactComponent as PaisVascoMapa } from '../mapas/País Vasco.svg';
import { ReactComponent as RiojaMapa } from '../mapas/Rioja.svg';
import ValenciaMapa from '../mapas/Valencia.js';

const list = [
  {
    name: 'Espana',
    component: EspanaMapa,
    isVisible: true,
    correctTitle: 'España'
  },
  {
    name: 'Andalucia',
    component: AndaluciaMapa,
    isVisible: false,
    correctTitle: 'Andalucía'
  },
  {
    name: 'Aragon',
    component: AragonMapa,
    isVisible: false,
    correctTitle: 'Aragón'
  },
  {
    name: 'Asturias',
    component: AsturiasMapa,
    isVisible: false,
    correctTitle: 'Asturias'
  },
  {
    name: 'Cantabria',
    component: CantabriaMapa,
    isVisible: false,
    correctTitle: 'Cantabria'
  },
  {
    name: 'CastillaLaMancha',
    component: CastillaLaManchaMapa,
    isVisible: false,
    correctTitle: 'Castilla la Mancha'
  },
  {
    name: 'CastillaLeon',
    component: CastillaLeonMapa,
    isVisible: false,
    correctTitle: 'Castilla y León'
  },
  {
    name: 'Cataluna',
    component: CatalunaMapa,
    isVisible: false,
    correctTitle: 'Cataluña'
  },
  {
    name: 'Extremadura',
    component: ExtremaduraMapa,
    isVisible: false,
    correctTitle: 'Extremadura'
  },
  {
    name: 'Galicia',
    component: GaliciaMapa,
    isVisible: false,
    correctTitle: 'Galicia'
  },
  {
    name: 'IslasBaleares',
    component: IslasBalearesMapa,
    isVisible: false,
    correctTitle: 'Islas Baleares'
  },
  {
    name: 'IslasCanarias',
    component: IslasCanariasMapa,
    isVisible: false,
    correctTitle: 'Islas Canarias'
  },
  {
    name: 'Madrid',
    component: MadridMapa,
    isVisible: false,
    correctTitle: 'Madrid'
  },
  {
    name: 'Murcia',
    component: MurciaMapa,
    isVisible: false,
    correctTitle: 'Murcia'
  },
  {
    name: 'Navarra',
    component: NavarraMapa,
    isVisible: false,
    correctTitle: 'Navarra'
  },
  {
    name: 'PaisVasco',
    component: PaisVascoMapa,
    isVisible: false,
    correctTitle: 'País Vasco'
  },
  {
    name: 'Rioja',
    component: RiojaMapa,
    isVisible: false,
    correctTitle: 'La Rioja'
  },
  {
    name: 'Valencia',
    component: ValenciaMapa,
    isVisible: false,
    correctTitle: 'Valencia'
  }
];

export default list;
