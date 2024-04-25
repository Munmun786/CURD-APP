import {Request,Response} from "express";

import UserModel from "../models/users";
import{createUser,findAndUpdate,findUser,deleteUser} from "../services/users.service"



const homeDetail = async (req:Request,resp:Response)=>{
//--- ADD ---
  //  const user = await createUser({name:'test data', dept:'xyz'})

  //---- Upadate----
//const user = await findAndUpdate({name:'ram'},{dept:'HR'},{new:true});

//--Find----

//const user = await findUser({id:'sdiksnv'})

//---delete ---
const user = await deleteUser({id:'sdafs'})


    resp.json({
        message: "Home Page"
    })
}

export {
    homeDetail
}