import React, { useState } from 'react';
import Web3 from 'web3';
import { useNavigate } from 'react-router-dom';
import './Payment.css';
import ethImg from '../assets/ethereum.png';
import btcImg from '../assets/bitcoin.png';
import paypalImg from '../assets/paypal.png';

const Payment = () => {
  const [selectedPaymentOption, setSelectedPaymentOption] = useState('');
  const navigate = useNavigate();

  const handlePaymentOptionChange = (event) => {
    setSelectedPaymentOption(event.target.value);
  };

  const handlePayment = async () => {
    if (selectedPaymentOption === 'ethereum') {
      if (typeof window.ethereum !== 'undefined') {
        const web3 = new Web3(window.ethereum);

        try {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          const recipientAddress = '0xd20Aef8aEF694d436B3A3a30C43A24fFa8FAC95A'; // Replace with recipient's Ethereum address
          const amountToSend = web3.utils.toWei('1', 'ether'); // Amount in Wei (1 ether = 10^18 Wei)

          const receipt = await web3.eth.sendTransaction({
            from: accounts[0],
            to: recipientAddress,
            value: amountToSend
          });

          console.log('Transaction receipt:', receipt);
          alert('Payment successful!');
          
          // Redirect to WatchParty page after successful payment
          navigate('/watch-party');

        } catch (error) {
          console.error('Transaction error:', error);
          alert('Payment failed. Please check the console for details.');
        }
      } else {
        console.error('Metamask is not installed');
        alert('Metamask is not installed');
      }
    } else if (selectedPaymentOption === 'paypal') {
      alert('Redirecting to PayPal is not implemented in this demo.');
    } else if (selectedPaymentOption === 'bitcoin') {
      alert('Redirecting to Bitcoin payment is not implemented in this demo.');
    } else {
      alert('Please select a payment method.');
    }
  };

  return (
    <div className="payment-container">
      <div className="payment-content">
        <h2 className="text">Payment</h2>
        <div className="radioButtonsDiv">
          <div className="radioOption">
            <input
              type="radio"
              id="creditCard"
              name="paymentOption"
              value="creditCard"
              onChange={handlePaymentOptionChange}
            />
            <label htmlFor="creditCard" style={{ fontSize: "15px", marginLeft: "0px" }}>
              Credit Cards
            </label>
          </div>
          <div className="radioOption">
            <input
              type="radio"
              id="paypal"
              name="paymentOption"
              value="paypal"
              onChange={handlePaymentOptionChange}
            />
            <label htmlFor="paypal">
              <img src={paypalImg} className="mleft" alt="PayPal" style={{ width: "60px" }} />
            </label>
          </div>
          <div className="radioOption">
            <input
              type="radio"
              id="ethereum"
              name="paymentOption"
              value="ethereum"
              onChange={handlePaymentOptionChange}
            />
            <label htmlFor="ethereum">
              <img src={ethImg} className="mleft" alt="Ethereum" style={{ width: "17.5px" }} />
            </label>
          </div>
          <div className="radioOption">
            <input
              type="radio"
              id="bitcoin"
              name="paymentOption"
              value="bitcoin"
              onChange={handlePaymentOptionChange}
            />
            <label htmlFor="bitcoin">
              <img src={btcImg} alt="Bitcoin" style={{ width: "35px" }} />
            </label>
          </div>
        </div>
        <div>
          <button className="contButton" onClick={handlePayment}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
