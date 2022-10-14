import React from 'react';

import Button from '@mui/material/Button';

const BotonMurcia = ({ onClick, marginButtton, isActive }) => {
  return (
    <Button
      onClick={onClick}
      className={marginButtton}
      variant="contained"
      style={{ backgroundColor: '#FF9E1C', opacity: isActive ? 1 : 0.4 }}
    >
      Murcia
    </Button>
  );
};

export default BotonMurcia;
