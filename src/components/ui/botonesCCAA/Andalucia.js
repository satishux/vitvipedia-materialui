import React from 'react';
import Button from '@mui/material/Button';

const BotonAndalucia = ({ onClick, marginButtton, isActive }) => {
  return (
    <Button
      onClick={onClick}
      className={marginButtton}
      variant="contained"
      style={{ backgroundColor: '#E84A28', opacity: isActive ? 1 : 0.4 }}
    >
      Andalucía
    </Button>
  );
};

export default BotonAndalucia;
