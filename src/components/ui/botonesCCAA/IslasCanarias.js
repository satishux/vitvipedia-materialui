import React from 'react';

import Button from '@mui/material/Button';

const BotonIslasCanarias = ({ onClick, marginButtton, isActive }) => {
  return (
    <Button
      onClick={onClick}
      className={marginButtton}
      variant="contained"
      style={{ backgroundColor: '#F7D0BE', opacity: isActive ? 1 : 0.4 }}
    >
      Islas Canarias
    </Button>
  );
};

export default BotonIslasCanarias;
