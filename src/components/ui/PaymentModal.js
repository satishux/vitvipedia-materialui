import React, { useEffect } from 'react';
import {
  PayPalButtons,
  usePayPalScriptReducer
} from '@paypal/react-paypal-js';

const style = { layout: 'vertical' };

const PaymentModal = ({
  amount,
  currency,
  showSpinner,
  setPayModalOpen,
  onComplete
}) => {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
    dispatch({
      type: 'resetOptions',
      value: {
        ...options,
        currency: currency
      }
    });
  }, [currency, showSpinner, options, dispatch]);

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount
                  }
                }
              ]
            })
            .then(orderId => {
              // Your code here after create the order
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          return actions.order.capture().then(function (orderDetails) {
            // Your code here after capture the order
            if (orderDetails.status === 'COMPLETED') {
              setPayModalOpen(false);
              onComplete(orderDetails);
            }
          });
        }}
      />
    </>
  );
};

export default PaymentModal;
