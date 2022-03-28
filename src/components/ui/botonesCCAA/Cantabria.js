import React from 'react';

import Button from '@mui/material/Button';

const BotonCantabria = ({ onClick, marginButtton, isActive }) => {
  return (
    <Button
      onClick={onClick}
      className={marginButtton}
      variant="contained"
      style={{ backgroundColor: '#C6C6C6', opacity: isActive ? 1 : 0.4 }}
    >
      Cantabria
    </Button>
  );
};

export default BotonCantabria;
