import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModal from "../Modal/UserModal.js";


export const Register = async (req, res) => {
  try {
    const {  email, password,} = req.body;
    if ( !email || !password )
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
        password: password,
      email:email,
     
     
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
    const { email, password } = req.body;
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
        // name: user.name,
        email: user.email,
        _id: user._id,
      };
        // console.log("Before ")
        // console.log(expirytime, "expirytime")
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