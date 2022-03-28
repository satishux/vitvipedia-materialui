import React, { useState } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import BotonComponent from './botonesCCAA/BotonComponent';

const useStyles = makeStyles(() => ({
  sideBar: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '0.5em',
    height: '110vh',
    overflow: 'scroll',
    '& button': {
      color: 'white'
    }
  },
  marginBottomButton: {
    marginBottom: '0.76em',
    marginLeft: '1.7em',
    marginRight: '1.2em',
    height: '3em'
  }
}));

const SideCcaaNavigation = ({
  toggleMapas,
  currentRegion,
  setCurrentRegion,
  mapHeight,
  regionSelected
}) => {
  const classes = useStyles();

  const [buttonList] = useState([
    { title: 'España', value: 'Espana', color: '#014874' },
    { title: 'Andalucía', value: 'Andalucia', color: '#014874' },
    { title: 'Aragón', value: 'Aragon', color: '#014874' },
    { title: 'Asturias', value: 'Asturias', color: '#014874' },
    { title: 'Cantabria', value: 'Cantabria', color: '#014874' },
    {
      title: 'Castilla la Mancha',
      value: 'CastillaLaMancha',
      color: '#014874'
    },
    { title: 'Castilla y León', value: 'CastillaLeon', color: '#014874' },
    { title: 'Cataluña', value: 'Cataluna', color: '#014874' },
    { title: 'Extremadura', value: 'Extremadura', color: '#014874' },
    { title: 'Galicia', value: 'Galicia', color: '#014874' },
    { title: 'Islas Baleares', value: 'IslasBaleares', color: '#014874' },
    { title: 'Islas Canarias', value: 'IslasCanarias', color: '#014874' },
    { title: 'Madrid', value: 'Madrid', color: '#014874' },
    { title: 'Murcia', value: 'Murcia', color: '#014874' },
    { title: 'Navarra', value: 'Navarra', color: '#014874' },
    { title: 'País Vasco', value: 'PaisVasco', color: '#014874' },
    { title: 'La Rioja', value: 'Rioja', color: '#014874' },
    { title: 'Valencia', value: 'Valencia', color: '#014874' }
  ]);

  return (
    <div
      className={classes.sideBar}
      style={{ height: mapHeight ? mapHeight : '' }}
    >
      {buttonList.map((item, index) => (
        <BotonComponent
          key={index + item.value}
          marginButtton={classes.marginBottomButton}
          onClick={() => toggleMapas(item.value, true)}
          isActive={currentRegion === item.value ? true : false}
          title={item.title}
          buttonColor={item.color}
          hoverButtonList={setCurrentRegion}
          value={item.value}
          regionSelected={regionSelected}
        />
      ))}
    </div>
  );
};

export default SideCcaaNavigation;
