import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  Grid,
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Dialog,
  DialogContent
} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PaymentModal from '../components/ui/PaymentModal';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import axios from 'axios';

const consumer_key = 'ck_1dba763719cb378e99ec68def39b18b16e9cb3c7';
const consumer_secret = 'cs_fac9c617b03b9dc71562585a46772f4103585c48';

const Checkout = ({ address, cities, cart, cartTotals }) => {
  const [subTotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [payModalOpen, setPayModalOpen] = useState(false);

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
  const getAddressField = (label, value) => {
    return (
      <TextField
        label={label}
        defaultValue="Loading"
        value={address && value}
        style={{ width: '100%', marginBottom: '.5em' }}
        InputProps={{
          readOnly: true
        }}
      />
    );
  };

  const handlePayment = () => {
    setPayModalOpen(true);
  };

  const getProvinceFromCode = () => {
    if (address && address.state !== '') {
      const index = cities.findIndex(city => city.value === address.state);

      if (index !== 1) {
        return cities[index].label;
      } else {
        return '';
      }
    }
  };

  const createOrder = orderDetails => {
    // const amount = orderDetails.purchase_units[0].amount.value;
    const items = cart.map(item => ({
      product_id: item.id,
      quantity: item.quantity
    }));
    const data = {
      payment_method: 'bacs',
      payment_method_title: 'Paid using paypal',
      set_paid: true,
      shipping: address,
      line_items: items
      //   shipping_lines: [
      //     {
      //       method_id: 'flat_rate',
      //       method_title: 'Flat Rate',
      //       total: 0
      //     }
      //]
    };

    axios
      .post(
        `https://backend.vitivipedia.com/wp-json/wc/v3/orders?consumer_key=${consumer_key}&consumer_secret=${consumer_secret}`,
        data
      )
      .then(response => response.data)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <Container maxWidth="md" style={{ flex: 1, paddingBottom: '2em' }}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h4" component="h4">
              Shipping Address
            </Typography>
          </Box>
          <Box style={{ padding: '2em 2em  2em 0' }}>
            {address && getAddressField('First Name', address.first_name)}
            {address && getAddressField('Last Name', address.last_name)}
            {address && getAddressField('Address', address.address_1)}
            {address && getAddressField('City', address.city)}
            {address && getAddressField('Postal Code', address.postcode)}
            {address && getAddressField('Country', 'España')}
            {address && getAddressField('Province', getProvinceFromCode())}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h4">
            Your Order
          </Typography>
          <Box style={{ margin: '2em 0 2em 2em' }}>
            <TableContainer component={Paper}>
              <Table style={{ minWidth: '100%' }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">Image</TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Qty</TableCell>
                    <TableCell align="right">Total Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.length > 0 &&
                    cart.map(item => (
                      <TableRow key={item.name}>
                        <TableCell align="right">
                          <img
                            src={item.img}
                            alt={item.name}
                            style={{ width: 'auto', height: '70px' }}
                          />
                        </TableCell>

                        <TableCell component="th" scope="row">
                          {item.name}
                        </TableCell>
                        <TableCell align="right">{item.quantity}</TableCell>
                        <TableCell align="right">{item.subtotal}€</TableCell>
                      </TableRow>
                    ))}
                  <TableRow>
                    <TableCell align="right"></TableCell>

                    <TableCell component="th" scope="row"></TableCell>
                    <TableCell align="right">Subtotal</TableCell>
                    <TableCell align="right">{subTotal}€</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell align="right"></TableCell>

                    <TableCell component="th" scope="row"></TableCell>
                    <TableCell align="right">Total</TableCell>
                    <TableCell align="right">{total}€</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          <Box style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              style={{
                backgroundColor: 'rgb(158, 30, 30)',
                color: 'white',
                paddingLeft: '2em',
                paddingRight: '2em'
              }}
              onClick={handlePayment}
            >
              Pay
            </Button>
            <PayPalScriptProvider
              options={{
                'client-id':
                  'Acj2p1D319x21lKd42QWEieLhwwoVNXcYbeMDgZldTCCiNI44bR4CAk3vcEHR4QWaWboQ6qDU0AxOtsb',
                currency: 'EUR',
                intent: 'capture'
              }}
            >
              <Dialog
                fullWidth={true}
                maxWidth="lg"
                open={payModalOpen}
                onClose={() => setPayModalOpen(false)}
              >
                <DialogContent>
                  <PaymentModal
                    amount={total}
                    currency="EUR"
                    showSpinner={true}
                    setPayModalOpen={setPayModalOpen}
                    onComplete={createOrder}
                  />
                </DialogContent>
              </Dialog>
            </PayPalScriptProvider>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    address: state.userAddress,
    cities: state.cities,
    cart: state.cart,
    cartTotals: state.cartTotals
  };
};

export default connect(mapStateToProps)(Checkout);
