import { Box, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import ProducerCard from './ProducerCard';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import makeStyles from '@mui/styles/makeStyles';
import { connect } from 'react-redux';
import actions from '../store/actions';

const useStyles = makeStyles(() => ({
  backToProducerArrow: {
    color: 'black',
    backgroundColor: '#ccc'
  }
}));

const RegionContainerProducerList = ({
  region,
  producer,
  showSpecificWines,
  backToAllProducers,
  resetSelectedProducer
}) => {
  const classes = useStyles();
  return <>
    <Box
      style={{
        display: 'flex',
        width: '100%',
        marginBottom: '1em'
      }}
    >
      <Typography variant="subtitle1" component="p" style={{ flex: 1 }}>
        <strong>
          {region && region !== 'Espana' ? 'Elaborador: ' : 'Región: '}
        </strong>
        {producer.category.name}
      </Typography>
      <IconButton 
        className={classes.backToProducerArrow} 
        size="large" 
        onClick={e => {
          backToAllProducers(e);
          resetSelectedProducer();
        }}
      >
        <RotateLeftIcon />
      </IconButton>
    </Box>
    {region && region !== 'Espana' && (
      <Grid container>
        <ProducerCard
          item={{
            image: producer.category.image,
            name: producer.category.name,
            description: producer.category.description,
            slug: producer.category.slug
          }}
        />
      </Grid>
    )}

    {producer.category.children.length > 0 && (
      <Grid container>
        {producer.category.children.map((item, index) => (
          <ProducerCard
            key={`producer-item-${index}`}
            item={item}
            producer={producer}
            showSpecificWines={showSpecificWines}
          />
        ))}
      </Grid>
    )}
  </>;
};

const mapDispatchToProps = dispatch => {
  return {
    resetSelectedProducer: () => dispatch(actions.resetSelectedProducer())
  };
};

export default connect(null, mapDispatchToProps)(RegionContainerProducerList);
