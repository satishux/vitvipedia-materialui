import { Chip, Typography } from '@mui/material';
import React from 'react';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(() => ({
  wineDetailInfo: {
    fontFamily: 'Lora',
    fontWeight: 'bold'
  }
}));

const WineInfo = ({ Tamaño, dorigen, type, variedad, description, stock }) => {
  const classes = useStyles();
  return (
    <>
      {Tamaño && (
        <Typography
          style={{
            color: '#999',
            fontSize: '0.9em',
            marginBottom: '1em'
          }}
        >
          Botella de {Tamaño}
        </Typography>
      )}
      {dorigen && (
        <Typography>
          <span className={classes.wineDetailInfo}>D.O:</span>{' '}
          <Chip label={dorigen} size="small" />
        </Typography>
      )}
      {type && (
        <Typography>
          <span className={classes.wineDetailInfo}>Tipo de vino:</span>{' '}
          <Chip label={type} size="small" />
        </Typography>
      )}
      {variedad && (
        <Typography>
          <span className={classes.wineDetailInfo}>Variedad:</span>{' '}
          <Chip label={variedad} size="small" />
        </Typography>
      )}
      {/* <Typography>
        <span className={classes.wineDetailInfo}>Número de botellas:</span>{' '}
        <Chip label={stock} size="small" />
      </Typography> */}
      {description && (
        <Typography
          style={{ marginTop: '1.2em' }}
          paragraph
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </>
  );
};

export default WineInfo;
