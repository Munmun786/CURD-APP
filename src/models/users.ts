import { Schema,model,Document   } from "mongoose";

export interface UserDocument extends Document{
    name:string;
    dept:string;
}

interface User{
    name:String;
    dept:String
}

const userschema = new Schema<User>({
    name:{
        type:String,
        required:true
    },
    dept:{
        type:String,
        required:true
    }
})


const UserModel = model<User>('User', userschema);

export default UserModel;