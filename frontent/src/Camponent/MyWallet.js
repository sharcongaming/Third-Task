import axios from 'axios';
import React, { useEffect, useState } from 'react'

const MyWallet = () => {
    const [address, setAddress] = useState(null);
    const [balances, setBalances] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const getAccount = async () => {
        const userAddress = await  connectWallet();
        setAddress(userAddress);
      };
  
      getAccount();
    }, []);
  
    const fetchBalances = async () => {
      setError(null);
      if (!address) return;
  
      try {
        const response = await axios.get(`${API_URL}/balances/${address}`);
        setBalances(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    const API_URL = 'http://localhost:8000/connectWallet'; // Replace with your backend URL

async function getBalances(address) {
  const response = await axios.get(`${API_URL}/balances/${address}`);
  return response.data;
}
  return (
    <div>
{address ? (
        <>
          <p>Connected Address: {address}</p>
          <button onClick={fetchBalances}>Fetch Balances</button>
          {balances && (
            <div>
              <p>ETH Balance: {balances.ethBalance}</p>
              {/* Display other token and NFT balances if retrieved */}
            </div>
          )}
        </>
      ) : (
        <p>Please connect your wallet.</p>
      )}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

    </div>
  )
}

export default MyWallet