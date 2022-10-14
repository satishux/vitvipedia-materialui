import React from 'react';

import Button from '@mui/material/Button';

const BotonAsturias = ({ onClick, marginButtton, isActive }) => {
  return (
    <Button
      onClick={onClick}
      className={marginButtton}
      variant="contained"
      style={{ backgroundColor: '#991945', opacity: isActive ? 1 : 0.4 }}
    >
      Asturias
    </Button>
  );
};

export default BotonAsturias;
