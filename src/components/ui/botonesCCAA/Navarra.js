import React from 'react';

import Button from '@mui/material/Button';

const BotonNavarra = ({ onClick, marginButtton, isActive }) => {
  return (
    <Button
      onClick={onClick}
      className={marginButtton}
      variant="contained"
      style={{ backgroundColor: '#F9DA3B', opacity: isActive ? 1 : 0.4 }}
    >
      Navarra
    </Button>
  );
};

export default BotonNavarra;
