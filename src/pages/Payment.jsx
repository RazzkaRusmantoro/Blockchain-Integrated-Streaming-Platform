import React from "react";
import './Payment.css';
import homeImage from "../assets/homepage.jpg";
import paypalImg from "../assets/paypal.png";
import ethImg from "../assets/ethereum.png";
import btcImg from "../assets/bitcoin.png";

const Payment = () => {
  return (
    <div className="payment-container">
      <div className="payment-content">
        <h2 className="text">Payment</h2>
        <p>
          <input type="radio" id="creditCard" name="paymentOption" value="creditCard" />
          <label htmlFor="creditCard" style={{ fontSize: "20px" }}>
            Credit Cards
          </label>
        </p>
        <p>
          <input type="radio" id="paypal" name="paymentOption" value="paypal" />
          <label htmlFor="paypal">
            <img src={paypalImg} alt="PayPal" style={{ width: "60px" }} />
          </label>
        </p>
        <p>
          <input type="radio" id="ethereum" name="paymentOption" value="ethereum" />
          <label htmlFor="ethereum">
            <img src={ethImg} alt="Ethereum" style={{ width: "17.5px" }} />
          </label>
        </p>
        <p>
          <input type="radio" id="bitcoin" name="paymentOption" value="bitcoin" />
          <label htmlFor="bitcoin">
            <img src={btcImg} alt="Bitcoin" style={{ width: "35px" }} />
          </label>
        </p>
      </div>
    </div>
  );
};

export default Payment;
