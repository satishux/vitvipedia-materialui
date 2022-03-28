import React from 'react';

import Button from '@mui/material/Button';

const BotonGalicia = ({ onClick, marginButtton, isActive }) => {
  return (
    <Button
      onClick={onClick}
      className={marginButtton}
      variant="contained"
      style={{ backgroundColor: '#780014', opacity: isActive ? 1 : 0.4 }}
    >
      Galicia
    </Button>
  );
};

export default BotonGalicia;
