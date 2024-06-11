import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModal from "../Modal/UserModal.js";
import { Contract } from "ethers";
// import web3 from './utils/web3';



export const Register = async (req, res) => {
  try {
    const { userData } = req.body.userData;
    const { name, email, password,  confirmpassword} = req.body.userData;
    if (!name || !email || !password ||  !confirmpassword)
      return res.json({
        success: false,
        message: "All Feilds are Mandatory!",
      });

    const isEmailExist = await UserModal.find({ email: email });
    if (isEmailExist.length) {
      return res.json({
        success: false,
        message: "Email already exists! Try a new one.",
      });
    }

    const hashPassW = await bcrypt.hash(password, 10);

    const user = new UserModal({
      name:name,
      email:email,
      password: hashPassW,
      confirmpassword: confirmpassword,
     
    });

    await user.save();
    return res.json({
      success: true,
      message: "User Registered Successfully!",
      user:user
    });
  } catch (error) {
    return res.json({ success: false, message: error.message});
  }
};



 
export const Login = async (req, res) => {
  try {
    const { email, password } = req.body.userData;
    if (!email || !password)
      return res.json({
        success : false,
        message: "All fields are mandtory..",
      });

    const user = await UserModal.findOne({ email: email });
    if (!user)
      return res.json({ success : false, message: "User not found.." });

    const isPasswordRight = await bcrypt.compare(password, user.password);
    // console.log(isPasswordRight, "isPasswordRight");
    if (isPasswordRight) {
      const userObeject = {
        email: user.email,
        _id: user._id,
      };
    
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
      // console.log(token, "token her");
      return res.json({
        success : true,
        message: "Login Successfull.",
        user: userObeject,
        token: token,
      });
    }
    return res.json({ success : false, message: "Password is wrong." });
  } catch (error) {
    return res.json({ success : false, message: error.message });
  }
};

export const Number = async (req, res) => {
  const {number} = req.body;
  const accounts = await web3.eth.getAccounts();
  const result = await Contract.methods
  .setNumber(number)
  .send({from:accounts[0]});
  res.json({message:"number set successfully"})

}


export const  authenticate = async (req,res)=> {
  const provider = await detectEthereumProvider();
  const accounts = await provider.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];

  const message = 'Please sign this message to authenticate with our service.';
  const signature = await provider.request({
    method: 'personal_sign',
    params: [message, account]
  });

}
  

 
  



export const balance =  async (req, res) => {
  const { address } = req.params;
  try {
    const balance = await web3.eth.getBalance(address);
    res.json({ balance: web3.utils.fromWei(balance, 'ether') });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const verifysignature = async(req, res) => {
  const { account, message, signature } = req.body;
  const recoveredAddress = recoverPersonalSignature({
    data: message,
    sig: signature
  });

  if (recoveredAddress.toLowerCase() === account.toLowerCase()) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
};

// Connect to MetaMask wallet
// const ethereum = window.ethereum;

async function connectWallet() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  return accounts[0];
}

// Send tokens using MetaMask

async function sendTokens(toAddress, amount) {
  const account = await connectWallet();
  const tx = await ethereum.request({
    method: 'eth_sendTransaction',
    params: [{
      from: account,
      to: toAddress,
      value: web3.utils.toWei(amount.toString(), 'ether'),
    }]
  });
  return tx;
}







