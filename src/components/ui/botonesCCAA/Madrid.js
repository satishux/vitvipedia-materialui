import React from 'react';

import Button from '@mui/material/Button';

const BotonMadrid = ({ onClick, marginButtton, isActive }) => {
  return (
    <Button
      onClick={onClick}
      className={marginButtton}
      variant="contained"
      style={{ backgroundColor: '#E0925F', opacity: isActive ? 1 : 0.4 }}
    >
      Madrid
    </Button>
  );
};

export default BotonMadrid;
