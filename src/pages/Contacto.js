import React, { useState } from 'react';
import axios from 'axios';
import { useTheme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';

import Poster from '../blog-fotos/poster-viti.jpg';
import emailIcon from '../assets/email.svg';
import airplane from '../assets/send.svg';

const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${Poster})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    // height: '39.5em',
    marginTop: '-1.75em',
    [theme.breakpoints.up('md')]: {
      height: '39.5em'
    },
    [theme.breakpoints.down('lg')]: {
      height: '30em'
    },
    [theme.breakpoints.down('sm')]: {
      height: '20em',
      marginTop: '-1em'
    }
  },
  message: {
    marginTop: '2em',
    width: '15.3125em',
    '& .MuiInputBase-root': {
      color: '#000',
      border: `2px solid white`
    }
  },
  colorText: {
    '& .MuiInputBase-root': {
      color: '#000'
    },
    '& .MuiInputLabel-root:': {
      color: '#000'
    }
  },
  sendButton: {
    '& .MuiButtonBase-root': {
      color: '#000'
    },
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: '1rem',
    backgroundColor: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.common.mainColor
    },
    marginTop: '2em',
    marginBottom: '2em'
  },
  wraperContacta: {
    paddingLeft: '1.5em'
  },
  colorNombrePopUp: {
    '& .MuiInputLabel-root': {
      color: '#000000',
      width: '100%'
    }
  },
  borderTextFieldConfirmation: {
    border: '1px solid #000',
    width: '100%'
  }
}));

const Contacto = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [emailHelper, setMailHelper] = useState('');

  const [message, setMessage] = useState('');

  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ open: false, color: '' });
  // const [alertMessage, setAlertMesssage] = useState('');

  const onChange = event => {
    let valid;

    switch (event.target.id) {
      case 'email':
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );

        if (!valid) {
          setMailHelper('Email inválido');
        } else {
          setMailHelper('');
        }
        break;

      default:
        break;
    }
  };

  const onConfirm = cors => {
    setLoading(true);

    axios
      .post('https://api.vitivipedia.com/api/sendMail', {
        email: email,
        name: name,
        message: message
      })
      .then(res => {
        setLoading(false);
        setOpen(false);
        setName('');
        setEmail('');
        setMessage('');
        setAlert({
          open: true,
          message: 'Mensaje enviado correctamente',
          color: '#4BB543'
        });
        // setAlertMesssage('Mensaje enviado correctamente.');
      })
      .catch(err => {
        setLoading(false);
        setAlert({
          open: true,
          message: '¡Algo no funciona! Por favor, inténtalo de nuevo.',
          color: '#FF3232'
        });
        // setAlertMesssage('¡Algo no funciona! Por favor, inténtalo de nuevo.');
        console.error(err);
      });
  };

  const buttonContents = (
    <React.Fragment>
      Enviar mensaje{' '}
      <img src={airplane} alt="avion papel" style={{ marginLeft: '1em' }}></img>{' '}
    </React.Fragment>
  );

  return (
    <Grid container direction="row" className={classes.mainContainer}>
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        lg={3}
      >
        <Grid item>
          <Grid container direction="column" className={classes.wraperContacta}>
            <Grid item>
              <Typography
                variant="h3"
                style={{ color: '#000', marginBottom: '0.5em' }}
              >
                Contacta conmigo
              </Typography>
            </Grid>
            <Grid item container>
              <Grid item>
                <img
                  src={emailIcon}
                  alt="email"
                  style={{ marginRight: '0.5em', verticalAlign: 'bottom' }}
                />
              </Grid>
              <Typography variant="body1" style={{ color: '#000' }}>
                <a
                  href="mailto:contacto@vitivipedia.com"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  contacto@vitivipedia.com
                </a>
              </Typography>
            </Grid>
            <Grid item container direction="column">
              <Grid item>
                <TextField
                  label="Nombre"
                  classes={{ root: classes.colorText }}
                  id="name"
                  value={name}
                  required={true}
                  onChange={event => setName(event.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  classes={{ root: classes.colorText }}
                  label="Email"
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  id="email"
                  value={email}
                  required={true}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Grid item container>
              <TextField
                InputProps={{ disableUnderline: true }}
                classes={{ root: classes.message }}
                value={message}
                className={classes.message}
                multiline
                rows={10}
                id="message"
                required={true}
                onChange={event => setMessage(event.target.value)}
              ></TextField>
            </Grid>
            <Grid item>
              <Button
                onClick={() => setOpen(true)}
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  emailHelper.length !== 0
                }
                variant="contained"
                className={classes.sendButton}
              >
                Enviar mensaje{' '}
                <img
                  src={airplane}
                  alt="avion papel"
                  style={{ marginLeft: '1em' }}
                ></img>{' '}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent>
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Confirmar el envío del mensaje
            </Typography>
          </Grid>
          <Grid item container direction="column">
            <Grid item>
              <TextField
                classes={{ root: classes.colorNombrePopUp }}
                label="Nombre"
                id="name"
                value={name}
                required={true}
                onChange={event => setName(event.target.value)}
              />
            </Grid>
            <Grid item>
              <TextField
                classes={{ root: classes.colorNombrePopUp }}
                label="Email"
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                id="email"
                value={email}
                required={true}
                onChange={onChange}
              />
            </Grid>
          </Grid>
          <Grid item container>
            <TextField
              classes={{ root: classes.borderTextFieldConfirmation }}
              InputProps={{ disableUnderline: true }}
              value={message}
              multiline
              rows={10}
              id="message"
              required={true}
              onChange={event => setMessage(event.target.value)}
            ></TextField>
          </Grid>
          <Grid
            item
            container
            style={{ marginTop: '1em', justifyContent: 'space-between' }}
            alignItems="center"
          >
            <Grid item>
              <Button onClick={() => setOpen(false)}>Cancelar</Button>
            </Grid>
            <Grid item>
              <Button
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  emailHelper.length !== 0
                }
                variant="contained"
                className={classes.sendButton}
                onClick={onConfirm}
              >
                {loading ? <CircularProgress size={30} /> : buttonContents}
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />
      <Grid item container className={classes.background} lg={9}></Grid>
    </Grid>
  );
};

export default Contacto;
