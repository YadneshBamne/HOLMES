import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

// Custom styling for the CardElement
const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  },
};

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMessage, setPaymentMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmCardPayment('your-client-secret', {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'Test User', // Replace with dynamic user data
        },
      },
    });

    setIsProcessing(false);

    if (error) {
      setPaymentMessage(error.message);
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      setPaymentMessage('Payment successful!');
    }
  };

  return (
    <div style={styles.container} className='items-center'>
      <h2 style={styles.heading}>Complete Your Payment</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.cardElementContainer}>
          <CardElement options={CARD_ELEMENT_OPTIONS} />
        </div>
        <button
          type="submit"
          style={styles.button}
          disabled={!stripe || isProcessing}
        >
          {isProcessing ? 'Processing...' : 'Pay Now'}
        </button>
        {paymentMessage && <p style={styles.message}>{paymentMessage}</p>}
      </form>
    </div>
  );
};

// Inline styling
const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #e6ebf1',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: '1.5rem',
    color: '#32325d',
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  cardElementContainer: {
    padding: '10px',
    border: '1px solid #e6ebf1',
    borderRadius: '4px',
    backgroundColor: '#f8f9fa',
  },
  button: {
    backgroundColor: '#6772e5',
    color: '#fff',
    fontSize: '16px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    textAlign: 'center',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#5469d4',
  },
  buttonDisabled: {
    backgroundColor: '#cfd7df',
    cursor: 'not-allowed',
  },
  message: {
    marginTop: '10px',
    fontSize: '14px',
    textAlign: 'center',
    color: '#fa755a',
  },
};

export default PaymentForm;
