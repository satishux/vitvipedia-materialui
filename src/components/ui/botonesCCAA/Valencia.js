import React from 'react';

import Button from '@mui/material/Button';

const BotonValencia = ({ onClick, marginButtton, isActive }) => {
  return (
    <Button
      onClick={onClick}
      className={marginButtton}
      variant="contained"
      style={{ backgroundColor: '#FFC309', opacity: isActive ? 1 : 0.4 }}
    >
      Valencia
    </Button>
  );
};

export default BotonValencia;
