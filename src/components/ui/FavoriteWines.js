import React from 'react';
import { connect } from 'react-redux';
import Grid from '@mui/material/Grid';

import RegionContainerWineCard from '../RegionContainerWineCard';
//import winelist from '../../wineList/list';

const FavoriteWines = ({ favWines }) => {
  return (
    <div style={{ minWidth: '250px', padding: '5.5em 1em 1em 1em' }}>
      {favWines.map((item, idx) => {
        return (
          <Grid item key={idx + item.name}>
            <RegionContainerWineCard
              name={item.name}
              region={item.region}
              dorigen={item.do}
              producer={item.producer}
              type={item.type}
              variedad={item.variedad}
              img={item.img}
              shortDescription={item.shortDescription}
              showHeart={false}
              clickable={true}
              wineData={item}
            />
          </Grid>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    favWines: state.fevoriteWineList
  };
};

export default connect(mapStateToProps)(FavoriteWines);
