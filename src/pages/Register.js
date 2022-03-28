import React, { useState } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
  Snackbar
} from '@mui/material';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  registerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    display: 'flex'
  },
  form: {
    width: '400px',
    minHeight: '100px',
    padding: '1em',
    border: '1px solid #ccc',
    borderRadius: '.5em',
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      top: '-100px'
    }
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

const Register = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [registrationSuccess, setRegistrantionSuccess] = useState(false);
  const history = useHistory();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm();

  const registerButtonHandler = data => {
    setLoading(true);
    axios
      .post('https://backend.vitivipedia.com/wp-json/wp/v2/users/register', {
        username: data.username,
        password: data.password,
        email: data.email,
        firstname: data.firstname,
        lastname: data.lastname
      })
      .then(response => {
        setLoading(false);
        setRegistrantionSuccess(true);
        setTimeout(() => {
          history.push('/login');
        }, 2000);
        reset(
          {
            email: '',
            firstname: '',
            lastname: '',
            username: '',
            password: ''
          },
          {
            keepErrors: false,
            keepDirty: false,
            keepIsSubmitted: false,
            keepTouched: false,
            keepIsValid: false,
            keepSubmitCount: false
          }
        );
      })
      .catch(err => {
        setLoading(false);
        console.log('err is ' + err);
      });
  };

  const getErrorText = (errors, type) => {
    if (errors.email?.type && type === 'email') {
      if (errors.email?.type === 'required') return 'Email is required';
      if (errors.email?.type === 'pattern') return 'Email is not valid';
    }

    if (errors.username?.type && type === 'username') {
      if (errors.username?.type === 'required') return 'User name is required';
      if (errors.username?.type === 'minLength')
        return 'User name must be atleast 4 charecters';
    }
    if (errors.password?.type && type === 'password') {
      if (errors.password?.type === 'required') return 'Password is required';
      if (errors.password?.type === 'minLength')
        return 'Password must be atleast 6 charecters';
      if (errors.password?.type === 'pattern')
        return 'Password must contain at least 1 number';
    }

    if (errors.firstname?.type && type === 'firstname') {
      if (errors.firstname?.type === 'required')
        return 'First Name is required';
      if (errors.firstname?.type === 'minLength')
        return 'User name must be atleast 3 charecters';
    }
  };

  return (
    <Container className={classes.registerContainer}>
      <Box className={classes.form}>
        <form onSubmit={handleSubmit(registerButtonHandler)}>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                component="h6"
                className={classes.heading}
              >
                Registro
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
                }}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    label="Email*"
                    {...field}
                    error={errors.email?.type ? true : false}
                    helperText={errors && getErrorText(errors, 'email')}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="username"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 4
                }}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    label="Nombre de usuario*"
                    {...field}
                    error={errors.username?.type ? true : false}
                    helperText={getErrorText(errors, 'username')}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 6,
                  pattern: /^.*[0-9].*$/
                }}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    label="Contraseña*"
                    {...field}
                    error={errors.password?.type ? true : false}
                    helperText={getErrorText(errors, 'password')}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="firstname"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 3
                }}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    label="Nombre*"
                    {...field}
                    error={errors.firstname?.type ? true : false}
                    helperText={getErrorText(errors, 'firstname')}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="lastname"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField fullWidth label="Apellido" {...field} />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Box className={classes.btnContainer}>
                <Button className={classes.registerBtn} type="submit">
                  {loading ? <CircularProgress /> : 'Registrarse'}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Snackbar
        open={registrationSuccess}
        message="Registration was successful"
        ContentProps={{ style: { backgroundColor: '#004874' } }}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={() => setRegistrantionSuccess(false)}
        autoHideDuration={2000}
      />
    </Container>
  );
};

export default Register;
