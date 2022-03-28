import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import actions from '../../store/actions';

const UserDropdown = ({ anchorEl, handleClose, logout }) => {
  const history = useHistory();

  const logoutHandler = () => {
    localStorage.removeItem('user');
    logout();
  };

  return (
    <div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ zIndex: 1350 }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            history.push('/cuenta');
          }}
        >
          My account
        </MenuItem>
        {/* <MenuItem
          onClick={() => {
            handleClose();
            history.push('/carrito');
          }}
        >
          Carrito
        </MenuItem> */}
        <MenuItem
          onClick={() => {
            handleClose();
            logoutHandler();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  };
};
export default connect(null, mapDispatchToProps)(UserDropdown);
