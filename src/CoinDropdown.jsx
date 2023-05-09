import React, { useState } from 'react';
import './CoinDropdown.css';
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc';
import { coinList } from './coinList';
import getTokenBalance from './helper';

function CoinDropdown({ onCoinChange }) {
  const [coins, setCoins] = useState(coinList);
  const [selectedCoin, setSelectedCoin] = useState(coinList[0]);
  const [isOpen, setIsOpen] = useState(false);

  //   useEffect(() => {
  //     fetch('https://api.coingecko.com/api/v3/coins/list')
  //       .then((response) => response.json())
  //       .then((coins) => {
  //         debugger;
  //         setCoins(coins);
  //       })
  //       .catch(() => {
  //         console.log('Unable to fetch alt coins');
  //       });
  //   }, []);

  const handleCoinChange = (coin) => {
    setSelectedCoin(coin);
    setIsOpen(false);

    onCoinChange(coin);

    getTokenBalance('0x9c4428f0f17363596ff1c8f720e9bfda230effe2')
      .then((response) => {
        console.log(response);
      })
      .catch((response) => {
        console.log(response);
      });
  };

  return (
    <div className='coin-dropdown'>
      <div className='select-container'>
        <div className='selected-value' onClick={() => setIsOpen(!isOpen)}>
          {selectedCoin && <img src={`coinIcons/${selectedCoin}.svg`} />}
          {selectedCoin && <span className='coin-id'>{selectedCoin}</span>}
          {isOpen ? <VscChevronUp /> : <VscChevronDown />}
        </div>
        {isOpen && (
          <div className='options-container'>
            {coins.map((coin) => (
              <div key={coin} className='option' onClick={() => handleCoinChange(coin)}>
                <img src={`coinIcons/${coin}.svg`} alt={coin} />
                <span>{coin}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CoinDropdown;
