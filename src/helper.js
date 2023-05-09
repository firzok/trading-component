import Web3 from 'web3';

async function getTokenABI(tokenAddress) {
  //   const response = await axios.get(
  //     `https://api.etherscan.io/api?module=contract&action=getabi&address=${tokenAddress}&apikey=HI11SES9S87NH236URFPJRMGDY13XQ56N5`
  //   );
  //   const abi = JSON.parse(response.data.result);
  //   return abi;
}

async function getTokenBalance({ coin, accountAddress }) {
  // create an instance of Web3 with the current provider (Metamask)
  const web3 = new Web3(window.ethereum);

  // get the balance of Ethereum in the connected wallet
  const balance = await web3[coin].getBalance(accountAddress);

  // convert the balance from Wei to Ether
  return web3.utils.fromWei(balance, 'ether');
}

export default getTokenBalance;
