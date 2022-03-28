import {
  Box,
  Button,
  CircularProgress,
  Grid,
  MenuItem,
  Snackbar,
  TextField,
  Typography
} from '@mui/material';
import React, { useState } from 'react';
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

const UserAddresses = ({ user, saveUserAddress, cities }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  //const [cities, setCities] = useState([]);
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm();

  //   useEffect(() => {
  //     axios
  //       .get(`https://backend.vitivipedia.com/wp-json/vitivipedia/v1/cities`)
  //       .then(response => response.data)
  //       .then(data => {
  //         const ctys = Object.entries(data).map(([key, value]) => {
  //           return { label: value, value: key };
  //         });
  //         setCities(ctys);
  //       })
  //       .catch(err => {
  //         console.log('err is ' + err);
  //       });
  //   }, []);

  const updateButtonHandler = data => {
    console.log(data);
    setLoading(true);
    axios
      .put(
        `https://backend.vitivipedia.com/wp-json/wc/v3/customers/${user.id}?consumer_key=${consumer_key}&consumer_secret=${consumer_secret}`,
        {
          shipping: {
            first_name: data.firstname,
            last_name: data.lastname,
            address_1: data.address,
            city: data.city,
            state: data.province,
            postcode: data.zip,
            country: 'ES',
            phone: data.phone
          }
        }
      )
      .then(response => response.data)
      .then(data => {
        // const updatedUserData = {
        //   ...user,
        //   firstName: data.first_name,
        //   lastName: data.last_name
        // };
        saveUserAddress(data.shipping);
        setLoading(false);
        setUpdateSuccess(true);
      })
      .catch(err => {
        setLoading(false);
        console.log('err is ' + err);
      });
  };

  const getErrorText = (errors, type) => {
    if (errors.city?.type && type === 'city') {
      if (errors.city?.type === 'required')
        return 'El campo ciudad es obligatorio';
      if (errors.city?.type === 'minLength')
        return 'La ciudad debe tener almenos 3 caracteres';
    }

    if (errors.address?.type && type === 'address') {
      if (errors.address?.type === 'required')
        return 'El campo dirección es obligatorio';
      if (errors.address?.type === 'minLength')
        return 'La dirección debe tener almenos 3 caracteres';
    }

    if (errors.zip?.type && type === 'zip') {
      if (errors.zip?.type === 'required')
        return 'El campo código postal es obligatorio';
      if (errors.zip?.type === 'minLength')
        return 'El código postal debe tener almenos 3 caracteres';
      if (errors.zip?.type === 'pattern') return 'Postal code must number';
    }

    if (errors.phone?.type && type === 'phone') {
      if (errors.phone?.type === 'required')
        return 'El campo teléfono es obligatorio';
      if (errors.phone?.type === 'minLength')
        return 'El teléfono debe tener almenos 3 caracteres';
      if (errors.phone?.type === 'pattern') return 'Phone must be number';
    }

    if (errors.province?.type && type === 'province') {
      if (errors.province?.type === 'required')
        return 'El campo Provincia es obligatorio';
    }

    if (errors.firstname?.type && type === 'firstname') {
      if (errors.firstname?.type === 'required')
        return 'El campo Nombre es obligatorio';
      if (errors.firstname?.type === 'minLength')
        return 'El nombre debe tener almenos 3 caracteres';
    }
    if (errors.lastname?.type && type === 'lastname') {
      if (errors.lastname?.type === 'required')
        return 'El campo apellido es obligatorio';
      if (errors.lastname?.type === 'minLength')
        return 'El apellido debe tener almenos 3 caracteres';
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
                Mi dirección
              </Typography>
            </Grid>
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
                    label="First Name*"
                    {...field}
                    error={errors.firstname?.type ? true : false}
                    helperText={errors && getErrorText(errors, 'firstname')}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="lastname"
                control={control}
                defaultValue={user.lastName}
                rules={{
                  required: true,
                  minLength: 3
                }}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    label="Last Name*"
                    {...field}
                    error={errors.lastname?.type ? true : false}
                    helperText={errors && getErrorText(errors, 'lastname')}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="address"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 5
                }}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    label="Address*"
                    {...field}
                    error={errors.address?.type ? true : false}
                    helperText={errors && getErrorText(errors, 'address')}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="city"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 3
                }}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    label="City*"
                    {...field}
                    error={errors.city?.type ? true : false}
                    helperText={errors && getErrorText(errors, 'city')}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="zip"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 5,
                  pattern: /^\d+$/
                }}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    label="Postcode / ZIP*"
                    {...field}
                    error={errors.zip?.type ? true : false}
                    helperText={errors && getErrorText(errors, 'zip')}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="phone"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 9,
                  pattern: /^\+?\d+$/
                }}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    label="teléfono*"
                    {...field}
                    error={errors.phone?.type ? true : false}
                    helperText={errors && getErrorText(errors, 'phone')}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="country"
                control={control}
                defaultValue="Spain"
                render={({ field }) => (
                  <TextField
                    fullWidth
                    label="Country"
                    disabled={true}
                    {...field}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                name="province"
                control={control}
                defaultValue=""
                rules={{
                  required: true
                }}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    select
                    label="Provincia*"
                    {...field}
                    error={errors.province?.type ? true : false}
                    helperText={getErrorText(errors, 'province')}
                  >
                    {cities.map(option => (
                      <MenuItem key={option.label} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
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
    user: state.user,
    cities: state.cities
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveUser: user => dispatch(actions.saveUser(user)),
    saveUserAddress: address => dispatch(actions.saveUserAddress(address))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserAddresses);
