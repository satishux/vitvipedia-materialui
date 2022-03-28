import React from 'react';

import Button from '@mui/material/Button';

const BotonCastillaLeon = ({ onClick, marginButtton, isActive }) => {
  return (
    <Button
      onClick={onClick}
      className={marginButtton}
      variant="contained"
      style={{ backgroundColor: '#9A2525', opacity: isActive ? 1 : 0.4 }}
    >
      Castilla y León
    </Button>
  );
};

export default BotonCastillaLeon;
