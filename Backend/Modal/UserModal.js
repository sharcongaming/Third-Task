


import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
   
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
    // ,
    // balance: {
    //     userId: String,
    //     balance: Number,
    //     coins: Number
    // },
    // number:{
    //     type: Number,
    //     required: true
    // },

})
export default mongoose.model("User", userSchema)



