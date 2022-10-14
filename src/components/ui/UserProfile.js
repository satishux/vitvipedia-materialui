import React, { useState } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Snackbar,
  TextField,
  Typography
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import { connect } from 'react-redux';
import actions from '../../store/actions';
const consumer_key = 'ck_1dba763719cb378e99ec68def39b18b16e9cb3c7';
const consumer_secret = 'cs_fac9c617b03b9dc71562585a46772f4103585c48';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  form: {
    minHeight: '100px',
    padding: '1em'
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

const UserProfile = ({ user, saveUser }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm();

  const updateButtonHandler = data => {
    console.log(data);
    setLoading(true);
    axios
      .put(
        `https://backend.vitivipedia.com/wp-json/wc/v3/customers/${user.id}?consumer_key=${consumer_key}&consumer_secret=${consumer_secret}`,
        {
          email: data.email,
          first_name: data.firstname,
          last_name: data.lastname
        }
      )
      .then(response => response.data)
      .then(data => {
        const updatedUserData = {
          ...user,
          email: data.email,
          nicename: data.username,
          firstName: data.first_name,
          lastName: data.last_name
        };
        localStorage.setItem('user', JSON.stringify(updatedUserData));
        saveUser(updatedUserData);
        setLoading(false);
        setUpdateSuccess(true);
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
    // if (errors.password?.type && type === 'password') {
    //   if (errors.password?.type === 'required') return 'Password is required';
    //   if (errors.password?.type === 'minLength')
    //     return 'Password must be atleast 6 charecters';
    //   if (errors.password?.type === 'pattern')
    //     return 'Password must contain at least 1 number';
    // }

    if (errors.firstname?.type && type === 'firstname') {
      if (errors.firstname?.type === 'required')
        return 'First Name is required';
      if (errors.firstname?.type === 'minLength')
        return 'User name must be atleast 3 charecters';
    }
  };

  return <>
    <div className={classes.root}>
      <Box className={classes.form}>
        <form onSubmit={handleSubmit(updateButtonHandler)}>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                component="h6"
                className={classes.heading}
              >
                Perfil de usuario
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="email"
                control={control}
                defaultValue={user.email}
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
                defaultValue={user.nicename}
                rules={
                  {
                    //required: true,
                    // minLength: 4
                  }
                }
                render={({ field }) => (
                  <TextField
                    fullWidth
                    label="Nombre de usuario*"
                    disabled={true}
                    {...field}
                    error={errors.username?.type ? true : false}
                    helperText={getErrorText(errors, 'username')}
                  />
                )}
              />
            </Grid>
            {/* <Grid item xs={12}>
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
          </Grid> */}
            <Grid item xs={12}>
              <Controller
                name="firstname"
                control={control}
                defaultValue={user.firstName}
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
                defaultValue={user.lastName}
                render={({ field }) => (
                  <TextField fullWidth label="Apellido" {...field} />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Box className={classes.btnContainer}>
                <Button className={classes.registerBtn} type="submit">
                  {loading ? <CircularProgress /> : 'Actualizar Perfil'}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
    </div>
    <Snackbar
      open={updateSuccess}
      message="Perfil actualizado"
      ContentProps={{
        style: {
          backgroundColor: '#22cc22',
          position: 'absolute',
          top: '60px'
        }
      }}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      onClose={() => setUpdateSuccess(false)}
      autoHideDuration={2000}
    />
  </>;
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    saveUser: data => dispatch(actions.saveUser(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
