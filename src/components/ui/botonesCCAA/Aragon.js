import React from 'react';

import Button from '@mui/material/Button';

const BotonAragon = ({ onClick, marginButtton, isActive }) => {
  return (
    <Button
      onClick={onClick}
      className={marginButtton}
      variant="contained"
      style={{ backgroundColor: '#F84937', opacity: isActive ? 1 : 0.4 }}
    >
      Aragón
    </Button>
  );
};

export default BotonAragon;
