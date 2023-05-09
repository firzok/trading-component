import './App.css';
import { FaCog, FaSync } from 'react-icons/fa';
import Buy from './Buy';
import Sell from './Sell';
import Button from './Button';
import { useEffect, useState } from 'react';

function App() {
  const [account, setAccount] = useState();

  useEffect(() => {
    // Check if Metamask is installed
    if (typeof window.ethereum !== 'undefined') {
      console.log('Metamask is installed!');

      // Request access to the user's wallet
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((accounts) => {
          console.log('Connected to wallet:', accounts[0]);
          setAccount(accounts[0]);
        })
        .catch((error) => {
          console.log('Error connecting to wallet:', error);
        });
    }
  }, []);
  return (
    <div className='App'>
      <div className='rounded-rectangle'>
        <div className='row top-right'>
          <button className='refresh-button'>
            <FaSync />
          </button>
          <button className='setting-button'>
            <FaCog />
          </button>
        </div>

        {/*  */}
        <Buy account={account} />
        <Sell account={account} />

        <div className='row'>
          <Button value='25%' />
          <Button value='50%' selected />
          <Button value='75%' />
          <Button value='100%' />
        </div>

        <div style={{ width: '80%', marginTop: '20px' }}>
          <button className='swap-button'>Swap</button>
        </div>
      </div>
    </div>
  );
}

export default App;
