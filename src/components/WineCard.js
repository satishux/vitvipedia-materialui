import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import {
  Card,
  CardContent,
  Grid,
  Box,
  Typography,
  Chip
} from '@mui/material';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  winecardRoot: {
    margin: '1em',
    overflow: 'hidden'
  },
  wineCardContent: {
    marginTop: theme.spacing(-2),
    marginLeft: theme.spacing(-2),
    marginRight: theme.spacing(-2),
    marginBottom: theme.spacing(-3)
  },
  wineCardInfo: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1em',
    
  },
  priceStyling: {
    color: '#dd4433',
    marginLeft: '.5em',
    position: 'relative',
    bottom: '3px'
  },
  buyButtonStyle: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  wineDetailInfo: {
    fontFamily: 'Lora',
    fontWeight: 'bold',
    marginRight: '10px'
  }
}));

const WineCard = ({ wine }) => {
  const classes = useStyles();
  const history = useHistory();
  const [productInfo, setProductInfo] = useState({
    type: null,
    Tamaño: null,
    variedad: null
  });


  useEffect(() => {
    const updatedProductInfo = { ...productInfo };

    wine.meta_data.forEach(meta => {
      // updatedProductInfo[meta.key] = meta.value;
      if (meta.key === 'type') {
        updatedProductInfo.type = meta.value;
      }
      if (meta.key === 'Tamaño') {
        updatedProductInfo.Tamaño = meta.value;
      }

      if (meta.key === 'variedad') {
        updatedProductInfo.variedad = meta.value;
      }

      if (meta.key === 'do') {
        updatedProductInfo.do = meta.value;
      }

      if(meta.key === 'region') {
        updatedProductInfo.region = meta.value;
      }
    });

    setProductInfo(updatedProductInfo);
  }, [wine, productInfo]);


  const getLabel = (text) => {
    let updatedText = '';
    let updatedTextArray = text.replace('_', ' ').split(' ');

    updatedTextArray.forEach(item => {
      if(updatedText === '') {
        updatedText = item[0].toUpperCase() + item.substring(1, item.length);
      } else {
        updatedText = updatedText + ' ' + item[0].toUpperCase() + item.substring(1, item.length);
      }
    })
    
    return updatedText;
  }

  return (
    <div className={classes.winecardRoot}>
      <Card style={{cursor: 'pointer'}} onClick={() =>  history.push(`/vino/${wine.slug}`)}>
        <CardContent className={classes.wineCardContent}>
          <Grid container>
            <Grid
              item
              style={{ width: '100px', display: 'flex', alignItems: 'center' }}
            >
              <img
                src={wine.image}
                alt={wine.name}
                style={{
                  width: '100px',
                  height: '178px',
                  objectFit: 'contain'
                }}
              />
            </Grid>
            <Grid item style={{ flex: 1 }}>
              <Box className={classes.wineCardInfo}>
                <Typography
                  variant="h5"
                  component="h5"
                  style={{ fontFamily: 'Lora', fontWeight: 'bold' }}
                >
                  {wine.name}
                </Typography>

                <Box>
                  {/* {productInfo.Tamaño && (
                    <Typography
                      style={{
                        color: '#999',
                        fontSize: '0.9em',
                        marginBottom: '1em'
                      }}
                    >
                      Botella de {productInfo.Tamaño}
                    </Typography>
                  )} */}
                  <Typography
                        style={{
                          color: '#999',
                          fontSize: '0.9em',
                          marginBottom: '1em'
                        }}
                      >
                        Botella de {productInfo['Tamaño']}
                      </Typography>
                  
                  {Object.entries(productInfo).map(([key, value]) => {
                    
                    if(value && value !== '' && key !== 'Tamaño' ) {
                      return  <Box display="flex" style={{padding: '10px 0'}}>
                        <Typography>
                          <span className={classes.wineDetailInfo}>{getLabel(key)}:</span>{' '}
                        </Typography>
                        <Chip label={value.length > 30 ?  value.substring(0, 30) + '...' : value} size="small" />
                      </Box>
                    }

                    return null;
                  })}


                  {/* {productInfo.do && (
                    <Box display="flex">
                      <Typography>
                        <span className={classes.wineDetailInfo}>D.O:</span>{' '}
                      </Typography>
                      <Chip label={productInfo.do} size="small" />
                    </Box>
                  )}
                  {productInfo.type && (
                    <Box display="flex">
                      <Typography>
                        <span className={classes.wineDetailInfo}>
                          Tipo de vino:
                        </span>{' '}
                      </Typography>
                      <Chip label={productInfo.type} size="small" />
                    </Box>
                  )}
                  {productInfo.variedad && (
                    <Box display="flex">
                      <Typography>
                        <span className={classes.wineDetailInfo}>Variedad:</span>{' '}
                      </Typography>
                      <Chip label={productInfo.variedad} size="small" />
                    </ Box>
                  )}
                  <Box display="flex">
                    <Typography>
                      <span className={classes.wineDetailInfo}>
                        Número de botellas:
                      </span>{' '}
                    </Typography>
                    <Chip label={wine.stock_quantity} size="small" />
                  </Box> */}

                </Box>
              </Box>
            </Grid>
            {/* <Grid item xs={12} style={{ padding: '1em' }}>
              <Divider style={{ marginTop: '0.7em', marginBottom: '0.7em' }} />
              <Box style={{ display: 'flex', alignItems: 'flex-end' }}>
                {wine.price && (
                  <Typography variant="h4" component="h4">
                    {wine.price}€
                  </Typography>
                )}
                {wine.price === wine.sale_price && (
                  <Typography
                    className={classes.priceStyling}
                    variant="h6"
                    component="h6"
                  >
                    <del>{wine.regular_price}€ </del>
                  </Typography>
                )}
              </Box>
              <Box className={classes.buyButtonStyle}>
                <QuantityCounter wineStock={wine.stock_quantity} />
                <Box>
                  <Button
                    variant="outlined"
                    startIcon={<ShoppingCartIcon />}
                    style={{
                      height: '2.75em',
                      backgroundColor: '#004874',
                      color: 'white',
                      textTransform: 'initial'
                    }}
                  >
                    Añadir al carrito
                  </Button>
                </Box>
              </Box>
            </Grid> */}
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default WineCard;
