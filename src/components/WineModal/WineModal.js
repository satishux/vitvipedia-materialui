import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Snackbar
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import WineInfo from '../ui/WineInfo';
import actions from '../../store/actions';
import { useStyles } from './styles';


const WineModal = ({
  slug,
  products,
  open,
  onClose,
}) => {
  const history = useHistory();
  const classes = useStyles();
  const [wine, setWine] = useState(null);
  const [err, setErr] = useState({ show: false, message: '' });

  useEffect(() => {
    if (products.length > 0) {
      const index = products.findIndex(product => product.slug === slug);
      if (index !== -1) {
        setWine(products[index]);
      }
    }
  }, [slug, products]);


  return (
    <>
      <Dialog
        fullWidth={true}
        maxWidth="lg"
        open={open}
        onClose={() => onClose(false)}
      >
        {wine ? (
          <>
            <DialogTitle>{wine.name}</DialogTitle>
            <DialogContent>
              <Box className={classes.modalContainer}>
                <Box className={classes.imgStyle}>
                  <img
                    className={classes.media}
                    src={wine.img}
                    alt={wine.name}
                  />
                </Box>
                <Box className={classes.RightBoxSection}>
                  <Box style={{ flex: 1 }}>
                    <WineInfo
                      Tamaño={wine.Tamaño}
                      type={wine.type}
                      variedad={wine.variedad}
                      description={wine.description}
                      stock={wine.stock}
                      dorigen={wine.dorigen}
                    />
                  </Box>

                  <Box className={classes.ActionButtons}>
                    {/* <QuantityCounter
                      wineStock={wine.stock}
                      onChange={setQuantity}
                      quantity={quantity}
                    />
                    <Button
                      variant="outlined"
                      startIcon={<ShoppingCartIcon />}
                      onClick={cartClickHandler}
                      style={{
                        height: '2.75em',
                        backgroundColor: '#004874',
                        color: 'white',
                        textTransform: 'initial',
                        marginRight: '1em',

                        marginBottom: '0.6em'
                      }}
                      className={classes.cartBtn}
                    >
                      Añadir al carrito
                    </Button> */}
                    {/* <Button
                      variant="outlined"
                      style={{
                        height: '2.75em',
                        backgroundColor: '#B25B58',
                        color: 'white',
                        textTransform: 'initial',
                        marginRight: '1em',
                        marginBottom: '0.6em'
                      }}
                    >
                      Comprar
                    </Button> */}
                    <Button
                      variant="outlined"
                      style={{
                        height: '2.75em',
                        backgroundColor: 'black',
                        color: 'white',
                        textTransform: 'initial',
                        marginRight: '1em'
                      }}
                      onClick={() => history.push(`/vino/${wine.slug}`)}
                    >
                      Más información
                    </Button>
                  </Box>
                </Box>
              </Box>
            </DialogContent>
            {/* <DialogActions>
              <Button onClick={() => onClose(false)}>Cerrar</Button>
            </DialogActions> */}
          </>
        ) : (
          <div className={classes.spinner}>
            <CircularProgress />
          </div>
        )}
      </Dialog>
      <Snackbar
        open={err.show}
        message={err.message}
        ContentProps={{ style: { backgroundColor: '#004874' } }}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={() => setErr({ show: false, message: '' })}
        autoHideDuration={2000}
      />
    </>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products,
    cart: state.cart,
    user: state.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToCart: product => dispatch(actions.addToCart(product)),
    removeFromCart: product => dispatch(actions.removeFromCart(product)),
    updateServerCart: (updatedProduct, products, token) =>
      dispatch(actions.updateServerCart(updatedProduct, products, token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WineModal);
