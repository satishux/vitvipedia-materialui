import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
//import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import {
  Button,
  IconButton,
  Container,
  Typography,
  Box,
  CircularProgress
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import DeleteIcon from '@mui/icons-material/Delete';
import QuantityCounter from '../components/ui/QuantityCounter';
import actions from '../store/actions';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const useStyles = makeStyles(theme => ({
  cartItemGutters: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      paddingRight: 0
    }
  }
}));

const Cart = ({
  cartList,
  addToCart,
  removeFromCart,
  updateCart,
  user,
  loading,
  updateItemInCart,
  products,
  cartTotals
}) => {
  const classes = useStyles();
  //const [winesPrice, setWinesPrice] = useState(0);
  const [subTotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const [deletingItem, setDeletingItem] = useState(null);
  const history = useHistory();

  // useEffect(() => {
  //   const calculatePrice = () => {
  //     let totalPrice = cartList.reduce((value, item) => {
  //       return value + item.price * item.quantity;
  //     }, 0);
  //     return totalPrice;
  //   };
  //   const calculateDelivery = () => {
  //     let totalDelivery = cartList.reduce((value, item) => {
  //       // console.log(typeof item.delivery);
  //       return value + parseFloat(item.delivery);
  //     }, 0);
  //     return totalDelivery;
  //   };

  //   setWinesPrice(calculatePrice());
  //   setDeliveryPrice(calculateDelivery());
  // }, [cartList]);

  useEffect(() => {
    if (cartTotals.subtotal) {
      const st = cartTotals.subtotal.substring(
        0,
        cartTotals.subtotal.length - 2
      );
      setSubtotal(st);
    }

    if (cartTotals.total) {
      const t = cartTotals.total.substring(0, cartTotals.total.length - 2);
      setTotal(t);
    }
  }, [cartTotals]);

  const cartProductLeft = productData => {
    return (
      <div style={{ display: 'flex' }}>
        <div>
          <img
            src={productData.img}
            alt={productData.name}
            style={{ minWidth: '100px', height: '100px', objectFit: 'contain' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography component="h5" variant="h5">
            {productData.name}
          </Typography>
        </div>
      </div>
    );
  };

  const cartProductRight = productData => {
    return (
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'flex-end',
          alignItems: 'center',
          height: '100%'
        }}
      >
        <div
          style={{ display: 'flex', marginRight: '3em', alignItems: 'center' }}
        >
          <Typography variant="h6">{productData.price} €</Typography>
          <div style={{ marginTop: '0.68em', marginLeft: '1em' }}>
            <QuantityCounter
              quantity={productData.quantity}
              wineStock={productData.stock}
              onChange={qty => quantityChangeHandler(qty, productData)}
            />
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6">
            {productData.price * productData.quantity} €
          </Typography>

          {loading && deletingItem && deletingItem === productData.id ? (
            <CircularProgress />
          ) : (
            <IconButton
              onClick={() => {
                setDeletingItem(productData.id);
                removeFromCart(productData, cartList, user.token);
              }}
              size="large">
              <DeleteIcon />
            </IconButton>
          )}
        </div>
      </div>
    );
  };

  const quantityChangeHandler = (qty, productData) => {
    const updatedProduct = { ...productData };
    updatedProduct.quantity = qty;

    //const updatedCart = [...cartList];
    // const index = updatedCart.findIndex(
    //   product => product.slug === productData.slug
    // );

    // if (index !== -1) {
    //   updatedCart[index] = updatedProduct;
    //   updateCart(updatedCart);
    // }
    updateItemInCart(updatedProduct, products, user.token);
  };

  return (
    <Container style={{ flex: 1 }}>
      {cartList.length > 0 && (
        <List>
          {cartList.map(item => (
            <>
              <ListItem classes={{ gutters: classes.cartItemGutters }}>
                <Grid container>
                  <Grid item xs={12} sm={6}>
                    {cartProductLeft(item)}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    {cartProductRight(item)}
                  </Grid>
                </Grid>
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      )}
      {cartList.length === 0 && (
        <Box
          style={{
            width: '100%',
            height: '500px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px dashed #ccc'
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}
          >
            <ShoppingCartIcon style={{ fontSize: '100px' }} />
            <Typography variant="h6">No hay productos en el carrito</Typography>
          </div>
        </Box>
      )}
      {cartList.length > 0 && (
        <Box
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: '1em'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex' }}>
              <Typography variant="h6"> Precio vino:&nbsp; </Typography>
              <Typography variant="h6"> {subTotal} €</Typography>
            </div>
            <div style={{ display: 'flex' }}>
              <Typography variant="h6"> Precio envio:&nbsp; </Typography>
              <Typography variant="h6"> {deliveryPrice} €</Typography>
            </div>

            <div style={{ display: 'flex' }}>
              <Typography variant="h6"> Precio total:&nbsp; </Typography>
              <Typography variant="h6"> {total} €</Typography>
            </div>
            <div style={{ display: 'flex', marginTop: '1em' }}>
              <Button
                variant="contained"
                onClick={() => history.push('/checkout')}
                style={{
                  width: '100%',

                  backgroundColor: '#c72121',
                  color: 'white'
                }}
              >
                Comprar
              </Button>
            </div>
          </div>
        </Box>
      )}
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    cartList: state.cart,
    user: state.user,
    loading: state.loading,
    products: state.products,
    cartTotals: state.cartTotals
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: product => dispatch(actions.addToCart(product)),
    removeFromCart: (product, cart, token) =>
      dispatch(actions.removeFromCart(product, cart, token)),
    updateCart: cart => dispatch(actions.updateCart(cart)),
    updateItemInCart: (updatedProduct, products, token) =>
      dispatch(actions.updateItemInCart(updatedProduct, products, token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
