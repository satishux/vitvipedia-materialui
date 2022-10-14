import React from 'react';

import Button from '@mui/material/Button';

const BotonCataluna = ({ onClick, marginButtton, isActive }) => {
  return (
    <Button
      onClick={onClick}
      className={marginButtton}
      variant="contained"
      style={{ backgroundColor: '#810E47', opacity: isActive ? 1 : 0.4 }}
    >
      Cataluña
    </Button>
  );
};

export default BotonCataluna;
