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
    const updatedProductInfo = {};

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

      if (meta.key === 'region') {
        updatedProductInfo.region = meta.value;
      }
    });

    setProductInfo(updatedProductInfo);
  }, [wine]);


  const getLabel = (text) => {
    let updatedText = '';
    let updatedTextArray = text.replace('_', ' ').split(' ');

    updatedTextArray.forEach(item => {
      if (updatedText === '') {
        updatedText = item[0].toUpperCase() + item.substring(1, item.length);
      } else {
        updatedText = updatedText + ' ' + item[0].toUpperCase() + item.substring(1, item.length);
      }
    })

    return updatedText;
  }

  return (
    <div className={classes.winecardRoot}>
      <Card style={{ cursor: 'pointer' }} onClick={() => history.push(`/vino/${wine.slug}`)}>
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

                    if (value && value !== '' && key !== 'Tamaño') {
                      return <Box key={`${key}-${value}`} display="flex" style={{ padding: '10px 0' }}>
                        <Typography>
                          <span className={classes.wineDetailInfo}>{getLabel(key)}:</span>{' '}
                        </Typography>
                        <Chip label={value.length > 30 ? value.substring(0, 30) + '...' : value} size="small" />
                      </Box>
                    }

                    return null;
                  })}



                </Box>
              </Box>
            </Grid>

          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default WineCard;
