import React, { useEffect, useState } from 'react'
const Web3 = require('web3');
const Balance = () => {
    const [balance, setBalance] = useState(0);
    const [account, setAccount] = useState('');

    useEffect(() => {
        const loadWeb3 = async () => {
          if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const accounts = await web3.eth.getAccounts();
            setAccount(accounts[0]);
            const balance = await web3.eth.getBalance(accounts[0]);
            setBalance(web3.utils.fromWei(balance, 'ether'));
          }
        };
        loadWeb3();
      }, []);
  return (
    <div>
 <h2>Balance</h2>
      <p>Account: {account}</p>
      <p>Balance: {balance} ETH</p>

    </div>
  )
}

export default Balance