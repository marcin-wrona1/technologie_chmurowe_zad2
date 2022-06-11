import React from 'react';
import { Link } from 'react-router-dom';
import arch from './arch.png';

export default () => {
  return (
    <div>
      <Link to="/">Go back home</Link>
      <br />
      Przykładowa architektura usługi "Fib Calc"
      <br />
      <img src={arch} alt="arch" />
    </div>
  );
};
