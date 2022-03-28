import React, { useState, useEffect } from 'react';
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
import { connect } from 'react-redux';
import actions from '../store/actions';

const useStyles = makeStyles(theme => ({
  loginContainer: {
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
  actionBtn: {
    width: '100%',
    backgroundColor: 'rgb(158, 30, 30)',
    color: 'white'
  }
}));

const Login = ({ user, saveUser }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const history = useHistory();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm();

  useEffect(() => {
    if (user) {
      history.goBack();
    }
  }, [user]);

  const loginButtonHandler = data => {
    setLoading(true);
    axios
      .post('https://backend.vitivipedia.com/wp-json/jwt-auth/v1/token', {
        password: data.password,
        username: data.email
      })
      .then(response => {
        return response.data;
      })
      .then(resData => {
        setLoading(false);
        if (resData.statusCode === 200) {
          saveUser(resData.data);
          localStorage.setItem('user', JSON.stringify(resData.data));
          setLoginSuccess(true);
          setTimeout(() => {
            history.push('/');
          }, 2000);
          reset(
            {
              email: '',
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
        }
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

    if (errors.password?.type && type === 'password') {
      if (errors.password?.type === 'required') return 'Password is required';
      if (errors.password?.type === 'minLength')
        return 'Password must be atleast 6 charecters';
      if (errors.password?.type === 'pattern')
        return 'Password must contain at least 1 number';
    }
  };

  return (
    <Container className={classes.loginContainer}>
      <Box className={classes.form}>
        <form onSubmit={handleSubmit(loginButtonHandler)}>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                component="h6"
                className={classes.heading}
              >
                Login
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
              <Box className={classes.btnContainer}>
                <Button className={classes.actionBtn} type="submit">
                  {loading ? <CircularProgress /> : 'Login'}
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className={classes.btnContainer}>
                <Button
                  className={classes.actionBtn}
                  onClick={e => {
                    e.preventDefault();
                    history.push('/registro');
                  }}
                >
                  Registrarse
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Snackbar
        open={loginSuccess}
        message="Login successful"
        ContentProps={{ style: { backgroundColor: '#004874' } }}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={() => setLoginSuccess(false)}
        autoHideDuration={2000}
      />
    </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
