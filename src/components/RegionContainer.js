import { Card, CardContent, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import axios from 'axios';
import { connect } from 'react-redux';
import actions from '../store/actions';

import RegionContainerWineList from './RegionContainerWineList';
import RegionContainerProducerList from './RegionContainerProducerList';
import Loader from '../pages/Loader';

const useStyles = makeStyles(theme => ({
  containerStyling: {
    display: 'flex',
    width: '100%'
  },
  cardStyle: {
    marginBottom: '1em'
  },
  regionCard: {
    [theme.breakpoints.up('md')]: {
      marginRight: '1em'
    }
  },
  producerMargin: {
    margin: '-1em'
  },
  headerPadding: {
    padding: '1em',
    borderBottom: '1px solid #ccc'
  },
  producerImg: {
    height: '150px',
    width: 'auto'
  },
  producer: {
    padding: '1em',
    borderRadius: 0,
    borderBottom: '1px solid #ccc',

    '&:last-child': {
      borderBottom: 'none'
    }
  },
  wineHeading: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },

}));

const regionGrapeDescription = [
  {
    region: 'cantabria',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi esse illo officiis magnam eveniet!'
  },
  {
    region: 'asturias',
    description:
      'ASturias ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi esse illo officiis magnam eveniet!'
  },
  {
    region: 'andalucia',
    description:
      '<b>Andalucia</b> ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi esse illo officiis magnam eveniet!'
  },
  {
    region: 'madrid',
    description:
      'Madrid ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi esse illo officiis magnam eveniet!'
  }
];

const RegionContainer = ({ region, regionTitle, storeFetchedProducts }) => {
  const classes = useStyles();
  const [regionData, setRegionData] = useState(null);
  const [grapeDescription, setGrapeDescription] = useState('');
  const [selectedProducer, setSelectedProducer] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [loading ,setLoading] = useState(false);
  const mounted = useRef(false);
    
  useEffect(() => {
      mounted.current = true;

      return () => {
          mounted.current = false;
      };
  }, []);
  
  useEffect(() => {
    
    const getRegionData = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          `https://backend.vitivipedia.com/wp-json/vitivipedia/v1/category/${region.toLowerCase()}`,
          
        );

       
        const data = response.data; // wordpress format
        setRegionData(data);
        setLoading(false);

      } catch(err) {
        setLoading(false);
        console.log('ERROR is ' + err);
      }

    };
      if(mounted.current) {
        getRegionData();
        const index = regionGrapeDescription.findIndex(
          item => item.region === region.toLowerCase()
        );
        if (index >= 0) {
          setGrapeDescription(regionGrapeDescription[index].description);
        }
      }


  }, [region]);

  const showSpecificWines = (producerId, regionName) => {
    setSelectedProducer(producerId);
    setSelectedRegion(regionName);
  };

  const backToAllProducers = e => {
    e.stopPropagation();
    e.preventDefault();
    setSelectedRegion(null);
    setSelectedProducer(null);
  };

  const getRegionDescription = () => {
    if (region.toLowerCase() === 'espana') {
      return 'description for espana';
    } else {
      return regionData.description;
    }
    // return regionData.description;

  };

  let body = <Loader />;

  if(!loading) {
    body =   (
      <div className={classes.containerStyling}>
        <Grid container>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Card className={`${classes.cardStyle} ${classes.regionCard}`}>
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="h5"
                      style={{ marginBottom: '1em' }}
                    >
                      Descripción vinícola de la región {regionTitle}
                    </Typography>
                    <Typography variant="p" component="p">
                      {regionData && getRegionDescription()}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card className={classes.cardStyle}>
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="h5"
                      style={{ marginBottom: '1em' }}
                    >
                      Variedades típicas de {regionTitle}
                    </Typography>
                    <Typography
                      variant="p"
                      component="p"
                      dangerouslySetInnerHTML={{ __html: regionData && regionData.content ? regionData.content : '' }}
                    />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
  
          <Grid item xs={12}>
            <Card className={classes.cardStyle}>
              <Grid container className={classes.headerPadding}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" component="h6">
                    Productores
                  </Typography>
                </Grid>
                <Grid item md={6} className={classes.wineHeading}>
                  <Typography variant="h6" component="h6">
                    Vinos
                  </Typography>
                </Grid>
              </Grid>
              <CardContent className={classes.producerMargin}>
                {regionData && regionData.children && 
                  regionData.children.map(producer => (
                    <Paper elevation={0} key={producer.category.term_id} className={classes.producer}>
                      <Grid container>
                        <Grid
                          item
                          md={6}
                          xs={12}
                          container
                          alignItems="center"
                          style={{
                            flexDirection: 'column',
                            position: 'relative'
                          }}
                        >
                          <RegionContainerProducerList
                            region={region}
                            producer={producer}
                            showSpecificWines={showSpecificWines}
                            backToAllProducers={backToAllProducers}
                          />
                        </Grid>
                        {/* Producer section ends */}
  
                        {/* Wine section starts */}
                        <Grid item md={6} xs={12}>
                          <RegionContainerWineList
                            producer={producer}
                            selectedRegion={selectedRegion}
                            selectedProducer={selectedProducer}
                            regionName={region}
                          />
                        </Grid>
                      </Grid>
                    </Paper>
                  ))}
                
                {regionData && regionData.children.length === 0 && (
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      padding: '2em'
                    }}
                  >
                    <Typography variant="h6" component="h6">
                      Actualmente no hay elaboradores para esta comunidad
                      autónoma. Si te gustaría aparecer aquí, ponte en contacto
                      conmigo.
                    </Typography>
                  </div>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>    
    );
  }
  

  return body;
};

// const mapStateToProps = state => {
//   return {
//     appLoading: state.loading
//   }
// }

const mapDispatchToProps = dispatch => {
  return {
    setLoading: (val) => dispatch(actions.setLoading(val)), 
  }
}

export default connect(null, mapDispatchToProps)(RegionContainer);
