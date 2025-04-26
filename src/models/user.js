import mongoose ,{Schema} from "mongoose";

const Userschema = new Schema({
    name:String,
    email:{
        type:String,
        required:[true,"email is required"]
    },
    password:{
        type:String,
        required:[true,"password is required"]
       
    },
    about:String,
    profileURL: String,
    city: String,
    country: String,
   

})
export const User = mongoose.models.users || mongoose.model("users",Userschema);
