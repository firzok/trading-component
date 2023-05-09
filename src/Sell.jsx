import React, { useEffect } from 'react';
import './Sell.css';
import CoinDropdown from './CoinDropdown';
import getTokenBalance from './helper';

function Sell({ account }) {
  function onCoinChange(coin) {
    console.log(coin);
    getTokenBalance({ coin, account })
      .then((response) => {
        console.log(response);
      })
      .catch((response) => {
        console.log(response);
      });
  }

  return (
    <div className='sell-component'>
      <div className='row' style={{ height: '30px' }}>
        <span>~$10 921.69</span>
        <span>You Sell</span>
      </div>
      <div className='row' style={{ height: '48px' }}>
        <input type='number' placeholder='Enter amount' />

        <CoinDropdown onCoinChange={onCoinChange} />
      </div>
    </div>
  );
}

export default Sell;
