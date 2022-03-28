import { Button, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ButtonGroup from '@mui/material/ButtonGroup';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  textInput: {
    '& .MuiInputBase-root': {
      height: '2.42em',
      borderRadius: 0
    }
  }
}));

const QuantityCounter = ({ wineStock, onChange, quantity }) => {
  const classes = useStyles();
  const [qty, setQty] = useState(() => {
    if (quantity) {
      return quantity;
    } else {
      return 1;
    }
  });

  useEffect(() => {
    if (onChange) {
      onChange(qty);
    }
  }, [qty]);

  const changeQuantity = value => {
    if (value > wineStock) {
      setQty(wineStock);
      return;
    }
    if (value <= 0) {
      setQty(1);
      return;
    }
    setQty(parseInt(value));
  };

  return (
    <div>
      <ButtonGroup>
        <Button
          size="small"
          style={{ height: '3em' }}
          onClick={() => {
            if (qty <= 1) {
              return;
            }
            setQty(qty - 1);
          }}
        >
          <RemoveIcon fontSize="small" />
        </Button>
        <TextField
          style={{ height: '3em', width: '3em' }}
          classes={{ root: classes.textInput }}
          value={qty}
          type="number"
          onChange={e => changeQuantity(e.target.value)}
        />
        <Button
          size="small"
          style={{ height: '3em' }}
          onClick={() => {
            if (qty >= wineStock) {
              return;
            }
            setQty(qty + 1);
          }}
        >
          <AddIcon fontSize="small" />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default QuantityCounter;
