import React, { useState } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Snackbar,
  Typography,
  Dialog,
  DialogContent,
  DialogActions,
  DialogContentText,
  DialogTitle
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import axios from 'axios';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import actions from '../../store/actions';
const consumer_key = 'ck_1dba763719cb378e99ec68def39b18b16e9cb3c7';
const consumer_secret = 'cs_fac9c617b03b9dc71562585a46772f4103585c48';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },

  heading: {
    textAlign: 'center',
    width: '100%'
  },
  btnContainer: {
    marginTop: '1em'
  },
  registerBtn: {
    width: '100%',
    backgroundColor: 'rgb(158, 30, 30)',
    color: 'white'
  }
}));

const UserDelete = ({ user, saveUser }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    setLoading(true);
    axios
      .delete(
        `https://backend.vitivipedia.com/wp-json/wc/v3/customers/${user.id}?force=true&consumer_key=${consumer_key}&consumer_secret=${consumer_secret}`
      )
      .then(response => response.data)
      .then(userData => {
        setLoading(false);
        setOpen(false);
        saveUser(null);
        localStorage.removeItem('user');
        history.push('/');
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <>
      <div className={classes.root}>
        <Box style={{ marginTop: '1em' }}>
          <Typography
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '1.7em'
            }}
          >
            {' '}
            Are you sure to delete the account?
          </Typography>
        </Box>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Button
            type="button"
            onClick={handleClickOpen}
            style={{
              color: 'white',
              backgroundColor: 'rgb(158, 30, 30)',
              paddingLeft: '2em',
              paddingRight: '2em',
              marginTop: '1.2em'
            }}
          >
            Delete
          </Button>
        </Box>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Delete Account?'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to deleted this account, it will remove all data from
            server.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleDelete} color="primary" autoFocus>
            {loading ? <CircularProgress /> : 'Agree'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveUser: user => dispatch(actions.saveUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDelete);
