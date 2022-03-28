import perdiz from '../vinos/canta-la-perdiz.png';
import sketch from '../vinos/Sketch-raul-perez.jpg';
import mirum from '../vinos/mirum.png';

const wines = [
  {
    name: 'Sketch',
    region: 'Galicia',
    do: 'Rias Baixas',
    producer: 'Raúl Pérez',
    type: 'white',
    variedad: 'albariño',
    img: sketch,
    shortDescription:
      'Vino elaborado por el afamado elaborador Raúl Pérez. Se trata de un albariño único con un aura llena de misticismos.',
    href: 'https://aficionadovino.com'
  },
  {
    name: 'Albamar',
    region: 'Galicia',
    do: 'Rias Baixas',
    producer: 'Bodegas Albamar',
    type: 'red',
    variedad: 'Mencía, Caíño, Espadeiro',
    img: perdiz,
    href: 'https://aficionadovino.com'
  },
  {
    name: 'La Dama',
    region: 'Navarra',
    do: 'Navarra',
    producer: 'Domaine Lupier',
    type: 'red',
    variedad: 'Garnacha',
    img: mirum
  },
  {
    name: 'Capricho D Goya',
    region: 'Navarra',
    do: 'Navarra',
    producer: 'Bodegas Camilo Castilla',
    type: 'white',
    variedad: 'Moscatel de grano menudo',
    img: sketch
  },
  {
    name: 'Belondrade y Lurton',
    region: 'CastillaLeon',
    do: 'Rueda',
    producer: 'Bodegas Camilo Castilla',
    type: 'white',
    variedad: 'Verdejo',
    img: sketch
  },
  {
    name: 'Els Escurçons',
    region: 'Cataluna',
    do: 'Priorat',
    producer: 'Mas Martinet',
    type: 'red',
    variedad: 'Garnacha',
    img: perdiz
  },
  {
    name: 'La Rioja Alta, Gran Reserva 904',
    region: 'Rioja',
    do: 'Rioja',
    producer: 'La Rioja Alta',
    type: 'red',
    variedad: 'Tempranillo, Mazuelo, Graciano',
    img: sketch
  },
  {
    name: 'Remírez de Ganuza, Reserva',
    region: 'Rioja',
    do: 'Rioja',
    producer: 'Bodegas Fernando Remírez de Ganuza',
    type: 'red',
    variedad: 'Tempranillo, Graciano, Viura, Malvasía',
    img: perdiz
  },
  {
    name: 'Viña Tondonia Reserva',
    region: 'Rioja',
    do: 'Rioja',
    producer: 'R López de Heredia',
    type: 'white',
    variedad: 'Viura, Malvasía',
    img: sketch
  },
  {
    name: 'Jorge Ordoñez Nº 1',
    region: 'Andalucia',
    do: 'Málaga',
    producer: 'Jorge Ordoñez & Co',
    type: 'white',
    variedad: 'Moscatel de Alejandría',
    img: sketch
  },
  {
    name: 'Jorge Ordoñez Nº 2',
    region: 'Andalucia',
    do: 'Málaga',
    producer: 'Jorge Ordoñez & Co',
    type: 'white',
    variedad: 'Moscatel de Alejandría',
    img: sketch
  }
];

export default wines;
