import React, { useState } from 'react'
import { Connection, PublicKey } from '@solana/web3.js';
// import { PhantomProvider } from '@phantomwallet/providers';

const NFTs = () => {
    const [nfts, setNfts] = useState([]);
    const [account, setAccount] = useState('');
  return (
    <div>
           <h2>NFT Collections</h2>
      <p>Account: {account}</p>
      <div>
        {nfts.map((nft, index) => (
          <div key={index}>
            <img src={nft.image} alt={nft.name} />
            <p>Name: {nft.name}</p>
            <p>Description: {nft.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NFTs