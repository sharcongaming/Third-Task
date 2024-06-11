// import React, { useState, useEffect } from 'react';
// import getWeb3 from '../utils/web3';
// import axios from 'axios';

// const Authenticate = ({ setAuthenticated, setAccount }) => {
//   const [message, setMessage] = useState('Authenticate to continue');
//   const [web3, setWeb3] = useState(null);

//   useEffect(() => {
//     const init = async () => {
//       try {
//         const web3Instance = await getWeb3();
//         setWeb3(web3Instance);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     init();
//   }, []);

//   const authenticate = async () => {
//     if (!web3) return;

//     const accounts = await web3.eth.getAccounts();
//     const account = accounts[0];
//     const message = `Authentication message for ${account}`;
//     const signature = await web3.eth.personal.sign(message, account);

//     try {
//       const response = await axios.post('http://localhost:8000/authenticate', {
//         address: account,
//         signature,
//         message
//       });

//       if (response.data.success) {
//         setAuthenticated(true);
//         setAccount(account);
//         setMessage('Authentication successful');
//       } else {
//         setMessage('Authentication failed');
//       }
//     } catch (error) {
//       setMessage('Error during authentication');
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <p>{message}</p>
//       <button onClick={authenticate}>Authenticate</button>
//     </div>
//   );
// };

// export default Authenticate;
